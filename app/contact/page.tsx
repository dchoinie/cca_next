import { PageHero } from "@/components/custom/page-hero";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SEO } from "@/components/custom/seo";

export default function Contact() {
  return (
    <main>
      <SEO
        title="Contact Us"
        description="Get in touch with Concordia Classical Academy. Find our contact information, office hours, and ways to reach us for questions about our classical Lutheran education."
        keywords={[
          "contact CCA",
          "school contact",
          "Concordia Classical Academy contact",
          "school office",
          "school phone",
          "school email",
          "school address",
          "contact information",
          "school hours",
          "office hours",
        ]}
        canonicalUrl="/contact"
      />
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with Concordia Classical Academy"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-muted/30 p-6 rounded-lg mb-12">
            <h3 className="text-lg font-semibold mb-2">
              Looking to Schedule a Visit?
            </h3>
            <p className="mb-4">
              If you&apos;re interested in touring our campus, please visit our
              dedicated{" "}
              <Link
                href="/admissions/tour-request"
                className="text-primary hover:underline font-medium"
              >
                Tour Request
              </Link>{" "}
              page to schedule your visit.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xoqzvlok"
            method="POST"
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What is your message about?"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here"
                  required
                  className="min-h-[150px]"
                />
              </div>
            </div>

            <Button type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
          </form>

          <div className="mt-12 pt-12 border-t">
            <h2 className="text-2xl font-semibold mb-6">
              Other Ways to Reach Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground">
                  Concordia Classical Academy
                  <br />
                  2101 Lor Ray Drive
                  <br />
                  North Mankato, MN 56001
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <p className="text-muted-foreground">
                  Phone: 507-304-7430
                  <br />
                  Email: ccamankato@gmail.com
                  <br />
                  Office Hours: Monday-Friday, 8:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
