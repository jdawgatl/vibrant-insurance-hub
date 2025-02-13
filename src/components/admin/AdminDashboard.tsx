
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
  address: string;
  city: string;
  state: string;
  zip: string;
  insurance_type: string | null;
  message: string | null;
  created_at: string;
  consent: boolean;
};

const fetchSubmissions = async (): Promise<Submission[]> => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      console.error("No authenticated session found");
      return [];
    }

    // Log the session info for debugging
    console.log("Current session:", session);

    // First, try to get the total count to verify we can access the table
    const { count, error: countError } = await supabase
      .from('contact_submissions')
      .select('id, first_name, last_name, email, phone, address, city, state, zip, insurance_type, message, created_at, consent', { count: 'exact', head: true });

    if (countError) {
      console.error("Error checking table access:", countError);
      return [];
    }

    console.log("Total submissions count:", count);

    // Now fetch the actual data
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('id, first_name, last_name, email, phone, address, city, state, zip, insurance_type, message, created_at, consent')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return [];
    }

    if (!data) {
      console.log("No data returned from Supabase");
      return [];
    }

    console.log("Raw data from Supabase:", data);
    console.log("Number of submissions fetched:", data.length);
    
    // Log a sample submission if available
    if (data.length > 0) {
      console.log("Sample submission:", data[0]);
    }

    return data;
  } catch (error) {
    console.error("Unexpected error in fetchSubmissions:", error);
    return [];
  }
};

export const AdminDashboard = () => {
  const { 
    data: submissions = [], 
    isLoading,
    error,
    refetch 
  } = useQuery({
    queryKey: ['submissions'],
    queryFn: fetchSubmissions,
    retry: 2,
    refetchOnWindowFocus: false,
    initialData: [],
  });

  console.log("Current submissions state:", submissions);
  if (error) console.error("Query error:", error);

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
                <TableHead>ID</TableHead>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>City</TableHead>
                <TableHead>State</TableHead>
                <TableHead>Zip</TableHead>
                <TableHead>Insurance Type</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Consent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={13} className="text-center py-4">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : submissions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={13} className="text-center py-4">
                    No submissions yet
                  </TableCell>
                </TableRow>
              ) : (
                submissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell>{submission.id}</TableCell>
                    <TableCell>{submission.first_name}</TableCell>
                    <TableCell>{submission.last_name}</TableCell>
                    <TableCell>{submission.email}</TableCell>
                    <TableCell>{submission.phone}</TableCell>
                    <TableCell>{submission.address}</TableCell>
                    <TableCell>{submission.city}</TableCell>
                    <TableCell>{submission.state}</TableCell>
                    <TableCell>{submission.zip}</TableCell>
                    <TableCell>{submission.insurance_type || "N/A"}</TableCell>
                    <TableCell>{submission.message || "N/A"}</TableCell>
                    <TableCell>
                      {new Date(submission.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{submission.consent ? "Yes" : "No"}</TableCell>
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
