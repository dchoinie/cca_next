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
          quality={100}
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
