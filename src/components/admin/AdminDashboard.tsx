
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
import { RefreshCw } from "lucide-react";

export const AdminDashboard = () => {
  const { 
    data: submissions = [], 
    isLoading,
    error,
    refetch 
  } = useQuery({
    queryKey: ['submissions'],
    queryFn: fetchSubmissions,
  });

  if (error) {
    console.error("Query error:", error);
  }

  const handleRefresh = async () => {
    await refetch();
  };

  return (
    <div className="p-8 space-y-8 bg-gradient-to-b from-white to-gray-50">
      <MenuCards />
      <Card className="overflow-hidden border-t-4 border-t-primary shadow-lg">
        <div className="p-6 border-b border-gray-200 bg-white flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-gray-900">
              Recent Contact Form Submissions
            </h2>
            <p className="text-sm text-gray-500">
              Manage and track all incoming contact requests
            </p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleRefresh}
            className="flex items-center gap-2 hover:bg-primary hover:text-white transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
        </div>
        <div className="overflow-x-auto bg-gradient-to-b from-white to-gray-50">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 hover:bg-gray-50">
                <TableHead className="font-semibold text-primary">Contact Info</TableHead>
                <TableHead className="font-semibold text-primary">Location</TableHead>
                <TableHead className="font-semibold text-primary">Insurance</TableHead>
                <TableHead className="font-semibold text-primary">Date</TableHead>
                <TableHead className="font-semibold text-primary">Notes History</TableHead>
                <TableHead className="font-semibold text-primary">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white">
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
