
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Loader2, Users, FileText, CreditCard, AlertTriangle } from "lucide-react";
import { fetchDashboardStats, type DashboardStats } from "@/lib/api";

export const AdminDashboard = () => {
  const { data: stats, isLoading, error } = useQuery<DashboardStats>({
    queryKey: ['dashboardStats'],
    queryFn: fetchDashboardStats,
  });

  const statCards = [
    { title: "Total Clients", value: stats?.totalClients || 0, icon: Users, color: "text-blue-600" },
    { title: "Active Quotes", value: stats?.activeQuotes || 0, icon: FileText, color: "text-green-600" },
    { title: "Pending Payments", value: stats?.pendingPayments || 0, icon: CreditCard, color: "text-yellow-600" },
    { title: "Expiring Policies", value: stats?.expiringPolicies || 0, icon: AlertTriangle, color: "text-red-600" },
  ];

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
    <div className="p-8">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
              <h3 className="text-gray-600 font-medium">{stat.title}</h3>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {stats?.recentActivity?.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full ${activity.type === 'quote' ? 'bg-blue-500' : 'bg-green-500'}`} />
                  <div>
                    <p className="font-medium">{activity.description}</p>
                    <p className="text-sm text-gray-500">{activity.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <FileText className="h-6 w-6 text-sky-600 mb-2" />
                <p className="font-medium">New Quote</p>
              </button>
              <button className="p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Users className="h-6 w-6 text-sky-600 mb-2" />
                <p className="font-medium">Add Client</p>
              </button>
              <button className="p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <CreditCard className="h-6 w-6 text-sky-600 mb-2" />
                <p className="font-medium">Process Payment</p>
              </button>
              <button className="p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <AlertTriangle className="h-6 w-6 text-sky-600 mb-2" />
                <p className="font-medium">View Alerts</p>
              </button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
