
import { useState, useEffect } from "react";
import { AccessibilityContext } from "./context";
import { AccessibilityControls } from "./AccessibilityControls";

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

export { useAccessibility } from "./useAccessibility";
