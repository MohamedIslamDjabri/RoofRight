import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import MapSection from '@/components/sections/MapSection';
import TrustBar from '@/components/sections/TrustBar';
import CTASection from '@/components/sections/CTASection';
import { SERVICE_AREAS, FAQS, SITE_CONFIG } from '@/constants/data';
import { MapPin, CheckCircle2, ArrowRight, Phone, ShieldCheck, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Service Areas Across Central Texas | RoofRight Exteriors',
  description: 'RoofRight Exteriors serves Austin, Westlake Hills, Round Rock, Cedar Park, Georgetown, Lakeway, Pflugerville, and Dripping Springs with certified roofing, gutters, and siding.',
};

export default function ServiceAreasPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-primary text-on-primary py-space-xl lg:py-24">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin relative z-10">
          <div className="max-w-3xl space-y-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-primary-container text-primary-fixed border border-primary-fixed/20">
              <MapPin className="w-4 h-4" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
                Local Coverage Network &bull; 45-Mile Service Hub
              </span>
            </div>

            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg tracking-tight font-extrabold text-on-primary">
              Serving Austin &amp; Surrounding Hill Country Communities.
            </h1>

            <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
              We deploy dedicated residential exterior installation and emergency leak repair crews across Travis, Williamson, and Hays counties. Explore our hyper-local capabilities and neighborhood project records.
            </p>

            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <Link
                href="/contact"
                className="px-space-lg py-3.5 bg-tertiary-container hover:bg-tertiary text-on-tertiary rounded-xl font-label-lg text-label-lg font-bold shadow-md transition-all flex items-center gap-2"
              >
                <span>Check Your Neighborhood Availability</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={SITE_CONFIG.phoneRaw}
                className="px-space-lg py-3.5 bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-primary rounded-xl font-label-lg text-label-lg font-bold transition-all border border-surface-container-lowest/20"
              >
                Call (555) 391-ROOF
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Interactive Map Section */}
      <MapSection />

      {/* Grid of Community Cards */}
      <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div className="text-center max-w-3xl mx-auto mb-space-xl space-y-2">
          <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider font-bold">
            Municipal Expertise
          </span>
          <h2 className="font-display-md text-display-md-mobile md:text-display-md text-primary font-bold">
            Local Building Codes, Permitting &amp; Wind Standards
          </h2>
          <p className="font-body-md text-body-md text-secondary">
            Every Central Texas municipality maintains unique permitting, HOA architectural guidelines, and fire codes. We handle 100% of submittals and inspections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-surface-container-lowest p-space-md rounded-xl shadow-xs border border-surface-container-high flex flex-col justify-between"
            >
              <div className="space-y-space-xs">
                <div className="flex items-center justify-between pb-1 border-b border-surface-container">
                  <span className="font-label-sm text-[11px] uppercase font-bold text-tertiary-container">
                    {area.county}
                  </span>
                  <MapPin className="w-4 h-4 text-primary" />
                </div>

                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                  {area.name}
                </h3>

                <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                  {area.description}
                </p>

                <div className="pt-2 space-y-1">
                  <span className="font-label-sm text-[11px] uppercase text-primary font-bold tracking-wider block">
                    Local Highlights:
                  </span>
                  <ul className="space-y-1">
                    {area.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                        <CheckCircle2 className="w-3.5 h-3.5 text-surface-tint shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-space-md mt-space-md border-t border-surface-container">
                <Link
                  href="/contact"
                  className="w-full py-2 px-3 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md font-semibold transition-colors flex items-center justify-center gap-1"
                >
                  <span>Request In {area.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-surface-container-low py-space-xl border-y border-surface-container">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
          <div className="max-w-3xl mx-auto mb-space-lg text-center space-y-2">
            <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider font-bold">
              Got Questions?
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
              Frequently Asked Service Area Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-space-sm">
            {FAQS.slice(0, 5).map((faq) => (
              <div
                key={faq.question}
                className="bg-surface-container-lowest p-space-md rounded-xl shadow-xs border border-surface-container-high space-y-1"
              >
                <div className="flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <h3 className="font-label-lg text-label-lg text-primary font-bold">
                    {faq.question}
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-secondary pl-7 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Protect Your Home in Central Texas?"
        subtitle="Contact your dedicated neighborhood exterior specialist. We conduct on-site inspections, laser slope pitch measurements, and itemized transparent estimates."
      />
    </div>
  );
}
