import { PageHero } from "@/components/custom/page-hero";
import { Skeleton } from "@/components/ui/skeleton";

export default function StaffLoading() {
  return (
    <div className="bg-white">
      <PageHero
        title="Our Staff"
        subtitle="Meet the dedicated team that makes Concordia Classical Academy exceptional"
        backgroundImage="/ss_15.png"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Skeleton className="h-6 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-4 w-full" />
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative aspect-[3/4] w-full">
                <Skeleton className="absolute inset-0" />
              </div>
              <div className="p-6">
                <Skeleton className="h-7 w-3/4 mb-1" />
                <Skeleton className="h-5 w-1/2 mb-4" />
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Skeleton className="h-4 w-4 mr-2" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
