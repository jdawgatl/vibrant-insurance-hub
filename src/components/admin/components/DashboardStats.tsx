
import { motion } from "framer-motion";
import { Users, FileText, CreditCard, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatsProps {
  totalClients: number;
  activeQuotes: number;
  pendingPayments: number;
  expiringPolicies: number;
}

export const DashboardStats = ({ totalClients, activeQuotes, pendingPayments, expiringPolicies }: StatsProps) => {
  const stats = [
    { title: "Total Clients", value: totalClients, icon: Users, color: "text-blue-600" },
    { title: "Active Quotes", value: activeQuotes, icon: FileText, color: "text-green-600" },
    { title: "Pending Payments", value: pendingPayments, icon: CreditCard, color: "text-yellow-600" },
    { title: "Expiring Policies", value: expiringPolicies, icon: AlertTriangle, color: "text-red-600" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
              <span className="text-2xl font-bold">{stat.value}</span>
            </div>
            <h3 className="text-gray-600 font-medium">{stat.title}</h3>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
