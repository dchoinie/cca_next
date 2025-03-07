import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/custom/page-hero";
import { admissionsUrl } from "@/constants";
import { ScheduleVisitForm } from "@/components/custom/schedule-visit-form";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/custom/seo";

export default function WhyCCA() {
  return (
    <div className="bg-white">
      <SEO
        title="Why Choose CCA?"
        description="Discover what makes Concordia Classical Academy unique: our classical Lutheran education, small class sizes, Christ-centered teaching, and excellence in music education."
        keywords={[
          "why choose CCA",
          "school benefits",
          "classical education",
          "Lutheran school advantages",
          "Christian education",
          "student-teacher ratio",
          "music program",
          "academic excellence",
          "school choice",
          "classical Christian",
        ]}
        canonicalUrl="/about/why-CCA"
      />
      <PageHero
        title="Why Choose CCA?"
        subtitle="Join a community where classical education meets Lutheran faith, creating an environment where students thrive academically and spiritually."
        backgroundImage="/ss_1.png"
      />

      {/* Stats Section */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15:1</div>
              <div className="text-sm text-slate-600 font-medium">
                Student-Teacher Ratio
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-slate-600 font-medium">
                Christ-Centered Teaching
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Daily</div>
              <div className="text-sm text-slate-600 font-medium">
                Chapel & Music
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">K-8</div>
              <div className="text-sm text-slate-600 font-medium">
                Grade Levels
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alternating Sections */}
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
            <div className="md:w-1/2">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/ss_4.png"
                  alt="Classical education"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif text-primary mb-6">
                Classical Education for Modern Times
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-medium mb-1">Grammar Stage (K-4)</h3>
                    <p className="text-slate-600">
                      Building strong foundations through memorization, songs,
                      and fundamental skills.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-medium mb-1">Logic Stage (5-6)</h3>
                    <p className="text-slate-600">
                      Developing critical thinking and analytical skills through
                      formal logic and argumentation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-medium mb-1">Rhetoric Stage (7-8)</h3>
                    <p className="text-slate-600">
                      Mastering the art of eloquent expression and persuasive
                      communication.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-24">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif text-primary mb-6">
                Distinctively Lutheran
              </h2>
              <div className="space-y-6">
                <p className="text-slate-600">
                  Our Lutheran identity shapes every aspect of our educational
                  approach. Daily chapel services, biblical integration in all
                  subjects, and a Christ-centered community create an
                  environment where faith and learning flourish together.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Daily Chapel</h3>
                    <p className="text-sm text-slate-600">
                      Worship and spiritual growth as a community
                    </p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Biblical Worldview</h3>
                    <p className="text-sm text-slate-600">
                      Integration of faith in all subjects
                    </p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Chapel Families</h3>
                    <p className="text-sm text-slate-600">
                      Multi-age spiritual mentorship
                    </p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Service Learning</h3>
                    <p className="text-sm text-slate-600">
                      Putting faith into action
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/ss_5.png"
                  alt="Chapel service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/ss_41.png"
                  alt="Music program"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif text-primary mb-6">
                Excellence in Music
              </h2>
              <div className="space-y-6">
                <p className="text-slate-600">
                  Our comprehensive music program is a cornerstone of classical
                  education at CCA. Through daily singing, strings instruction,
                  and choral performances, students develop not only musical
                  abilities but also discipline, teamwork, and appreciation for
                  beauty.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/ss_53.png"
                      alt="Students performing"
                      width={600}
                      height={300}
                      className="w-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="text-white text-sm">
                        Students perform regularly throughout the year
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-primary/5 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif text-primary mb-6">
              Experience CCA for Yourself
            </h2>
            <p className="text-slate-600 mb-8">
              The best way to understand what makes CCA special is to visit our
              campus. Schedule a tour to see our classical education in action
              and meet our dedicated faculty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ScheduleVisitForm
                trigger={
                  <Button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors cursor-pointer h-[58px]">
                    Schedule a Visit
                  </Button>
                }
              />
              <a
                href={admissionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors h-[58px]"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
