
import { createContext } from "react";
import { AccessibilityContextType } from "./types";

export const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);
