import { PageHero } from "@/components/custom/page-hero";
import Image from "next/image";

export default function ChristianEducationPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="The Impact of Lutheran Education"
        subtitle="Research-backed benefits of Lutheran schools in faith and academics"
        backgroundImage="/ss_14.png"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-serif text-primary mb-6">
              Do Lutheran Schools Make A Difference?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Reliable statistical research has shown significant differences in
              faith development, academic achievement, and personal growth among
              students who attend Lutheran schools. The evidence is clear:
              Lutheran education provides lasting benefits that extend far
              beyond the classroom.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Studies reveal that the longer a student attends Lutheran schools,
              the more pronounced these positive differences become. While these
              qualities can certainly develop in other educational settings,
              Lutheran schools provide a uniquely nurturing environment for
              spiritual and academic growth.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/ss_11.png"
              alt="Students engaged in learning"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Faith Impact Section */}
        <div className="bg-primary/5 rounded-lg p-12 mb-24">
          <h2 className="text-3xl font-serif text-primary text-center mb-12">
            Impact on Faith and Character
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-serif text-xl text-primary mb-4">
                Spiritual Life
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  More frequent experiences with God
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Stronger belief in Jesus&apos; divinity
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Fuller devotional life
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Greater Biblical knowledge
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-serif text-xl text-primary mb-4">
                Faith Understanding
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Clear understanding of salvation by grace
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Balanced theological perspective
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  More active in witnessing
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Less anxiety about faith
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-serif text-xl text-primary mb-4">
                Character Development
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Strong interpersonal relationships
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Healthy respect for authority
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  More forgiving attitude
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Greater peer independence
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Academic Excellence */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/ss_7.png"
                alt="Students excelling academically"
                fill
                className="object-cover"
              />
            </div>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-serif text-primary mb-6">
                Academic Excellence
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                According to the National Assessment of Educational Progress
                (NAEP), known as &quot;The Nation&apos;s Report Card,&quot;
                Lutheran schools consistently rank at the top among various
                educational systems nationwide.
              </p>
              <div className="bg-primary/5 rounded-lg p-6 mt-6">
                <h3 className="font-serif text-lg text-primary mb-4">
                  Notable Achievements
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    First place in science across 4th, 8th, and 12th grades
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Top ranking in 4th and 8th grade reading
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Second place in mathematics across all tested grade levels
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Section */}
        <div className="bg-white border border-slate-200 rounded-lg p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-primary mb-6">
              Beyond Academics
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              While we celebrate these academic achievements, our greatest joy
              comes from sharing the most important truth: God&apos;s victory
              over sin and death through Jesus Christ. Lutheran schools provide
              an environment where students learn not only academic subjects but
              also the power of forgiveness and God&apos;s grace.
            </p>
            <p className="text-slate-600 leading-relaxed italic">
              Source: Research by Milo Brekke, &quot;How Different Are People
              Who Attended Lutheran Schools&quot; and The Nation&apos;s Report
              Card (NAEP)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
