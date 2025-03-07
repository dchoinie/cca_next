"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { getNavigationItems } from "@/lib/sanity/queries";
import { NavItem } from "@/types/navigation.types";
import { parentPortalUrl } from "@/constants";

export function Footer() {
  const [navigationItems, setNavigationItems] = useState<NavItem[]>([]);

  useEffect(() => {
    const fetchNavItems = async () => {
      const items = await getNavigationItems();
      setNavigationItems(items.sort((a, b) => a.order - b.order));
    };

    fetchNavItems();
  }, []);

  return (
    <footer className="bg-primary/5 border-t">
      <div className="max-w-screen-xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 text-center lg:text-left md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Contact Section */}
          <div className="space-y-4 flex flex-col items-center lg:items-start text-left">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Concordia Classical Academy"
                width={120}
                height={120}
                className="h-24 w-auto"
              />
            </Link>
            <div className="space-y-2">
              <a
                href="https://maps.app.goo.gl/1TfK6GQyPt8bnswR9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
              >
                <MapPin className="h-4 w-4" />
                2101 Lor Ray Dr
                <br />
                North Mankato, MN 56001
              </a>
              <a
                href="tel:+15073047430"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                (507) 304-7430
              </a>
              <a
                href="mailto:ccamankato@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                ccamankato@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item._id}>
                  <Link
                    href={item.link}
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={parentPortalUrl}
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Parent Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/events/calendar"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Concordia Classical Academy. All
              rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.facebook.com/CCAMankato/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://concordiaclassicalacademy.sanity.studio/desk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Website Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
