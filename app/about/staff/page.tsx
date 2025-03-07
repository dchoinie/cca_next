import { PageHero } from "@/components/custom/page-hero";
import { StaffCard } from "@/components/custom/staff-card";
import { getAllStaffMembers } from "@/lib/sanity/queries";
import { SEO } from "@/components/custom/seo";

export default async function StaffPage() {
  const staffMembers = await getAllStaffMembers();

  return (
    <div className="bg-white">
      <SEO
        title="Our Staff"
        description="Meet the dedicated teachers and staff members at Concordia Classical Academy who provide excellence in classical Lutheran education for our students."
        keywords={[
          "school staff",
          "teachers",
          "faculty",
          "school employees",
          "educators",
          "teaching staff",
          "school administration",
          "Lutheran teachers",
          "classical educators",
          "school personnel",
        ]}
        canonicalUrl="/about/staff"
      />
      <PageHero
        title="Our Staff"
        subtitle="Meet the dedicated team that makes Concordia Classical Academy exceptional"
        backgroundImage="/ss_15.png"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-slate-600 leading-relaxed">
            Our faculty and staff are committed to providing excellence in
            classical Lutheran education. Each member brings unique gifts and
            talents to create an enriching educational environment for our
            students.
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((staff) => (
            <StaffCard key={staff._id} staff={staff} />
          ))}
        </div>
      </div>
    </div>
  );
}
