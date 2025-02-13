
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { LogOut, Users, FileText, ChevronRight } from "lucide-react";

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
        .order("created_at", { ascending: false });

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
            <Button
              variant="ghost"
              className="w-full justify-start px-6 py-3 text-left"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-sky-600/10 rounded-full">
                    <Users className="h-6 w-6 text-sky-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">
                      Total Submissions
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {submissions.length}
                    </h3>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-sky-600/10 rounded-full">
                    <FileText className="h-6 w-6 text-sky-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">
                      Recent Submissions
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {submissions.filter(sub => {
                        const date = new Date(sub.created_at);
                        const now = new Date();
                        const diffTime = Math.abs(now.getTime() - date.getTime());
                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                        return diffDays <= 7;
                      }).length}
                    </h3>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Contact Form Submissions
                </h2>
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
