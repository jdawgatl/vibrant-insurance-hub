
import { Volume2, Eye, Moon, Type } from "lucide-react";
import { AccessibilityContextType } from "./types";

export const getAccessibilityFeatures = (context: AccessibilityContextType) => [
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
