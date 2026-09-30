import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import FinancingSection from '@/components/sections/FinancingSection';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import CTASection from '@/components/sections/CTASection';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkle,
  Layers,
  AlertCircle,
  Clock,
  Home
} from 'lucide-react';
import { SITE_CONFIG } from '@/constants/data';

export const metadata: Metadata = {
  title: 'Roof Replacement Systems & Full Tear-Offs | RoofRight Exteriors',
  description: 'Complete roof replacement systems with 50-year non-prorated warranties. GAF Master Elite certified full tear-offs, plywood inspection, and magnetic cleanups.',
};

export default function RoofReplacementPage() {
  const replacementSigns = [
    {
      title: 'Roof Age Exceeds 20 Years',
      desc: 'Standard 3-tab and older architectural shingles dry out and lose volatile oils, leaving the asphalt binder brittle.',
    },
    {
      title: 'Heavy Granule Loss in Gutters',
      desc: 'When protective granules wash off into gutters, UV radiation rapidly degrades the exposed fiberglass core.',
    },
    {
      title: 'Curling, Cupping, or Missing Tabs',
      desc: 'Edges curling upward allow wind-driven rainwater to siphon directly beneath shingles onto the wooden deck.',
    },
    {
      title: 'Multiple Hail Impact Bruises',
      desc: 'Severe hailstorms fracture the shingle mat underneath the surface, creating invisible microscopic leak points.',
    },
  ];

  const replacementLayers = [
    {
      step: 'Layer 1: Structural Deck Inspection',
      desc: 'We replace all spongy or rotted plywood sheets and drive ring-shank nails every 6 inches along rafter framing.',
    },
    {
      step: 'Layer 2: Ice & Water Leak Shield',
      desc: 'Self-sealing elastomeric membrane installed in all valleys, around skylights, and along the entire drip edge perimeter.',
    },
    {
      step: 'Layer 3: Breathable Synthetic Underlayment',
      desc: 'GAF Deck-Armor synthetic underlayment provides a waterproof vapor shield that lets internal attic moisture escape.',
    },
    {
      step: 'Layer 4: High-Wind Starter Strip',
      desc: 'Reinforced starter course locked with continuous DuraGrip adhesive prevents early edge lift during 130 MPH storms.',
    },
    {
      step: 'Layer 5: Architectural Lifetime Shingles',
      desc: 'GAF Timberline HDZ / UHDZ featuring LayerLock technology and StrikeZone nailing area for maximum mechanical grip.',
    },
    {
      step: 'Layer 6: Continuous Attic Ridge Ventilation',
      desc: 'Cobra Snow Country ridge vent balances thermal heat exchange, lowering summer air conditioning strain significantly.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-primary text-on-primary py-space-xl lg:py-24">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin relative z-10">
          <div className="max-w-3xl space-y-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-primary-container text-primary-fixed border border-primary-fixed/20">
              <Award className="w-4 h-4" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
                50-Year Non-Prorated Warranty &bull; Master Elite Certified
              </span>
            </div>

            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg tracking-tight font-extrabold text-on-primary">
              Full-System Roof Replacements. Guaranteed for a Half-Century.
            </h1>

            <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
              We never shingle over old roofs. Every RoofRight replacement is a complete tear-off down to the bare wooden framing, engineered with 6 integrated moisture barriers and backed by non-prorated manufacturer coverage.
            </p>

            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <Link
                href="/contact"
                className="px-space-lg py-3.5 bg-tertiary-container hover:bg-tertiary text-on-tertiary rounded-xl font-label-lg text-label-lg font-bold shadow-md transition-all flex items-center gap-2"
              >
                <span>Calculate Replacement Cost</span>
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

      {/* Signs Replacement is Needed */}
      <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div className="text-center max-w-3xl mx-auto mb-space-xl space-y-2">
          <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider font-bold">
            Inspection Indicators
          </span>
          <h2 className="font-display-md text-display-md-mobile md:text-display-md text-primary font-bold">
            Signs Your Roof Has Reached the End of Its Life
          </h2>
          <p className="font-body-md text-body-md text-secondary">
            Ignoring these telltale warnings risks ceiling drywall collapse, interior mold growth, and denied insurance claims.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {replacementSigns.map((sign) => (
            <div
              key={sign.title}
              className="bg-surface-container-lowest p-space-md rounded-xl shadow-xs border border-surface-container-high space-y-space-xs"
            >
              <AlertCircle className="w-6 h-6 text-tertiary-container" />
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                {sign.title}
              </h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                {sign.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The 6-Layer Anatomy Section */}
      <section className="bg-surface-container-low py-space-xl border-y border-surface-container">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-5 space-y-space-md">
              <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider font-bold">
                Anatomy of an Impenetrable Roof
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                Why Our 6-Layer System Outlasts Standard Contractor Installs
              </h2>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">
                A single weak link in your roofing assembly will cause moisture intrusion. RoofRight installs every component as an integrated, factory-certified defense shield.
              </p>
              <div className="p-space-md bg-surface-container-lowest rounded-xl border border-surface-container flex items-center gap-space-sm">
                <Sparkle className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <p className="font-label-md text-label-md font-bold text-primary">
                    100% Magnetic Nail Sweep Guarantee
                  </p>
                  <p className="font-body-sm text-body-sm text-secondary">
                    We comb driveways, flowerbeds, and play areas with rolling magnetic sweeps four times per project.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-space-xs">
              {replacementLayers.map((layer, idx) => (
                <div
                  key={layer.step}
                  className="bg-surface-container-lowest p-space-md rounded-xl shadow-xs border border-surface-container-high flex items-start gap-space-sm"
                >
                  <div className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-label-lg text-label-lg text-primary font-bold">
                      {layer.step}
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary mt-0.5 leading-relaxed">
                      {layer.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Slider */}
      <BeforeAfterSlider initialPreset="full" showPresets={false} />

      {/* Financing */}
      <FinancingSection />

      {/* Reviews */}
      <ReviewsSection />

      {/* CTA */}
      <CTASection
        title="Protect Your Home with a Lifetime Replacement System"
        subtitle="Schedule your drone roof scan and itemized estimate today. Choose your shingle profile and lock in guaranteed transparent pricing for 30 days."
      />
    </div>
  );
}
