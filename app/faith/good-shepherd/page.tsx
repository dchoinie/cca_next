import { PageHero } from "@/components/custom/page-hero";
import { SEO } from "@/components/custom/seo";
import Image from "next/image";

export default function GoodShepherdPage() {
  return (
    <div className="bg-white">
      <SEO
        title="Good Shepherd Lutheran Church"
        description="Learn about Good Shepherd Lutheran Church, our spiritual foundation and church home. Discover our Lutheran worship, daily chapel services, and faith-integrated learning approach."
        keywords={[
          "Good Shepherd Lutheran Church",
          "Lutheran church",
          "LCMS church",
          "Lutheran worship",
          "church community",
          "chapel services",
          "faith integration",
          "Lutheran congregation",
          "church school",
          "spiritual foundation",
        ]}
        canonicalUrl="/faith/good-shepherd"
      />
      <PageHero
        title="Good Shepherd Lutheran Church"
        subtitle="Our church home and spiritual foundation"
        backgroundImage="/ss_17.png"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Church Introduction */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-serif text-primary mb-6">
              Our Church Home
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Good Shepherd Lutheran Church is more than just a building –
              it&apos;s the spiritual heart of our school community. As a
              congregation of the Lutheran Church-Missouri Synod (LCMS), we are
              committed to faithful Lutheran worship and teaching.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our church and school work hand in hand to provide a strong
              foundation of faith for our students, supported by our dedicated
              pastoral staff who are actively involved in both church and school
              life.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/church_exterior.jpg"
              alt="Good Shepherd Lutheran Church exterior"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Daily Chapel */}
        <div className="bg-primary/5 rounded-lg p-12 mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/ss_18.png"
                alt="Students in chapel service"
                fill
                className="object-cover"
              />
            </div>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-serif text-primary mb-6">
                Daily Chapel
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Every school day begins with chapel service, where our entire
                school community gathers together for worship, prayer, and
                spiritual growth. These daily services are led by our pastors
                and teachers, creating a rhythm of faith that shapes our days.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Through hymns, Scripture readings, and age-appropriate messages,
                our students learn to start each day by focusing on God&apos;s
                Word and His promises. Parents and family members are always
                welcome to join us for chapel services.
              </p>
            </div>
          </div>
        </div>

        {/* Chapel Families */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif text-primary mb-6">
              Chapel Families
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our unique Chapel Families program pairs older students with
              younger ones, creating meaningful relationships across grade
              levels and fostering a sense of community and mentorship.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-6">
                <Image
                  src="/ss_55.jpg"
                  alt="Chapel families mentoring"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-primary text-xl mb-3">
                Mentorship
              </h3>
              <p className="text-slate-600">
                Older students serve as role models and mentors to their younger
                chapel family members, developing leadership skills and
                compassion.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-6">
                <Image
                  src="/ss_16.png"
                  alt="Chapel families praying together"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-primary text-xl mb-3">
                Shared Worship
              </h3>
              <p className="text-slate-600">
                Chapel families sit together during services, helping younger
                students learn worship practices and creating a supportive
                environment.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="relative h-[200px] rounded-lg overflow-hidden mb-6">
                <Image
                  src="/ss_57.jpg"
                  alt="Chapel families doing activities"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-primary text-xl mb-3">
                Community Building
              </h3>
              <p className="text-slate-600">
                Throughout the year, chapel families participate in special
                activities and service projects together, strengthening our
                school community.
              </p>
            </div>
          </div>
        </div>

        {/* Faith Integration */}
        <div className="bg-white border border-slate-200 rounded-lg p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-serif text-primary mb-6">
                Faith Integrated Learning
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                At Concordia Classical Academy, faith isn&apos;t confined to
                religion class or chapel – it&apos;s woven into every subject
                and every day. Our teachers are trained to integrate Biblical
                truth and Lutheran doctrine across the curriculum.
              </p>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Scripture connections in literature and history
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  God&apos;s design explored in science and mathematics
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Christian worldview in current events discussions
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Prayer and devotions throughout the day
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/ss_59.jpg"
                alt="Faith integrated learning in action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
