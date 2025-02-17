
export interface AccessibilityContextType {
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
