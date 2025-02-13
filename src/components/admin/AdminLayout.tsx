
import { useEffect } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { 
  LogOut, 
  Users, 
  FileText, 
  DollarSign, 
  BookOpen,
  FileText as QuoteIcon
} from "lucide-react";

const menuItems = [
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

export const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/agent-login");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/agent-login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Admin Dashboard | Standard Financial Group</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          <div className="p-6">
            <Link to="/admin" className="text-xl font-bold text-gray-800 hover:text-sky-600 transition-colors">
              Admin Dashboard
            </Link>
          </div>
          <nav className="mt-6">
            {menuItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start px-6 py-3 text-left"
                asChild
              >
                <Link to={item.path}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            ))}
            <Button
              variant="ghost"
              className="w-full justify-start px-6 py-3 text-left text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
