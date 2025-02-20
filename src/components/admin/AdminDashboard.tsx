
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { DashboardStats } from "./components/DashboardStats";
import { SubmissionsTable } from "./components/SubmissionsTable";
import { useSubmissions } from "./hooks/useSubmissions";

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const AdminDashboard = () => {
  const {
    submissions,
    isLoading,
    error,
    refetch,
    notesDraft,
    isEditing,
    handleStatusChange,
    handleNotesChange,
    handleNoteDraftChange,
    handleCancelNote,
  } = useSubmissions();

  const stats = {
    totalClients: submissions.length,
    activeQuotes: submissions.filter(s => s.action_status?.quoted).length,
    pendingPayments: 0,
    expiringPolicies: 0
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="h-8 w-8 animate-spin text-sky-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-600">
        Error loading dashboard data. Please try again later.
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-8 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
        <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Manage your insurance business from one central location.
        </p>
      </motion.div>

      <DashboardStats {...stats} />

      <div className="mt-8">
        <SubmissionsTable
          submissions={submissions}
          notesDraft={notesDraft}
          isEditing={isEditing}
          onRefresh={refetch}
          onNoteDraftChange={handleNoteDraftChange}
          onSaveNote={handleNotesChange}
          onCancelNote={handleCancelNote}
          onStatusChange={handleStatusChange}
          formatDate={formatDate}
        />
      </div>
    </div>
  );
};
