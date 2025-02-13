
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { menuItems } from "../menuItems";

export const MenuCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {menuItems.map((item) => (
        <Link key={item.label} to={item.path}>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="p-3 bg-sky-600/10 rounded-full">
                <item.icon className="h-6 w-6 text-sky-600" />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-gray-900">{item.label}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};
