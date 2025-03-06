import Image from "next/image";
import { Mail } from "lucide-react";
import { StaffMember } from "@/lib/sanity/queries";

export function StaffCard({ staff }: { staff: StaffMember }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={staff.headshot.asset.url ?? "https://placehold.co/600x400"}
          alt={`${staff.title}. ${staff.name}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif text-primary mb-1">
          {staff.title}. {staff.name}
        </h3>
        <p className="text-slate-600 font-medium mb-4">{staff.position}</p>
        <div className="space-y-2">
          <a
            href={`mailto:${staff.email}`}
            className="flex items-center text-slate-600 hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4 mr-2" />
            <span className="text-sm">{staff.email}</span>
          </a>
          {/* <a
            href={`tel:${staff.phone}`}
            className="flex items-center text-slate-600 hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-sm">{staff.phone}</span>
          </a> */}
        </div>
      </div>
    </div>
  );
}
