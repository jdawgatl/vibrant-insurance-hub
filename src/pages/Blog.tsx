import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Understanding Auto Insurance Coverage",
    date: "March 15, 2024",
    excerpt: "Learn about the different types of auto insurance coverage and what they mean for you.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800",
  },
  {
    title: "Home Insurance Tips for First-Time Buyers",
    date: "March 10, 2024",
    excerpt: "Essential home insurance tips every first-time homebuyer should know.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800",
  },
  {
    title: "Why Small Businesses Need Commercial Insurance",
    date: "March 5, 2024",
    excerpt: "Protect your business with the right commercial insurance coverage.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Insurance Insights</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-primary hover:text-primary-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;