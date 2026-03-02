import { PageHero } from "@/components/custom/page-hero";
import { SEO } from "@/components/custom/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { openPositions } from "@/lib/careers-data";

export default function Careers() {
  return (
    <main>
      <SEO
        title="Careers"
        description="Explore career opportunities at Concordia Classical Academy. Join our mission of providing excellence in classical Christian education. View current openings and application process."
        keywords={[
          "careers",
          "teaching jobs",
          "school employment",
          "education careers",
          "classical education jobs",
          "Christian school jobs",
          "teaching positions",
          "school staff positions",
          "faculty openings",
        ]}
        canonicalUrl="/careers"
      />
      <PageHero
        title="Careers"
        subtitle="Join our mission of classical Christian education"
        backgroundImage=""
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="mb-8">
            Interested applicants should email their resume and interest to
            Pastor at{" "}
            <a href="mailto:pastor@ccamankato.education">
              pastor@ccamankato.education
            </a>
          </p>
          <h2 className="mt-12 mb-6">Current Openings</h2>
          <div className="bg-muted p-6 rounded-lg mb-8">
            {openPositions.filter((position) => position.active).length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {openPositions
                  .filter((position) => position.active)
                  .map((position, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg font-semibold cursor-pointer text-left">
                        {position.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-6 pt-2">
                          {/* Position Overview */}
                          <div className="grid gap-2 sm:grid-cols-2">
                            <div>
                              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">
                                Reports To
                              </h4>
                              <p>{position.reportsTo}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">
                                Start Time
                              </h4>
                              <p>{position.startTime}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">
                                Position Type
                              </h4>
                              <p>{position.positionType}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">
                                Salary Range
                              </h4>
                              <p>{position.salaryRange}</p>
                            </div>
                          </div>

                          {/* Contact */}
                          <div>
                            <h4 className="font-semibold mb-2">How to Apply</h4>
                            <p className="mb-2">
                              Please send your resume and a letter of intent to
                              Concordia Classical Academy by mail or email:
                            </p>
                            <p className="mb-1">
                              <span className="font-medium">Mail:</span>{" "}
                              {position.contact.mail}
                            </p>
                            <p>
                              <span className="font-medium">Email:</span>{" "}
                              <a
                                href={`mailto:${position.contact.email}`}
                                className="text-primary hover:underline"
                              >
                                {position.contact.email}
                              </a>
                            </p>
                          </div>

                          {/* Who We Are Looking For */}
                          <div>
                            <h4 className="font-semibold mb-2">
                              Who We Are Looking For
                            </h4>
                            <p>{position.whoWeAreLookingFor}</p>
                          </div>

                          {/* Qualifications */}
                          <div>
                            <h4 className="font-semibold mb-2">
                              Qualifications
                            </h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {position.qualifications.map((q, i) => (
                                <li key={i}>{q}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Candidates Must */}
                          <div>
                            <h4 className="font-semibold mb-2">
                              Candidates Must
                            </h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {position.candidatesMust.map((c, i) => (
                                <li key={i}>{c}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Responsibilities */}
                          <div>
                            <h4 className="font-semibold mb-2">
                              As our Latin and middle school teacher, you will
                            </h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {position.responsibilities.map((r, i) => (
                                <li key={i}>{r}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Benefits */}
                          <div>
                            <h4 className="font-semibold mb-2">Benefits</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {position.benefits.map((b, i) => (
                                <li key={i}>{b}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            ) : (
              <p>There are currently no open positions available.</p>
            )}
          </div>

          <h2 className="mt-12 mb-6">Why Work at CCA?</h2>
          <p className="mb-4">
            As a member of our team, you&apos;ll be part of a community that
            values:
          </p>
          <ul className="mb-8">
            <li>Faith-based education and spiritual growth</li>
            <li>Classical teaching methods and curriculum</li>
            <li>Small class sizes and personalized attention</li>
            <li>Professional development opportunities</li>
            <li>Supportive and collaborative environment</li>
            <li>Competitive compensation and benefits</li>
            <li>Work-life balance</li>
            <li>Making a lasting impact on students&apos; lives</li>
          </ul>

          <h2 className="mt-12 mb-6">Contact Us</h2>
          <p className="mb-4">
            If you&apos;d like to learn more about working at Concordia
            Classical Academy or submit your resume for future consideration,
            please contact us at:
          </p>
          <p className="mb-8">
            Concordia Classical Academy
            <br />
            507-304-7430
            <br />
            ccamankato@gmail.com
          </p>
        </div>
      </div>
    </main>
  );
}
