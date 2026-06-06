import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur font-sans">
      <div className="flex h-16 items-center px-10 justify-between">
        <span className="font-bold text-xl text-green-500">
          Rick & Morty Portal
        </span>
        <div className="flex space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/entities">Entities</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
