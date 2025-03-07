import { PageHero } from "@/components/custom/page-hero";
import { getAllClubs } from "@/lib/sanity/queries";
import Image from "next/image";
import { SEO } from "@/components/custom/seo";

export default async function ClubsPage() {
  const clubs = await getAllClubs();

  return (
    <div className="bg-white">
      <SEO
        title="Student Clubs"
        description="Explore the diverse range of student clubs at Concordia Classical Academy. From academic to extracurricular activities, find opportunities for your child to grow, learn, and connect with peers."
        keywords={[
          "student clubs",
          "school clubs",
          "extracurricular activities",
          "student activities",
          "school activities",
          "after school clubs",
          "student organizations",
          "school programs",
          "student groups",
          "club activities",
        ]}
        canonicalUrl="/events/clubs"
      />
      <PageHero
        title="Student Clubs"
        subtitle="Enriching activities that foster community, creativity, and growth"
        backgroundImage="/ss_59.jpg"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="prose prose-slate max-w-3xl mx-auto text-center mb-16">
          <p className="text-slate-600 leading-relaxed">
            At Concordia Classical Academy, we believe in nurturing well-rounded
            students through engaging extracurricular activities. Our clubs
            provide opportunities for students to explore their interests,
            develop new skills, and build lasting friendships in a supportive
            Christian environment.
          </p>
        </div>

        {/* Clubs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {clubs.map((club) => (
            <div
              key={club._id}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={club.image.asset.url}
                  alt={club.clubName}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-serif text-primary mb-4">
                  {club.clubName}
                </h2>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-slate-600">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>{club.ages}</span>
                  </div>

                  <div className="flex items-center text-slate-600">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{club.meetingDays}</span>
                  </div>

                  <div className="flex items-center text-slate-600">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      {club.startTime} - {club.endTime}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 mb-4">{club.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-primary/5 rounded-lg p-8 max-w-3xl mx-auto text-center">
          <h3 className="font-serif text-xl text-primary mb-4">
            Interested in Joining a Club?
          </h3>
          <p className="text-slate-600 mb-6">
            Contact the school office to learn more about club registration,
            meeting schedules, and any associated fees. New members are always
            welcome!
          </p>
          <p className="text-sm text-slate-500">
            Note: Club schedules and activities may vary throughout the school
            year. Please confirm current details with the club advisor.
          </p>
        </div>
      </div>
    </div>
  );
}
