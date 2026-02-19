"use client";

import { getNavigationItems } from "@/lib/sanity/queries";
import { NavItemComponent } from "./navItem";
import { NavItem } from "@/types/navigation.types";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Container from "../container";
import { useEffect, useState } from "react";
import { MobileNav } from "./mobile-nav";
import { admissionsUrl, parentPortalUrl } from "@/constants";
import { Skeleton } from "@/components/ui/skeleton";

export function NavBar() {
  const [navigationItems, setNavigationItems] = useState<NavItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const items = await getNavigationItems();
        setNavigationItems(items);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNavItems();
  }, []);

  // Sort items by order
  const sortedItems = [...navigationItems].sort((a, b) => a.order - b.order);

  // Only return null if we're not loading and have no items
  if (!isLoading && (!navigationItems || navigationItems.length === 0)) {
    return null;
  }

  return (
    <Container className="relative w-full">
      <div className="flex items-center justify-end lg:justify-between w-full h-16">
        {/* Logo */}
        <Link
          href="/"
          className="absolute top-[10%] lg:top-[10%] left-[5%] lg:left-0 mr-6 z-10"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="h-24 lg:h-36 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block flex-1 ml-32">
          <ul className="flex items-center gap-2">
            {isLoading ? (
              // Loading skeleton for desktop nav
              <>
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i}>
                    <Skeleton className="h-8 w-24" />
                  </li>
                ))}
              </>
            ) : (
              sortedItems.map((item: NavItem) => (
                <li key={item._id}>
                  <NavItemComponent item={item} />
                </li>
              ))
            )}
          </ul>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4 ml-6">
          {isLoading ? (
            // Loading skeleton for buttons
            <>
              <Skeleton className="h-9 w-32" />
              <Skeleton className="h-9 w-32" />
            </>
          ) : (
            <>
              <Button
                variant="outline"
                asChild
                className="border-primary text-primary hover:bg-primary/10"
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
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={admissionsUrl}
                >
                  Apply Now
                </a>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pr-6">
          {isLoading ? (
            <Skeleton className="h-8 w-8" />
          ) : (
            <MobileNav navigationItems={navigationItems} />
          )}
        </div>
      </div>
    </Container>
  );
}
