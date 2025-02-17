
import { useEffect, useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  LogOut, 
  Users, 
  FileText, 
  DollarSign, 
  BookOpen,
  FileText as QuoteIcon,
  Loader2
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
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        throw error;
      }

      if (!session) {
        toast({
          variant: "destructive",
          title: "Session expired",
          description: "Please log in again to continue.",
        });
        navigate("/agent-login");
        return;
      }

      // Set up real-time session monitoring
      supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_OUT' || !session) {
          navigate("/agent-login");
        }
      });

    } catch (error: any) {
      console.error('Auth error:', error);
      toast({
        variant: "destructive",
        title: "Authentication error",
        description: error.message || "Please try logging in again.",
      });
      navigate("/agent-login");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "Logged out successfully",
        description: "You have been safely logged out.",
      });
      
      navigate("/agent-login");
    } catch (error: any) {
      console.error('Logout error:', error);
      toast({
        variant: "destructive",
        title: "Logout error",
        description: error.message || "An error occurred during logout.",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin text-sky-600" />
          <span className="text-lg text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }

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
