import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Auto Insurance Coverage",
    date: "March 15, 2024",
    excerpt: "Learn about the different types of auto insurance coverage and what they mean for you.",
    content: `Auto insurance is more than just a legal requirement—it's a crucial financial protection for you and your vehicle. The main types of coverage include:

    1. Liability Coverage: Covers damages you cause to others
    2. Collision Coverage: Pays for damage to your car from accidents
    3. Comprehensive Coverage: Protects against theft, weather damage, and other non-collision incidents
    4. Personal Injury Protection: Covers medical expenses regardless of fault
    
    Understanding these coverages helps you make informed decisions about your insurance needs.`,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800",
    author: "Sarah Johnson",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Home Insurance Tips for First-Time Buyers",
    date: "March 10, 2024",
    excerpt: "Essential home insurance tips every first-time homebuyer should know.",
    content: `Buying your first home is exciting, but don't forget about protecting your investment. Here are key considerations:

    • Get coverage that matches your home's replacement cost
    • Understand what's covered and what's not
    • Consider additional coverage for valuable items
    • Look into flood insurance if you're in a risk area
    • Bundle your home and auto insurance for savings
    
    Remember, the cheapest policy isn't always the best—focus on comprehensive coverage that meets your needs.`,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800",
    author: "Michael Chen",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Why Small Businesses Need Commercial Insurance",
    date: "March 5, 2024",
    excerpt: "Protect your business with the right commercial insurance coverage.",
    content: `Every small business faces unique risks that require proper insurance protection. Essential coverages include:

    • General Liability Insurance: Protects against third-party claims
    • Professional Liability Insurance: Covers errors and omissions
    • Workers' Compensation: Required by law in most states
    • Commercial Property Insurance: Protects your physical assets
    • Business Interruption Insurance: Covers lost income during disasters
    
    Don't wait for an incident to occur—protect your business today with comprehensive coverage.`,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800",
    author: "David Martinez",
    readTime: "7 min read"
  },
  {
    id: 4,
    title: "The Benefits of Life Insurance at Every Age",
    date: "March 1, 2024",
    excerpt: "Discover why life insurance is important regardless of your age or life stage.",
    content: `Life insurance isn't just for older adults—it's valuable at every stage of life. Here's why:

    • Young Adults: Lock in lower rates and protect against student debt
    • Parents: Ensure your children's future is secure
    • Middle Age: Protect your mortgage and retirement savings
    • Seniors: Leave a legacy and cover final expenses
    
    The earlier you start, the more affordable and beneficial your coverage can be.`,
    image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&w=800",
    author: "Emily Thompson",
    readTime: "5 min read"
  }
];

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const togglePost = (id: number) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent"
          >
            Insurance Insights & Resources
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: post.id * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm text-gray-500">{post.date}</p>
                      <p className="text-sm text-gray-500">{post.readTime}</p>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">
                      {expandedPost === post.id ? post.content : post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-primary-600">By {post.author}</p>
                      <Button
                        variant="outline"
                        onClick={() => togglePost(post.id)}
                        className="hover:bg-primary-50"
                      >
                        {expandedPost === post.id ? "Show Less" : "Read More"}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;