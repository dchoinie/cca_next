"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

type ScheduleVisitFormProps = {
  trigger?: React.ReactNode;
};

export function ScheduleVisitForm({ trigger }: ScheduleVisitFormProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <button className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors text-lg whitespace-nowrap h-[58px]">
            Schedule a Visit
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">
            Schedule a Visit
          </DialogTitle>
          <DialogDescription>
            Fill out the form below to schedule a visit to Concordia Classical
            Academy. Upon submission, we will get back to you as soon as
            possible to schedule the visit.
          </DialogDescription>
        </DialogHeader>
        <form
          action="https://formspree.io/f/xbjvvkez"
          method="POST"
          className="space-y-4 mt-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                name="firstName"
                required
                placeholder="Enter first name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                name="lastName"
                required
                placeholder="Enter last name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="Enter phone number"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="numChildren">Number of Children *</Label>
              <Input
                id="numChildren"
                name="numChildren"
                type="number"
                min="1"
                required
                placeholder="Enter number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="grades">Children&apos;s Grades *</Label>
              <Input
                id="grades"
                name="grades"
                required
                placeholder="e.g., K, 2, 5"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Any questions or specific requests?"
              className="min-h-[100px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-white hover:bg-primary/90"
          >
            Submit Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
