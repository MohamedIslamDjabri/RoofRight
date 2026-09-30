import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import CTASection from '@/components/sections/CTASection';
import {
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkle,
  Target,
  HeartHandshake
} from 'lucide-react';
import { SITE_CONFIG } from '@/constants/data';

export const metadata: Metadata = {
  title: 'About RoofRight Exteriors | Master Craftsmanship',
  description: 'Learn about RoofRight Exteriors: Central Texas trusted single-point exterior contractor. GAF Master Elite and James Hardie certified precision.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Architectural Synchrony',
      desc: 'We treat the roof, gutters, and siding as one unified fluid envelope. By installing each component under one supervisor, we eliminate leaks, gaps, and subcontractor blame.',
    },
    {
      icon: Award,
      title: 'Factory-Certified Mastery',
      desc: 'Only 2% of roofing contractors qualify for GAF Master Elite status. Our crews undergo rigorous factory testing, licensing verification, and continuous safety audits.',
    },
    {
      icon: Sparkle,
      title: 'The Clean Worksites Guarantee',
      desc: 'We know your children and pets enjoy your lawn. Every day on site, we roll industrial magnetic sweeps over driveways, gardens, and play areas to guarantee zero nails left behind.',
    },
    {
      icon: HeartHandshake,
      title: 'Transparent, No-Pressure Estimates',
      desc: 'No "today only" high-pressure sales scripts. We provide clear, itemized digital estimates with satellite slope analysis and guaranteed 30-day pricing locks.',
    },
  ];

  const credentials = [
    { name: 'GAF Master Elite® Contractor', sub: 'License #ROC-88492 &bull; Top 2% in North America' },
    { name: 'James Hardie Preferred Remodeler', sub: 'Factory Trained ColorPlus Installation Protocols' },
    { name: 'Owens Corning Platinum Contractor', sub: 'Extended Non-Prorated System Protection' },
    { name: '$2,000,000 Liability Insured', sub: 'Comprehensive Workman Compensation & Property Coverage' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-primary text-on-primary py-space-xl lg:py-24">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin relative z-10">
          <div className="max-w-3xl space-y-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-primary-container text-primary-fixed border border-primary-fixed/20">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
                The RoofRight Difference &bull; Est. 2012
              </span>
            </div>

            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg tracking-tight font-extrabold text-on-primary">
              Built on Craftsmanship. Backed by Integrity.
            </h1>

            <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
              We founded RoofRight Exteriors to solve a major problem in residential construction: the chaotic finger-pointing between separate roofing, gutter, and siding trades. We orchestrate the complete exterior shell with single-point accountability.
            </p>

            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <Link
                href="/contact"
                className="px-space-lg py-3.5 bg-tertiary-container hover:bg-tertiary text-on-tertiary rounded-xl font-label-lg text-label-lg font-bold shadow-md transition-all flex items-center gap-2"
              >
                <span>Schedule an On-Site Consultation</span>
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

      {/* Story & Philosophy */}
      <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 space-y-space-md">
            <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider font-bold">
              Our Founding Principle
            </span>
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-primary font-bold leading-tight">
              One Company. One Project Supervisor. Zero Subcontractor Excuses.
            </h2>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              When water breaches an exterior wall, roofer crews often blame the gutter contractor, and the gutter crew blames the siding installer. Meanwhile, rot quietly destroys the homeowner&apos;s framing.
            </p>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              At RoofRight Exteriors, our integrated teams manage the complete envelope together. Our certified project supervisors coordinate the drip edge alignment, gutter gradient pitch, and James Hardie flashing so water flows flawlessly from peak to grade.
            </p>
            <div className="pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-tertiary-container font-bold"
              >
                <span>View Our Completed Austin Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[420px] rounded-xl overflow-hidden shadow-xl bg-surface-container border border-surface-container-high">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnTu_PqEelund-1gYkeZg0_FsioaYKmJ38OKIolALIf0kPTMdP53XnjzkjnJ144gDq-Sn9hWfmJhDtdoMAvgx44rQcQP4_IdVWcK14N0Vj9vx_dTqNNkX3FjSvdUweJOIOJSa9a2VtLYZrkeX1Cc_DqPSs3A5AmVjiTcU6Lenpf2c6yS4IVyCJMyR-ft0CYY2e2jvB5TtdLlvp61CaHCZhv5Itltfgx7QvAmCLGUe862y-Gt_FuAHJ"
              alt="RoofRight craftsman inspecting completed residential roof and siding installation under golden afternoon sun."
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-surface-container-low py-space-xl border-y border-surface-container">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-space-xl space-y-2">
            <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider font-bold">
              Our Core Commitments
            </span>
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-primary font-bold">
              How We Protect Discerning Homeowners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-surface-container-lowest p-space-lg rounded-xl shadow-xs border border-surface-container-high space-y-space-xs"
                >
                  <Icon className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                    {val.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verified Credentials Bento */}
      <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div className="text-center max-w-2xl mx-auto mb-space-lg">
          <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider font-bold">
            Industry Recognition
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-1">
            Certified by the World&apos;s Leading Manufacturers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm">
          {credentials.map((cred) => (
            <div
              key={cred.name}
              className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-high shadow-xs"
            >
              <CheckCircle2 className="w-5 h-5 text-surface-tint mb-2" />
              <p className="font-label-lg text-label-lg text-primary font-bold">
                {cred.name}
              </p>
              <p
                className="font-body-sm text-xs text-secondary mt-1"
                dangerouslySetInnerHTML={{ __html: cred.sub }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />

      {/* CTA */}
      <CTASection
        title="Experience the RoofRight Craftsmanship Difference"
        subtitle="Schedule an on-site consultation with our senior exterior architects. We bring high-resolution aerial scans and transparent, guaranteed quotes."
      />
    </div>
  );
}
