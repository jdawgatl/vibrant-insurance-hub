
import { 
  Users, 
  FileText, 
  DollarSign, 
  BookOpen,
  FileText as QuoteIcon
} from "lucide-react";

export const menuItems = [
  { 
    icon: Users, 
    label: "Clients & Prospects", 
    path: "/admin/clients",
    description: "Manage client and prospect information"
  },
  { 
    icon: QuoteIcon, 
    label: "Quotes", 
    path: "/admin/quotes",
    description: "Create and manage insurance quotes"
  },
  { 
    icon: DollarSign, 
    label: "Payments", 
    path: "/admin/payments",
    description: "Process and track payments"
  },
  { 
    icon: BookOpen, 
    label: "Underwriting Manuals", 
    path: "/admin/manuals",
    description: "Access underwriting guidelines and documents"
  }
];
