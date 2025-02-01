import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Home, BookOpen, Users, HeartHandshake, BookMarked, Mail, User } from "lucide-react";

const NavigationBar = () => {
  return (
    <nav className="w-full bg-[#FEC6A1] border-b border-[#F97316] py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <HeartHandshake className="h-6 w-6 text-[#1A1F2C]" />
          <span className="font-bold text-xl text-[#1A1F2C]">AfriConnect</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-1">
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink 
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#F97316] hover:text-white focus:bg-[#F97316] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#F97316]/50 data-[state=open]:bg-[#F97316]/50"
                  )}
                >
                  <Home className="mr-2 h-4 w-4" /> Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/stories">
                <NavigationMenuLink 
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#F97316] hover:text-white focus:bg-[#F97316] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#F97316]/50 data-[state=open]:bg-[#F97316]/50"
                  )}
                >
                  <BookOpen className="mr-2 h-4 w-4" /> Stories
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/community">
                <NavigationMenuLink 
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#F97316] hover:text-white focus:bg-[#F97316] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#F97316]/50 data-[state=open]:bg-[#F97316]/50"
                  )}
                >
                  <Users className="mr-2 h-4 w-4" /> Community
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/resources">
                <NavigationMenuLink 
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#F97316] hover:text-white focus:bg-[#F97316] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#F97316]/50 data-[state=open]:bg-[#F97316]/50"
                  )}
                >
                  <BookMarked className="mr-2 h-4 w-4" /> Resources
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink 
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#F97316] hover:text-white focus:bg-[#F97316] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#F97316]/50 data-[state=open]:bg-[#F97316]/50"
                  )}
                >
                  <Mail className="mr-2 h-4 w-4" /> Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/profile">
                <NavigationMenuLink 
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#F97316] hover:text-white focus:bg-[#F97316] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#F97316]/50 data-[state=open]:bg-[#F97316]/50"
                  )}
                >
                  <User className="mr-2 h-4 w-4" /> Profile
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md hover:bg-[#F97316] hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;