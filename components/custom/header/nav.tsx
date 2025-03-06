"use client";

import { getNavigationItems } from "@/lib/sanity/queries";
import { NavItemComponent } from "./navItem";
import { NavItem } from "@/types/navigation.types";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Container from "../container";
import { useEffect, useState } from "react";

export function NavBar() {
  const [navigationItems, setNavigationItems] = useState<NavItem[]>([]);

  useEffect(() => {
    const fetchNavItems = async () => {
      const items = await getNavigationItems();
      setNavigationItems(items);
    };

    fetchNavItems();
  }, []);

  if (!navigationItems || navigationItems.length === 0) {
    return null;
  }

  // Sort items by order
  const sortedItems = [...navigationItems].sort((a, b) => a.order - b.order);

  return (
    <Container className="relative">
      <div className="flex items-center justify-between w-full h-16">
        {/* Logo */}
        <Link href="/" className="absolute top-0 mr-6 z-10">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="h-36 w-auto"
            priority
          />
        </Link>

        {/* Navigation Items */}
        <nav className="flex-1 ml-32">
          <ul className="flex items-center gap-2">
            {sortedItems.map((item: NavItem) => (
              <li key={item._id}>
                <NavItemComponent item={item} />
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 ml-6">
          <Button
            variant="outline"
            asChild
            className="border-primary text-primary hover:bg-primary/10"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://accounts.renweb.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DfamilyPortalCode%26redirect_uri%3Dhttps%253A%252F%252Ffamilyportal.renweb.com%252Fsignin-oidc%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520familyPortalUserInfo%2520familyPortalUserConfig%2520offline_access%2520ftApi%26code_challenge%3DZARds3a0M82qVAKegWgNMwnRdSu0DWFA1GpBptWZtUg%26code_challenge_method%3DS256%26response_mode%3Dform_post%26nonce%3D638768001237393692.YTNhMzIzZmItNDkyMi00OTliLWFlN2QtYjlkYjY3NzZmNDc3MTljNDYyMzItNTNmNy00YmFkLThiODUtN2FkZWRlNzFkMzli%26state%3DCfDJ8Lq1N5Cgm6tFnilnlNGlkcFB2vT9JohEo8WqwCAUMhKQgUnwObmUoDbiOYNR3t3jDVR5hkMJrI8c-ZNOEIwsJA_tnWJVG9WAEBPROLIpdJKVT4cX5rhexgCDG4GwfTGm2sR5bp7mkPbR9mCRGaORVAzOrfbdngMUr9wHbsAnpYkFuDwFQIMLM1pSNelJjqpPwRq1iNNpL8EyNmmUgUALjyWjTlexU3kFkTsldQjnD0euZCuh_wmsD4qPch3KbCAQFtxobkmSI0gEC2E9BKPx2xrSfs9DUkaOiMf78dDPoM0Jlh8ZQ0PCQya8liVzbuimoz21vKw7RKDzlRQEH4K5z46H7zfyOvtLI6-S1bsKgbq4aN1rfUhoc-NNCLoLnw7EndzeI4CwelHmJiHn41cPxzilYCOf_P9VMaPc8TeEfXbw5RIYy4cVqE-a0-yzQb75eqiVVYLl3zPrKp04_TGUs7E%26x-client-SKU%3DID_NET6_0%26x-client-ver%3D6.35.0.0"
            >
              Parent Portal
            </a>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://cca-mn.client.renweb.com/oa/index.cfm?memberid=16976"
            >
              Apply Now
            </a>
          </Button>
        </div>
      </div>
    </Container>
  );
}
