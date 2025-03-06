"use client";

import Link from "next/link";
import { NavItem } from "@/types/navigation.types";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface NavItemProps {
  item: NavItem;
  onNavigate?: () => void;
}

export function NavItemComponent({ item, onNavigate }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const linkProps = item.external
    ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
    : { href: item.link };

  // Common styles for navigation items
  const commonStyles =
    "px-4 py-2 text-sm font-medium transition-colors cursor-pointer w-full md:w-auto text-left";

  // If the item has sublinks, render a dropdown menu
  if (item.subLinks && item.subLinks.length > 0) {
    return (
      <div ref={dropdownRef} className="relative w-full md:w-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            commonStyles,
            "flex items-center justify-between gap-2 rounded-md",
            isOpen && "bg-secondary/20"
          )}
        >
          <span>{item.label}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>

        {isOpen && (
          <div className="md:absolute left-0 top-full z-50 mt-1 w-full md:min-w-[200px] overflow-hidden rounded-md border border-primary/20 bg-white shadow-lg">
            <ul className="py-1">
              {item.subLinks.map((subItem) => (
                <li key={subItem._key}>
                  <Link
                    href={subItem.link}
                    target={subItem.external ? "_blank" : undefined}
                    rel={subItem.external ? "noopener noreferrer" : undefined}
                    className={cn(
                      "block w-full px-4 py-2 text-sm",
                      "hover:bg-secondary/20",
                      "focus:bg-secondary/20 focus:outline-none",
                      "transition-colors cursor-pointer"
                    )}
                    onClick={() => {
                      setIsOpen(false);
                      onNavigate?.();
                    }}
                  >
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  // If no sublinks, render a simple link
  return (
    <Link
      {...linkProps}
      className={cn(commonStyles, "block rounded-md")}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
}
