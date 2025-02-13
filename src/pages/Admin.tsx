
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  LogOut, 
  Users, 
  FileText, 
  DollarSign, 
  BookOpen,
  ChevronRight,
  UserPlus,
  FileText as QuoteIcon
} from "lucide-react";

const Admin = () => {
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    fetchSubmissions();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/agent-login");
    }
  };

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/agent-login");
  };

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
            <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
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
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {menuItems.map((item) => (
                <Link key={item.label} to={item.path}>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center">
                      <div className="p-3 bg-sky-600/10 rounded-full">
                        <item.icon className="h-6 w-6 text-sky-600" />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="font-semibold text-gray-900">{item.label}</h3>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <Card className="overflow-hidden">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Contact Form Submissions
                </h2>
                <Button variant="outline" size="sm" onClick={fetchSubmissions}>
                  Refresh
                </Button>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Insurance Type</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loading ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-4">
                          Loading...
                        </TableCell>
                      </TableRow>
                    ) : submissions.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-4">
                          No submissions yet
                        </TableCell>
                      </TableRow>
                    ) : (
                      submissions.map((submission) => (
                        <TableRow key={submission.id}>
                          <TableCell>
                            {submission.first_name} {submission.last_name}
                          </TableCell>
                          <TableCell>{submission.email}</TableCell>
                          <TableCell>{submission.phone}</TableCell>
                          <TableCell>{submission.insurance_type || "N/A"}</TableCell>
                          <TableCell>
                            {new Date(submission.created_at).toLocaleDateString()}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
