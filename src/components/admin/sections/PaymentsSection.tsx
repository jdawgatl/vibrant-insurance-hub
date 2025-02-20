export const PaymentsSection = () => {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Payments</h2>
        <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Track and manage payment information and transactions.
        </p>
      </motion.div>
      <p>This section is under construction.</p>
    </div>
  );
};
