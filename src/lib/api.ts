
export interface DashboardStats {
  totalClients: number;
  activeQuotes: number;
  pendingPayments: number;
  expiringPolicies: number;
  recentActivity: Array<{
    type: 'quote' | 'payment';
    description: string;
    timestamp: string;
  }>;
}

// Temporary mock data for development
export const fetchDashboardStats = async (): Promise<DashboardStats> => {
  return {
    totalClients: 150,
    activeQuotes: 25,
    pendingPayments: 10,
    expiringPolicies: 5,
    recentActivity: [
      {
        type: 'quote',
        description: 'New auto insurance quote requested',
        timestamp: '2 hours ago'
      },
      {
        type: 'payment',
        description: 'Payment received for policy #12345',
        timestamp: '4 hours ago'
      }
    ]
  };
};
