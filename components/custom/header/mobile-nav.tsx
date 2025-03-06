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
import { admissionsUrl } from "@/constants";

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
                href="https://accounts.renweb.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DfamilyPortalCode%26redirect_uri%3Dhttps%253A%252F%252Ffamilyportal.renweb.com%252Fsignin-oidc%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520familyPortalUserInfo%2520familyPortalUserConfig%2520offline_access%2520ftApi%26code_challenge%3DZARds3a0M82qVAKegWgNMwnRdSu0DWFA1GpBptWZtUg%26code_challenge_method%3DS256%26response_mode%3Dform_post%26nonce%3D638768001237393692.YTNhMzIzZmItNDkyMi00OTliLWFlN2QtYjlkYjY3NzZmNDc3MTljNDYyMzItNTNmNy00YmFkLThiODUtN2FkZWRlNzFkMzli%26state%3DCfDJ8Lq1N5Cgm6tFnilnlNGlkcFB2vT9JohEo8WqwCAUMhKQgUnwObmUoDbiOYNR3t3jDVR5hkMJrI8c-ZNOEIwsJA_tnWJVG9WAEBPROLIpdJKVT4cX5rhexgCDG4GwfTGm2sR5bp7mkPbR9mCRGaORVAzOrfbdngMUr9wHbsAnpYkFuDwFQIMLM1pSNelJjqpPwRq1iNNpL8EyNmmUgUALjyWjTlexU3kFkTsldQjnD0euZCuh_wmsD4qPch3KbCAQFtxobkmSI0gEC2E9BKPx2xrSfs9DUkaOiMf78dDPoM0Jlh8ZQ0PCQya8liVzbuimoz21vKw7RKDzlRQEH4K5z46H7zfyOvtLI6-S1bsKgbq4aN1rfUhoc-NNCLoLnw7EndzeI4CwelHmJiHn41cPxzilYCOf_P9VMaPc8TeEfXbw5RIYy4cVqE-a0-yzQb75eqiVVYLl3zPrKp04_TGUs7E%26x-client-SKU%3DID_NET6_0%26x-client-ver%3D6.35.0.0"
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
