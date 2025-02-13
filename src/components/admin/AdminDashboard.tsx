
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MenuCards } from "./components/MenuCards";
import { SubmissionsTable } from "./components/SubmissionsTable";
import { fetchSubmissions } from "./services/submissionService";

export const AdminDashboard = () => {
  const { 
    data: submissions = [], 
    isLoading,
    error,
    refetch 
  } = useQuery({
    queryKey: ['submissions'],
    queryFn: fetchSubmissions,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  if (error) {
    console.error("Query error:", error);
  }

  const handleRefresh = async () => {
    await refetch();
  };

  return (
    <div className="p-8">
      <MenuCards />
      <Card className="overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Contact Form Submissions
          </h2>
          <Button variant="outline" size="sm" onClick={handleRefresh}>
            Refresh
          </Button>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contact Info</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Insurance</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <SubmissionsTable 
                submissions={submissions}
                isLoading={isLoading}
                onUpdate={handleRefresh}
              />
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};
