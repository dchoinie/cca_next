"use client";

import { PageHero } from "@/components/custom/page-hero";
import { DonationForm } from "@/components/custom/DonationForm";
import { useState } from "react";
import { SEO } from "@/components/custom/seo";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{
        duration: 0.3,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function DonationsPage() {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(Number(value));
    }
  };

  return (
    <div className="bg-white">
      <SEO
        title="Make a Donation"
        description="Support Concordia Classical Academy through various giving options. Your generous donations help provide financial assistance, maintain facilities, and enhance our academic programs."
        keywords={[
          "make donation",
          "school giving",
          "support education",
          "financial support",
          "charitable giving",
          "monthly donation",
          "planned giving",
          "school donation",
          "gift options",
          "support CCA",
        ]}
        canonicalUrl="/support/donations"
      />
      <PageHero
        title="Support Our Mission"
        subtitle="Partner with us in providing excellent Christian education"
        backgroundImage="/ss_1.png"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <AnimatedSection>
          <div className="prose prose-slate max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif text-primary mb-6">
              Why Support CCA?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Your generous support enables Concordia Classical Academy to
              continue providing excellent Christian education while keeping
              tuition affordable for families. Your gifts directly impact our
              ability to:
            </p>
            <ul className="text-left text-slate-600 mb-8">
              <li>Provide need-based financial assistance to families</li>
              <li>Maintain and improve our facilities</li>
              <li>Support our dedicated faculty and staff</li>
              <li>Enhance our academic and extracurricular programs</li>
              <li>Invest in technology and educational resources</li>
            </ul>
            <p className="text-slate-600 italic">
              All donations to Concordia Classical Academy are tax-deductible.
            </p>
          </div>
        </AnimatedSection>

        {/* Donation Form Section */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-xl mx-auto">
            <div className="bg-white shadow-lg border border-slate-200 rounded-lg p-8">
              <h2 className="text-2xl font-serif text-primary text-center mb-8">
                Make a Donation
              </h2>

              {/* Preset Amounts */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[50, 100, 250, 500, 1000, 2500].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`py-3 px-4 border-2 rounded-md transition-colors text-center ${
                      selectedAmount === amount && !customAmount
                        ? "border-primary bg-primary/5"
                        : "border-primary/20 hover:border-primary hover:bg-primary/5"
                    }`}
                  >
                    <span className="text-lg font-semibold text-primary">
                      ${amount}
                    </span>
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                    $
                  </span>
                  <input
                    type="number"
                    min="1"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <DonationForm amount={selectedAmount} />
            </div>

            {/* Additional Information */}
            <div className="mt-8 space-y-6">
              <AnimatedSection delay={0.3}>
                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="font-serif text-lg text-primary mb-3">
                    Other Ways to Give
                  </h3>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Mail a check to our school office</li>
                    <li>• Set up recurring monthly donations</li>
                    <li>• Employer matching gifts programs</li>
                    <li>• Planned giving and estate planning</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="text-center text-sm text-slate-500">
                  <p className="mb-2">
                    For questions about donations or to discuss other ways to
                    support our school, please contact our office.
                  </p>
                  <p>
                    <strong>Email:</strong> ccamankato@gmail.com
                    <br />
                    <strong>Phone:</strong> 507-304-7430
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
