import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { NavItem } from "@/types/navigation.types";
import { NavItemComponent } from "./navItem";
import { useState } from "react";
import { admissionsUrl, parentPortalUrl } from "@/constants";

interface MobileNavProps {
  navigationItems: NavItem[];
}

export function MobileNav({ navigationItems }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  // Sort items by order
  const sortedItems = [...navigationItems].sort((a, b) => a.order - b.order);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="flex flex-col h-full">
          <nav className="flex-1 py-12">
            <ul className="space-y-4">
              {sortedItems.map((item: NavItem) => (
                <li key={item._id} className="px-2">
                  <NavItemComponent
                    item={item}
                    onNavigate={() => setOpen(false)}
                  />
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t border-border p-6 space-y-4">
            <Button
              variant="outline"
              asChild
              className="w-full border-primary text-primary hover:bg-primary/10"
              onClick={() => setOpen(false)}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={parentPortalUrl}
              >
                Parent Portal
              </a>
            </Button>
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-white"
              onClick={() => setOpen(false)}
            >
              <a target="_blank" rel="noopener noreferrer" href={admissionsUrl}>
                Apply Now
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
