import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import FinancingSection from '@/components/sections/FinancingSection';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import CTASection from '@/components/sections/CTASection';
import { ShieldCheck, Award, CheckCircle2, ArrowRight, Wrench, Wind, Droplets, Sun, Layers } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/data';

export const metadata: Metadata = {
  title: 'Residential Roofing Services | RoofRight Exteriors',
  description: 'Master Elite certified residential roofing in Austin & Central Texas. Class 4 impact shingles, standing seam metal, and 50-year non-prorated system warranties.',
};

export default function RoofingPage() {
  const roofingSystems = [
    {
      name: 'Architectural Asphalt Shingles',
      tag: 'Most Popular & Durable',
      desc: 'High-definition dimensional shingles offering multi-layered depth, Class 4 impact resistance, and 130 MPH wind ratings. Engineered with advanced algae-fighting granules.',
      specs: ['GAF Timberline HDZ / UHDZ', 'Owens Corning TruDefinition Duration', 'Class 4 UL 2218 Hail Resistance', '50-Year Non-Prorated Warranty'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACRREYowzGZ3tto-ofR-t57QULVcsGit1BXzoW_foBaGU8fwi76fYzu0dDrvvxCQQ1SQ5m0KwHVQTYq8iEHdSP2MpoB9uwfXcH8yNvILAT3AI0UeDkWfvOALDll1AdUkvNRmfqmxxEQW2DM9ktver2RFbVsaJW_L6QkJ8L1sY2duIY-H8Vx3UJVc2EI1pt26ibdSUy9UhlmxqTh7ri2C2te2YiUCIcrG65Dws5o15JcVh19wtMLGfH',
    },
    {
      name: 'Standing Seam Metal Roofing',
      tag: 'Lifetime Modern Resilience',
      desc: '24-gauge architectural steel or aluminum with concealed fasteners. Superior energy efficiency reflecting radiant solar heat, perfect for hill country modern architecture.',
      specs: ['24-Gauge Heavy Architectural Steel', 'Concealed Interlocking Fasteners', 'Reflective Kynar 500 Paint Finish', '70+ Year Lifespan Rating'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB426rK8cxlNMK25f8E6iO-mRhZgAseEWD67SsEcMuTlbhsY5DFbIG3CbNONZs8O3YFYMxTSBn4Yd2bS1L0OjA5K8tCouILrUxnN5X23vSCalsbyr6WfrR0ndpjfe3RyAph0R7cDcpRKILBoHj5SlnzBD0imD-5t6G8f8SVu3ZWreN-9gwopEgZbH_UY9zDWhF6ny_u0Dsydspfg_TS7dBaWcgx9czcajvHuCp07oPyXpUaEPfJy8KC',
    },
    {
      name: 'Engineered Synthetic Slate & Shake',
      tag: 'Heritage Luxury Architecture',
      desc: 'Authentic chiseled stone and hand-split cedar aesthetic manufactured from virgin polymers. Resists freeze-thaw cracking, pest damage, and high-velocity hail.',
      specs: ['DaVinci Roofscapes Certified', 'Class A Fire Rating', 'Class 4 Impact Certified', 'Zero Maintenance Formula'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCioWSbCLyFmv4MH5fCMn1c9BpCIjlTB3Gx76Wu5YLwRdf2EOWymf0-e8uIhUMDwUKFvkQJ6y8njUK3eezsvxhd2RK7ZYQduQtXowj-v_OrhMupOy-WbZqiI-ZRClRT8Si9qFzkX9pREmRsv34rkNGDdUR0kTL2TfYqPd3n66mYpx8Ri5AWFVdQClAR7bkEHgbpFglEXGL0x-vBUH88BMJNq6zHovyURngBAJpcK-wjRInmzEARWfnf',
    },
  ];

  const installSteps = [
    { num: '01', title: 'Complete Tear-Off & Deck Inspection', desc: 'We strip down to bare plywood, inspecting every square foot for rot, water damage, or fastener failure.' },
    { num: '02', title: 'Vapor Barrier & Ice Shield Armor', desc: 'Self-adhering membrane applied to all eaves, valleys, rakes, and chimney saddles to halt moisture wicking.' },
    { num: '03', title: 'Starter Course & Precision Nailing', desc: 'Factory starter strips aligned with 6-nail high-wind placement protocols to guarantee 130 MPH uplift hold.' },
    { num: '04', title: 'Balanced Ridge & Attic Ventilation', desc: 'Continuous intake and exhaust balance lowers attic heat in summer and eliminates internal moisture rot.' },
    { num: '05', title: 'Magnetic Sweep & 3-Tier Sign-Off', desc: 'Four passes with magnetic sweep rollers across lawn and driveway, capped with photographic warranty sign-off.' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-primary text-on-primary py-space-xl lg:py-24">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin relative z-10">
          <div className="max-w-3xl space-y-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-primary-container text-primary-fixed border border-primary-fixed/20">
              <Award className="w-4 h-4" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
                GAF Master Elite&reg; Contractor &bull; Top 2% in North America
              </span>
            </div>

            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg tracking-tight font-extrabold text-on-primary">
              Engineered Roofing Systems Built for Generational Shelter.
            </h1>

            <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
              We engineer roofs that withstand severe Texas storms, 130 MPH wind shears, and harsh UV cycles. Every system is installed by factory-trained master craftsmen and protected by 50-year non-prorated warranties.
            </p>

            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <Link
                href="/contact"
                className="px-space-lg py-3.5 bg-tertiary-container hover:bg-tertiary text-on-tertiary rounded-xl font-label-lg text-label-lg font-bold shadow-md transition-all flex items-center gap-2"
              >
                <span>Get a Free Roofing Estimate</span>
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

      {/* Roofing Systems Showcase */}
      <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div className="text-center max-w-3xl mx-auto mb-space-xl space-y-2">
          <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider font-bold">
            System Profiles
          </span>
          <h2 className="font-display-md text-display-md-mobile md:text-display-md text-primary font-bold">
            Tailored Materials for Architectural Distinction
          </h2>
          <p className="font-body-md text-body-md text-secondary">
            Whether your home demands classic dimensional shingles or modern standing seam panels, we engineer each layer for maximum weather barrier continuity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {roofingSystems.map((sys) => (
            <div
              key={sys.name}
              className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md flex flex-col justify-between border border-surface-container-high group"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-surface-container">
                  <Image
                    src={sys.img}
                    alt={sys.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-primary/90 text-on-primary font-label-sm text-label-sm font-semibold z-10 backdrop-blur-sm">
                    {sys.tag}
                  </div>
                </div>

                <div className="p-space-md space-y-space-sm">
                  <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                    {sys.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    {sys.desc}
                  </p>

                  <div className="space-y-1.5 pt-space-xs border-t border-surface-container">
                    <span className="font-label-sm text-[11px] text-primary uppercase font-bold tracking-wider">
                      Specifications &amp; Features:
                    </span>
                    <ul className="space-y-1">
                      {sys.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                          <CheckCircle2 className="w-3.5 h-3.5 text-surface-tint shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-space-md pt-0">
                <Link
                  href="/contact"
                  className="w-full py-2.5 px-space-sm rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Request System Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Installation Process Roadmap */}
      <section className="bg-surface-container-low py-space-xl border-y border-surface-container">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
          <div className="max-w-2xl mb-space-lg">
            <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider font-bold">
              Engineering Standards
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-1">
              The 5-Step Precision Installation Protocol
            </h2>
            <p className="font-body-md text-body-md text-secondary mt-1">
              A superior roof is only as good as the technique beneath the surface. Here is how our certified crews protect your investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-space-sm">
            {installSteps.map((step) => (
              <div
                key={step.num}
                className="bg-surface-container-lowest p-space-md rounded-xl shadow-xs border border-surface-container-high space-y-space-xs"
              >
                <span className="font-display-md text-headline-lg text-primary-container font-extrabold block">
                  {step.num}
                </span>
                <h3 className="font-label-lg text-label-lg text-primary font-bold">
                  {step.title}
                </h3>
                <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After Slider */}
      <BeforeAfterSlider initialPreset="roof" showPresets={true} />

      {/* Financing Callout */}
      <FinancingSection />

      {/* Testimonials */}
      <ReviewsSection />

      {/* CTA */}
      <CTASection
        title="Ready to Secure Your Roof with Master Elite Craft?"
        subtitle="Schedule your comprehensive drone inspection and on-site estimate today. Receive upfront pricing and itemized material options with zero pressure."
      />
    </div>
  );
}
