"use client";

import { StaffCard } from "@/components/custom/staff-card";
import { StaffMember } from "@/lib/sanity/queries";

interface StaffGridProps {
  staffMembers: StaffMember[];
}

export function StaffGrid({ staffMembers }: StaffGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {staffMembers.map((staff) => (
        <StaffCard key={staff._id} staff={staff} />
      ))}
    </div>
  );
}
