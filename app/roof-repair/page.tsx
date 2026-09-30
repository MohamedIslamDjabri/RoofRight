'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import CTASection from '@/components/sections/CTASection';
import {
  Wrench,
  AlertTriangle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Flame,
  Search,
  Sparkle
} from 'lucide-react';
import { SITE_CONFIG } from '@/constants/data';

export default function RoofRepairPage() {
  // Interactive Repair vs. Replace Diagnostic Helper
  const [roofAge, setRoofAge] = useState<number>(8);
  const [leakCount, setLeakCount] = useState<'single' | 'multiple' | 'none'>('single');
  const [damageScope, setDamageScope] = useState<'localized' | 'widespread'>('localized');

  const isRepairCandidate = roofAge < 15 && damageScope === 'localized';

  const repairServices = [
    {
      title: 'Active Roof Leaks & Water Stains',
      desc: 'Infrared moisture sensors locate hidden water pathways traveling down rafter beams, stopping attic rot before drywall collapse.',
      action: 'Emergency same-day seal available',
      icon: AlertTriangle,
    },
    {
      title: 'Chimney Flashing & Cricket Rebuilds',
      desc: 'Over 65% of mysterious ceiling leaks stem from aged mortar or improperly bent step flashing around brick and stone chimneys.',
      action: 'Custom soldered copper or aluminum step-flash',
      icon: Wrench,
    },
    {
      title: 'Pipe Boot Collar & Skylight Resealing',
      desc: 'UV sunlight degrades neoprene plumbing boot collars every 6-8 years. We install lifetime silicone collar shields that never crack.',
      action: 'Permanent UV-rated collar retrofits',
      icon: ShieldCheck,
    },
    {
      title: 'Wind-Torn Shingles & Valley Repairs',
      desc: 'High-velocity gusts tear brittle shingles and expose bare underlayment. We weave new shingles into existing keyways seamlessly.',
      action: 'Exact granule and color matching',
      icon: Search,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header Scrim */}
      <section className="relative overflow-hidden bg-primary text-on-primary py-space-xl lg:py-24">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin relative z-10">
          <div className="max-w-3xl space-y-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-tertiary-container text-on-tertiary">
              <Clock className="w-4 h-4" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
                Rapid Emergency Repair &bull; 4-Hour Response
              </span>
            </div>

            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg tracking-tight font-extrabold text-on-primary">
              Surgical Roof Repairs. Solved Right the First Time.
            </h1>

            <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
              Don&apos;t let an isolated storm leak or failing pipe boot turn into catastrophic structural rot. Our certified technicians isolate water entry with thermal imaging and deliver guaranteed, permanent fixes.
            </p>

            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <Link
                href="/contact"
                className="px-space-lg py-3.5 bg-tertiary-container hover:bg-tertiary text-on-tertiary rounded-xl font-label-lg text-label-lg font-bold shadow-md transition-all flex items-center gap-2"
              >
                <span>Request Rapid Leak Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={SITE_CONFIG.phoneRaw}
                className="px-space-lg py-3.5 bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-primary rounded-xl font-label-lg text-label-lg font-bold transition-all border border-surface-container-lowest/20 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call (555) 391-ROOF</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Common Repair Needs Bento */}
      <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div className="text-center max-w-3xl mx-auto mb-space-xl space-y-2">
          <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider font-bold">
            Targeted Interventions
          </span>
          <h2 className="font-display-md text-display-md-mobile md:text-display-md text-primary font-bold">
            Most Common Roof Failures We Repair Daily
          </h2>
          <p className="font-body-md text-body-md text-secondary">
            We don&apos;t push unnecessary replacements. If your roof has healthy life left, our precision repairs save you thousands while guaranteeing leak-free performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {repairServices.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.title}
                className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-surface-container-high flex flex-col justify-between"
              >
                <div className="space-y-space-xs">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-2">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                    {srv.title}
                  </h3>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-space-md pt-space-xs border-t border-surface-container flex items-center justify-between text-xs font-label-sm text-primary font-bold">
                  <span>{srv.action}</span>
                  <Link href="/contact" className="hover:text-tertiary-container flex items-center gap-1">
                    <span>Book Diagnostic</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Repair vs. Replace Calculator */}
      <section className="bg-surface-container-low py-space-xl border-y border-surface-container">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
          <div className="max-w-3xl mb-space-lg">
            <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider font-bold">
              Unbiased Homeowner Guidance
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-1">
              Interactive Decision Tool: Repair vs. Replace?
            </h2>
            <p className="font-body-md text-body-md text-secondary mt-1">
              Select your roof&apos;s current conditions below to see an objective engineering recommendation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center bg-surface-container-lowest p-space-md md:p-space-lg rounded-xl shadow-md border border-surface-container-high">
            <div className="lg:col-span-6 space-y-space-md">
              {/* Roof Age Slider */}
              <div className="space-y-1">
                <div className="flex justify-between items-center font-label-md text-label-md text-primary font-bold">
                  <span>Current Roof Age:</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-primary">
                    {roofAge} Years Old
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={roofAge}
                  onChange={(e) => setRoofAge(Number(e.target.value))}
                  className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-secondary">
                  <span>1 yr (New)</span>
                  <span>15 yrs (Mid-life)</span>
                  <span>30 yrs (Past Lifespan)</span>
                </div>
              </div>

              {/* Damage Scope */}
              <div className="space-y-1">
                <label className="block font-label-md text-label-md text-primary font-bold">
                  Extent of Known Damage:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDamageScope('localized')}
                    className={`p-space-sm rounded-lg text-left text-xs font-semibold cursor-pointer border transition-all ${
                      damageScope === 'localized'
                        ? 'bg-primary-container text-on-primary border-primary shadow-xs'
                        : 'bg-surface-container-low text-secondary border-transparent'
                    }`}
                  >
                    Localized &bull; 1 or 2 Spots
                  </button>
                  <button
                    type="button"
                    onClick={() => setDamageScope('widespread')}
                    className={`p-space-sm rounded-lg text-left text-xs font-semibold cursor-pointer border transition-all ${
                      damageScope === 'widespread'
                        ? 'bg-primary-container text-on-primary border-primary shadow-xs'
                        : 'bg-surface-container-low text-secondary border-transparent'
                    }`}
                  >
                    Widespread &bull; Multiple Slopes
                  </button>
                </div>
              </div>

              {/* Leaks History */}
              <div className="space-y-1">
                <label className="block font-label-md text-label-md text-primary font-bold">
                  Active Leaks:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['none', 'single', 'multiple'] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setLeakCount(opt)}
                      className={`p-2 rounded-lg text-center text-xs font-semibold capitalize cursor-pointer border transition-all ${
                        leakCount === opt
                          ? 'bg-primary-container text-on-primary border-primary'
                          : 'bg-surface-container-low text-secondary border-transparent'
                      }`}
                    >
                      {opt === 'none' ? 'No active leak' : opt === 'single' ? '1 Active leak' : 'Multiple leaks'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendation Result Card */}
            <div className="lg:col-span-6 bg-surface-container-low p-space-lg rounded-xl border border-surface-container space-y-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                Preliminary Engineering Recommendation:
              </span>

              {isRepairCandidate ? (
                <div className="space-y-space-xs animate-fadeIn">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-surface-tint" />
                    <span>Cost-Effective Targeted Repair Recommended</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">
                    Your Roof Has Years of Service Remaining
                  </h3>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed">
                    At {roofAge} years with isolated damage, a surgical repair of flashings, boots, or lifted tabs will restore structural integrity without the expense of a full replacement.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold shadow-sm"
                    >
                      <span>Book Diagnostic Repair ($0 Initial Estimate)</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-space-xs animate-fadeIn">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-bold text-sm">
                    <AlertTriangle className="w-5 h-5 text-tertiary-container" />
                    <span>Full Roof Replacement May Be More Cost-Effective</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">
                    Investing in Multiple Repairs May Exceed Replacement Value
                  </h3>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed">
                    At {roofAge} years old or with pervasive shingle degradation, repeated piecemeal repairs risk underlying plywood rot and will not provide long-term warranty protection.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/roof-replacement"
                      className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-tertiary-container text-on-tertiary font-label-md text-label-md font-bold shadow-sm"
                    >
                      <span>Explore Roof Replacement Systems</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Slider */}
      <BeforeAfterSlider initialPreset="roof" showPresets={false} />

      {/* Reviews */}
      <ReviewsSection />

      {/* CTA */}
      <CTASection
        title="Don't Let Water Damage Spread Into Your Living Space"
        subtitle="Call RoofRight immediately or schedule an on-site thermal leak scan. We guarantee rapid arrival and permanent, surgical repair solutions."
      />
    </div>
  );
}
