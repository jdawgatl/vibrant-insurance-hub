
import { createContext, useContext, useEffect, useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { EyeOff, Text, Moon } from "lucide-react";

interface AccessibilityContextType {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  toggleHighContrast: () => void;
  toggleLargeText: () => void;
  toggleReducedMotion: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (highContrast) {
      root.classList.add("high-contrast");
    } else {
      root.classList.remove("high-contrast");
    }
    if (largeText) {
      root.classList.add("large-text");
    } else {
      root.classList.remove("large-text");
    }
    if (reducedMotion) {
      root.classList.add("reduce-motion");
    } else {
      root.classList.remove("reduce-motion");
    }
  }, [highContrast, largeText, reducedMotion]);

  return (
    <AccessibilityContext.Provider
      value={{
        highContrast,
        largeText,
        reducedMotion,
        toggleHighContrast: () => setHighContrast(prev => !prev),
        toggleLargeText: () => setLargeText(prev => !prev),
        toggleReducedMotion: () => setReducedMotion(prev => !prev),
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function AccessibilityControls() {
  const context = useContext(AccessibilityContext);
  if (!context) throw new Error("useAccessibility must be used within AccessibilityProvider");

  return (
    <div
      className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg space-y-2"
      role="region"
      aria-label="Accessibility controls"
    >
      <h2 className="text-sm font-semibold mb-2" id="accessibility-title">Accessibility Options</h2>
      <div className="flex flex-col gap-2">
        <Toggle
          aria-label="High contrast mode"
          pressed={context.highContrast}
          onPressedChange={context.toggleHighContrast}
          className="flex items-center gap-2 w-full"
        >
          <EyeOff className="h-4 w-4" />
          <span>High Contrast</span>
        </Toggle>
        <Toggle
          aria-label="Large text mode"
          pressed={context.largeText}
          onPressedChange={context.toggleLargeText}
          className="flex items-center gap-2 w-full"
        >
          <Text className="h-4 w-4" />
          <span>Large Text</span>
        </Toggle>
        <Toggle
          aria-label="Reduced motion mode"
          pressed={context.reducedMotion}
          onPressedChange={context.toggleReducedMotion}
          className="flex items-center gap-2 w-full"
        >
          <Moon className="h-4 w-4" />
          <span>Reduce Motion</span>
        </Toggle>
      </div>
    </div>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error("useAccessibility must be used within AccessibilityProvider");
  }
  return context;
}
