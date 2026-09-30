import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ProjectGallery from '@/components/projects/ProjectGallery';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import CTASection from '@/components/sections/CTASection';
import { Award, ShieldCheck, Star, Droplets, Zap, TrendingUp, AlertTriangle, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/data';

export const metadata: Metadata = {
  title: 'Project Gallery & Verified Transformations | RoofRight Exteriors',
  description: 'Explore completed residential roofing, gutter, and siding projects across Austin & Central Texas. High-resolution before and after comparisons and case studies.',
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Hero Storytelling Section */}
      <section className="relative overflow-hidden bg-primary text-on-primary py-space-xl lg:py-24">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-container/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-tertiary-container/20 blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
            <div className="max-w-3xl space-y-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-primary-container/80 text-primary-fixed border border-primary-fixed/20">
                <ShieldCheck className="w-4 h-4 text-primary-fixed" />
                <span className="font-label-sm text-label-sm tracking-widest uppercase font-semibold">
                  Verified Portfolio Archive
                </span>
              </div>

              <p className="font-label-sm text-label-sm text-tertiary-fixed tracking-wider uppercase font-bold">
                Exterior Transformations &amp; Project Gallery
              </p>

              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg tracking-tight text-on-primary leading-tight font-extrabold">
                Craftsmanship You Can See from the Curb.
              </h1>

              <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl leading-relaxed">
                Browse real residential roofing, gutter, and siding projects completed across our local communities. Filter by service or explore synchronized full exterior transformations engineered for lifelong resilience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-space-md shrink-0">
              <div className="bg-primary-container/90 backdrop-blur-md p-space-md rounded-xl shadow-lg flex items-center gap-space-md border border-primary-fixed/15">
                <div className="w-12 h-12 rounded-lg bg-tertiary-container flex items-center justify-center text-on-tertiary">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-headline-sm text-headline-sm text-on-primary font-bold">1,240+</p>
                  <p className="font-label-sm text-label-sm text-primary-fixed-dim">
                    Central Texas Roofs &amp; Facades Shielded
                  </p>
                </div>
              </div>

              <p className="font-label-sm text-label-sm text-primary-fixed-dim flex items-center gap-space-xs font-semibold">
                <Star className="w-4 h-4 text-tertiary-fixed fill-tertiary-fixed" />
                <span>GAF Master Elite&reg; Certified &bull; James Hardie Preferred</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Before & After Feature */}
      <BeforeAfterSlider initialPreset="full" showPresets={true} />

      {/* Main Filterable Projects Section */}
      <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-lg">
          <div className="space-y-space-xs">
            <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-widest font-bold">
              Documented Workmanship
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
              Recent Residential Case Records
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-secondary max-w-md">
            Every installation is cataloged with material spec sheets, municipal permits, and post-inspection thermal drone scans.
          </p>
        </div>

        <ProjectGallery />
      </section>

      {/* In-Depth Case Study Spotlight: The Henderson Residence */}
      <section className="bg-surface-container-low py-space-xl lg:py-24 border-y border-surface-container">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
          {/* Header */}
          <div className="max-w-2xl mb-space-xl space-y-space-xs">
            <div className="flex items-center gap-space-xs text-tertiary-container">
              <ShieldCheck className="w-5 h-5 text-tertiary-container" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
                Featured Architectural Case Study
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
              The Henderson Residence: Complete 360&deg; Exterior Shield
            </h2>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              How our synchronized single-team approach solved chronic foundation washouts, rot intrusion, and energy leaks in a 1990s hill country home.
            </p>
          </div>

          {/* Bento Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
            {/* Visual & Metrics */}
            <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl overflow-hidden shadow-md flex flex-col justify-between border border-surface-container-high">
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDsxiWqlUf6IQpD3le5NcbBgZoDXZoR9kzMZ-4Pids9a2qf-UF2n32_xseok2kZvJOb9c0V8YMWngFDFni0klsIBU8lp1Z1bX1CcZOXzvM6ihbbZ7j8BGWH7XnbWUcK0DrKGo20KM1xSwdTF6WlcLAI2lIP5BKflLokDYx7z0toJvjvnz0f7cV0TW3DaEZboZHWAveUbXz_yI83t0i01UNhTAy-M5JzJxfdvyIGxhRMtmtx-_TTdJ2"
                  alt="Dramatic wide architectural photograph of the completed Henderson Residence in Austin Texas with charcoal GAF designer roof, crisp sage green fiber cement siding, and dark bronze seamless gutters."
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-space-md">
                  <div className="text-on-primary">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">
                      Location Verified
                    </span>
                    <p className="font-headline-sm text-headline-sm font-semibold">
                      Barton Creek Vista, Austin, TX
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-space-lg grid grid-cols-1 sm:grid-cols-3 gap-space-md bg-surface-container-lowest">
                <div className="p-space-md rounded-lg bg-surface-container-low text-center sm:text-left">
                  <Droplets className="w-5 h-5 text-tertiary-container mb-1" />
                  <p className="font-display-md text-headline-lg text-primary font-bold">100%</p>
                  <p className="font-label-sm text-label-sm text-secondary">Water Away from Slab</p>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-low text-center sm:text-left">
                  <Zap className="w-5 h-5 text-primary-container mb-1" />
                  <p className="font-display-md text-headline-lg text-primary font-bold">+35%</p>
                  <p className="font-label-sm text-label-sm text-secondary">Energy Efficiency Boost</p>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-low text-center sm:text-left">
                  <TrendingUp className="w-5 h-5 text-tertiary mb-1" />
                  <p className="font-display-md text-headline-lg text-primary font-bold">+$42k</p>
                  <p className="font-label-sm text-label-sm text-secondary">Appraised Curb Value</p>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-space-md">
              {/* The Challenge */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-xs border border-surface-container-high">
                <div className="flex items-center gap-space-xs text-error">
                  <AlertTriangle className="w-5 h-5 text-error" />
                  <h4 className="font-label-lg text-label-lg font-bold uppercase tracking-wider">
                    The Challenge
                  </h4>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  An aging 22-year roof had multiple micro-punctures causing ceiling staining. Undersized, overflowing sectional gutters were washing out the hillside foundation, while dry-rotted cedar siding permitted insect infiltration.
                </p>
              </div>

              {/* Coordinated Solution */}
              <div className="bg-primary-container text-on-primary p-space-lg rounded-xl shadow-md space-y-space-xs border border-primary">
                <div className="flex items-center gap-space-xs text-primary-fixed">
                  <ShieldCheck className="w-5 h-5 text-primary-fixed" />
                  <h4 className="font-label-lg text-label-lg font-bold uppercase tracking-wider text-primary-fixed">
                    Synchronized Solution
                  </h4>
                </div>
                <p className="font-body-sm text-body-sm text-on-primary-container">
                  Rather than managing three distinct subcontractors over 4 months, RoofRight synchronized a 3-tier install in one seamless workflow:
                </p>
                <ul className="space-y-space-xs pt-space-xs font-body-sm text-body-sm text-on-primary">
                  <li className="flex items-start gap-space-xs">
                    <CheckCircle2 className="w-4 h-4 text-tertiary-fixed mt-1 shrink-0" />
                    <span>Tier 1: Stripped decking, re-sheathed bad wood &amp; installed GAF Lifetime Architectural System.</span>
                  </li>
                  <li className="flex items-start gap-space-xs">
                    <CheckCircle2 className="w-4 h-4 text-tertiary-fixed mt-1 shrink-0" />
                    <span>Tier 2: Removed cedar rot, wrapped in rigid thermal insulation &amp; hung HardiePlank lap siding.</span>
                  </li>
                  <li className="flex items-start gap-space-xs">
                    <CheckCircle2 className="w-4 h-4 text-tertiary-fixed mt-1 shrink-0" />
                    <span>Tier 3: Formed continuous seamless heavy-gauge 6&quot; gutters routed straight to dry-wells.</span>
                  </li>
                </ul>
              </div>

              {/* Quote micro-card */}
              <div className="bg-surface-container-highest/60 p-space-md rounded-xl flex items-center gap-space-md border border-surface-container">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-surface-container relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnkCPbguLQUsnOta9dHworNOZu_djImVjTlw2KOZ1BaSVhqZCGexBfBCtuq1Mp7kTzSD6BQq-Cj-CjMisX11R4DnREuQpxjb52WvxNWJXNuP3MGunyPqD3KuTNGneDkWvNHQ2yI3xV-NXuZT7zdjO29ykGLGKj2QQuvFdXxAaY7imPXz_enPirSr0Gac6T1VM5qBTH0lne46rEknTApbqwl5zrD9zMpsFx1Yo_seqQHBKkp-wOCkyY"
                    alt="Portrait of homeowner David Henderson"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-body-sm text-body-sm text-on-surface italic leading-relaxed">
                    &ldquo;One project manager, one crew schedule, zero excuses. The house looks built yesterday.&rdquo;
                  </p>
                  <p className="font-label-sm text-label-sm text-secondary font-bold mt-1">
                    &mdash; David Henderson, Barton Creek
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Reviews Section */}
      <ReviewsSection />

      {/* Bottom CTA Section */}
      <CTASection
        title="Ready to Plan Your Home's Exterior Upgrade?"
        subtitle="Schedule a free on-site design consultation. We inspect your current roof, siding, and gutter health with high-resolution imagery and clear, upfront fixed quotes."
      />
    </div>
  );
}
