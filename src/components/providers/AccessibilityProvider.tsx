
import { createContext, useContext, useEffect, useState } from "react";
import { Accessibility, Eye, Moon, Sun, Type, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";

interface AccessibilityContextType {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  darkMode: boolean;
  fontSize: number;
  toggleHighContrast: () => void;
  toggleLargeText: () => void;
  toggleReducedMotion: () => void;
  toggleDarkMode: () => void;
  setFontSize: (size: number) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    const root = document.documentElement;
    if (highContrast) root.classList.add("high-contrast");
    else root.classList.remove("high-contrast");
    
    if (largeText) root.classList.add("large-text");
    else root.classList.remove("large-text");
    
    if (reducedMotion) root.classList.add("reduce-motion");
    else root.classList.remove("reduce-motion");
    
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
    
    root.style.fontSize = `${fontSize}%`;
  }, [highContrast, largeText, reducedMotion, darkMode, fontSize]);

  return (
    <AccessibilityContext.Provider
      value={{
        highContrast,
        largeText,
        reducedMotion,
        darkMode,
        fontSize,
        toggleHighContrast: () => setHighContrast(prev => !prev),
        toggleLargeText: () => setLargeText(prev => !prev),
        toggleReducedMotion: () => setReducedMotion(prev => !prev),
        toggleDarkMode: () => setDarkMode(prev => !prev),
        setFontSize,
      }}
    >
      {children}
      <AccessibilityControls isOpen={isOpen} setIsOpen={setIsOpen} />
    </AccessibilityContext.Provider>
  );
}

export function AccessibilityControls({ 
  isOpen, 
  setIsOpen 
}: { 
  isOpen: boolean; 
  setIsOpen: (open: boolean) => void;
}) {
  const context = useContext(AccessibilityContext);
  if (!context) throw new Error("useAccessibility must be used within AccessibilityProvider");

  const features = [
    {
      icon: Volume2,
      label: "Screen Reader",
      action: context.toggleLargeText,
      active: context.largeText,
      description: "Enable screen reader support"
    },
    {
      icon: Eye,
      label: "High Contrast",
      action: context.toggleHighContrast,
      active: context.highContrast,
      description: "Increase contrast for better visibility"
    },
    {
      icon: Moon,
      label: "Dark Mode",
      action: context.toggleDarkMode,
      active: context.darkMode,
      description: "Switch between light and dark themes"
    },
    {
      icon: Type,
      label: "Font Size",
      slider: true,
      value: context.fontSize,
      onChange: (value: number[]) => context.setFontSize(value[0]),
      description: "Adjust text size"
    }
  ];

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 rounded-full w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
        size="icon"
        aria-label="Accessibility Options"
      >
        <Accessibility className="h-6 w-6" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900">
          <DialogHeader>
            <DialogTitle className="text-2xl text-blue-600 dark:text-blue-400">
              Accessibility Options
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 p-4">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="p-4 border dark:border-gray-700 rounded-lg hover:border-blue-500 transition-colors"
              >
                {feature.slider ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      <span className="font-medium text-gray-900 dark:text-gray-100">{feature.label}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                    <Slider
                      value={[feature.value]}
                      onValueChange={feature.onChange}
                      min={50}
                      max={200}
                      step={10}
                      className="w-full"
                    />
                  </div>
                ) : (
                  <Button
                    variant={feature.active ? "default" : "outline"}
                    className="w-full h-full flex items-center gap-3 p-4 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={feature.action}
                  >
                    <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <div className="text-left">
                      <div className="font-medium text-gray-900 dark:text-gray-100">{feature.label}</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error("useAccessibility must be used within AccessibilityProvider");
  }
  return context;
}
