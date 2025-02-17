
import { createContext, useContext, useEffect, useState } from "react";
import { Accessibility, Eye, Moon, Sun, Type, Volume2, Grid, Keyboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

// Changed to export the AccessibilityControls component
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
      title: "Navigation Adjustment",
      items: [
        {
          icon: Volume2,
          label: "Screen Reader",
          action: context.toggleLargeText,
          active: context.largeText
        },
        {
          icon: Keyboard,
          label: "Keyboard Navigation",
          action: () => {},
          active: false
        },
        {
          icon: Grid,
          label: "Mouse Grid",
          action: () => {},
          active: false
        }
      ]
    },
    {
      title: "Color Adjustment",
      items: [
        {
          icon: Eye,
          label: "High Contrast",
          action: context.toggleHighContrast,
          active: context.highContrast
        },
        {
          icon: Moon,
          label: "Dark Mode",
          action: context.toggleDarkMode,
          active: context.darkMode
        },
        {
          icon: Sun,
          label: "Light Mode",
          action: () => context.toggleDarkMode(),
          active: !context.darkMode
        }
      ]
    },
    {
      title: "Content Adjustment",
      items: [
        {
          icon: Type,
          label: "Font Size",
          slider: true,
          value: context.fontSize,
          onChange: (value: number[]) => context.setFontSize(value[0])
        }
      ]
    }
  ];

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 rounded-full w-12 h-12 bg-purple-700 hover:bg-purple-800 text-white shadow-lg"
        size="icon"
        aria-label="Accessibility Options"
      >
        <Accessibility className="h-6 w-6" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900">
          <DialogHeader>
            <DialogTitle className="text-2xl text-purple-700 dark:text-purple-400">
              Accessibility
            </DialogTitle>
          </DialogHeader>

          <Accordion type="single" collapsible className="w-full">
            {features.map((section) => (
              <AccordionItem key={section.title} value={section.title}>
                <AccordionTrigger className="text-lg text-purple-700 dark:text-purple-400">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                    {section.items.map((item) => (
                      <div
                        key={item.label}
                        className="p-4 border rounded-lg hover:border-purple-500 transition-colors"
                      >
                        {item.slider ? (
                          <div className="space-y-4">
                            <div className="flex items-center gap-2">
                              <item.icon className="h-6 w-6 text-purple-700" />
                              <span className="font-medium">{item.label}</span>
                            </div>
                            <Slider
                              value={[item.value]}
                              onValueChange={item.onChange}
                              min={50}
                              max={200}
                              step={10}
                              className="w-full"
                            />
                          </div>
                        ) : (
                          <Button
                            variant={item.active ? "default" : "outline"}
                            className="w-full h-full flex flex-col items-center gap-2 p-4"
                            onClick={item.action}
                          >
                            <item.icon className="h-6 w-6" />
                            <span className="font-medium">{item.label}</span>
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
