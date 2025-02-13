
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
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
import { ChevronRight } from "lucide-react";
import { menuItems } from "./menuItems";

type Submission = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  insurance_type: string | null;
  created_at: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  message?: string | null;
  consent?: boolean;
};

const fetchSubmissions = async () => {
  const { data: { session } } = await supabase.auth.getSession();
      
  if (!session) {
    throw new Error("No authenticated session found");
  }

  const { data, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  console.log("Raw data from Supabase:", data);
  return data || [];
};

export const AdminDashboard = () => {
  const { data: submissions = [], isLoading, refetch } = useQuery({
    queryKey: ['submissions'],
    queryFn: fetchSubmissions
  });

  console.log("Current submissions state:", submissions);

  return (
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
          <Button variant="outline" size="sm" onClick={() => refetch()}>
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
              {isLoading ? (
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
                submissions.map((submission: Submission) => (
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
  );
};
