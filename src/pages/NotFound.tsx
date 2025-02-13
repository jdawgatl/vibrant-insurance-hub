
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">
          {isAdminRoute ? "This admin page is under construction" : "Page not found"}
        </p>
        <Button asChild variant="default" className="gap-2">
          <Link to={isAdminRoute ? "/admin" : "/"}>
            <ArrowLeft className="h-4 w-4" />
            {isAdminRoute ? "Back to Admin Dashboard" : "Return to Home"}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
