import { PageHero } from "@/components/custom/page-hero";
import { SEO } from "@/components/custom/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

interface OpenPosition {
  title: string;
  description: string | React.ReactNode;
  requirements?: string | React.ReactNode;
  preferred?: string | React.ReactNode;
  active: boolean;
}

const openPositions: OpenPosition[] = [
  {
    title: "Admissions & Office Director",
    description:
      "The Admissions & Office Director will help manage Concorida Classical Academy's daily operations. Areas of mipact include serving as the public face of teh school in interacting with families and the community, promotion of the school, answer and diredct phone calls to the school, management of the SIS system for recruiting and admissions of students and families, manage student and family demographic information, manage studen absence and tardy information, help in planning, organizing, coordinating, administering, and managing school activities and facility management. The Admissions and Office Director is a professional contact for CCA's relationship with the church and other outside vendors.",
    requirements: (
      <>
        <li>Bachelor&apos;s Degree</li>
        <li>
          A practicing Christian who supports the values of the LCMS and is
          willing to engage in the life of the ministry.
        </li>
      </>
    ),
    preferred: (
      <>
        <li>5+ years of experience in organization and office management.</li>
        <li>Understands Classical pedagogy in education.</li>
      </>
    ),
    active: true,
  },
  {
    title: "Cook",
    description:
      "The cook will be responsible for preparing and serving meals to the students and staff at Concordia Classical Academy. The cook will be responsible for the daily meal plan and menu, and will be responsible for the cleanliness of the kitchen and dining area.",
    active: true,
  },
  {
    title: "Custodian",
    description:
      "The custodian will maintain the cleanliness and upkeep of the school building and grounds, performing daily cleaning tasks and general maintenance as needed.",
    active: true,
  },
  {
    title: "Before Care",
    description:
      "The before care will be responsible for the care of the students before the start of the school day. The before care will be responsible for the daily care of the students, and will be responsible for the cleanliness of the before care area.",
    active: true,
  },
];

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

          <Image
            src="/open_positions.jpg"
            alt="Open Positions"
            width={1000}
            height={1000}
          />

          <h2 className="mt-12 mb-6">Current Openings</h2>
          <div className="bg-muted p-6 rounded-lg mb-8">
            {openPositions.filter((position) => position.active).length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {openPositions
                  .filter((position) => position.active)
                  .map((position, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg font-semibold cursor-pointer">
                        {position.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">Description</h4>
                            <p>{position.description}</p>
                          </div>
                          {position.requirements && (
                            <div>
                              <h4 className="font-medium mb-2">Requirements</h4>
                              <ul className="list-disc pl-5">
                                {position.requirements}
                              </ul>
                            </div>
                          )}
                          {position.preferred && (
                            <div>
                              <h4 className="font-medium mb-2">
                                Preferred Qualifications
                              </h4>
                              <ul className="list-disc pl-5">
                                {position.preferred}
                              </ul>
                            </div>
                          )}
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
