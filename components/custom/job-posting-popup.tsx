"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { openPositions } from "@/lib/careers-data";
import { Briefcase } from "lucide-react";

const SESSION_STORAGE_KEY = "cca-careers-popup-dismissed";

export function JobPostingPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasDismissed = !!sessionStorage.getItem(SESSION_STORAGE_KEY);
    const hasActivePositions = openPositions.some((p) => p.active);

    if (!hasDismissed && hasActivePositions) {
      setOpen(true);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
    setOpen(false);
  };

  const activePosition = openPositions.find((p) => p.active);

  if (!activePosition) return null;

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && handleDismiss()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 text-primary">
            <Briefcase className="size-5" />
            <DialogTitle>We&apos;re Hiring!</DialogTitle>
          </div>
          <DialogDescription>
            Concordia Classical Academy has an open position. Join our mission
            of classical Christian education.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div>
            <h4 className="font-semibold text-base">{activePosition.title}</h4>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span>{activePosition.positionType}</span>
              <span>•</span>
              <span>Starts {activePosition.startTime}</span>
            </div>
          </div>
          <p className="text-sm line-clamp-3">
            {activePosition.whoWeAreLookingFor}
          </p>
        </div>

        <DialogFooter className="flex-col gap-2 sm:flex-row">
          <Button variant="outline" onClick={handleDismiss} className="w-full sm:w-auto">
            Dismiss
          </Button>
          <Button asChild className="w-full sm:w-auto">
            <Link href="/careers" onClick={handleDismiss}>
              View Full Details
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
