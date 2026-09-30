'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import CTASection from '@/components/sections/CTASection';
import {
  Droplets,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Filter,
  Layers,
  ArrowDown,
  Hammer,
  Sparkle
} from 'lucide-react';
import { SITE_CONFIG } from '@/constants/data';

export default function GuttersPage() {
  const [activeStage, setActiveStage] = useState<number>(1);

  const drainageStages = [
    {
      id: 1,
      title: '1. Roof Watershed & Drip Edge',
      subtitle: 'The Capture Plane',
      desc: 'Rain cascades down the roofing slope. Our custom aluminum drip edge prevents water from curling backward beneath shingles or rotting the wooden fascia board.',
      metric: 'Over 1,200 gallons collected per 1" of rain on an average roof.',
      icon: Layers,
    },
    {
      id: 2,
      title: '2. Seamless Gutter Hydraulic Channel',
      subtitle: 'Continuous Pitch Control',
      desc: 'Extruded on-site to the millimeter with no leaky seams. Heavy-duty internal screw hangers spaced every 24 inches keep gutters firmly locked even under torrential storm weight.',
      metric: 'Heavy-gauge .032 aluminum channels 40% more runoff than retail gutters.',
      icon: Droplets,
    },
    {
      id: 3,
      title: '3. Oversized 3x4" Downspouts',
      subtitle: 'High-Volume Evacuation',
      desc: 'Commercial-capacity downspouts prevent high-velocity bottlenecks and overflow sheets that peel exterior paint and erode flowerbeds.',
      metric: 'Discharges up to 280 gallons per minute without backflow.',
      icon: ArrowDown,
    },
    {
      id: 4,
      title: '4. Foundation Extension & French Drainage',
      subtitle: 'Complete Soil Protection',
      desc: 'Water is piped 6 to 10 feet away from foundation footings into pop-up emitters or dry wells, eliminating concrete slab settlement cracks and crawlspace mold.',
      metric: 'Zero hydrostatic pressure on basement and foundation slabs.',
      icon: ShieldCheck,
    },
  ];

  const gutterFeatures = [
    {
      title: 'Custom On-Site Machine Extrusion',
      desc: 'We bring mobile roll-forming machines to your driveway, creating custom continuous lengths with zero seam failures.',
    },
    {
      title: 'Micro-Mesh Surgical Debris Filters',
      desc: 'Surgical stainless steel mesh blocks pine needles, oak tassels, and roof grit while drawing 100% of rainwater into the trough.',
    },
    {
      title: '30+ Baked-on Enamel Factory Colors',
      desc: 'Choose from an architectural palette to match your fascia trim, window casing, or siding with zero peeling paint.',
    },
    {
      title: 'Heavy-Duty Internal Concealed Hangers',
      desc: 'Fastened directly to rafter tails with 2-inch zinc-coated screws—no unsightly exterior spike-and-ferrule nails.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-primary text-on-primary py-space-xl lg:py-24">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin relative z-10">
          <div className="max-w-3xl space-y-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-primary-container text-primary-fixed border border-primary-fixed/20">
              <Droplets className="w-4 h-4" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
                Hydraulic Foundation Defense &bull; Seamless Extrusion
              </span>
            </div>

            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg tracking-tight font-extrabold text-on-primary">
              Engineered Seamless Gutters. Flawless Water Evacuation.
            </h1>

            <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
              Every inch of your roof sheds thousands of gallons during torrential storms. Our custom roll-formed seamless aluminum and copper gutters channel water safely away from foundation slabs, preventing costly settlement cracks.
            </p>

            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <Link
                href="/contact"
                className="px-space-lg py-3.5 bg-tertiary-container hover:bg-tertiary text-on-tertiary rounded-xl font-label-lg text-label-lg font-bold shadow-md transition-all flex items-center gap-2"
              >
                <span>Get a Free Gutter Estimate</span>
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

      {/* Visual Flow: Roof -> Gutter -> Downspout -> Drainage */}
      <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div className="text-center max-w-3xl mx-auto mb-space-xl space-y-2">
          <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider font-bold">
            The Hydraulic Circuit
          </span>
          <h2 className="font-display-md text-display-md-mobile md:text-display-md text-primary font-bold">
            Roof &rarr; Gutter &rarr; Downspout &rarr; Foundation Relief
          </h2>
          <p className="font-body-md text-body-md text-secondary">
            Click through each stage to see how our engineered water management cycle protects your entire home envelope from hydrostatic damage.
          </p>
        </div>

        {/* 4 Stage Interactive Stepper */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-space-lg">
          {drainageStages.map((stage) => {
            const isCurrent = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStage(stage.id)}
                className={`p-space-md rounded-xl text-left transition-all cursor-pointer border ${
                  isCurrent
                    ? 'bg-primary-container text-on-primary border-primary shadow-md'
                    : 'bg-surface-container-low text-on-surface border-surface-container hover:bg-surface-container'
                }`}
              >
                <span
                  className={`font-label-sm text-xs uppercase font-bold block ${
                    isCurrent ? 'text-primary-fixed' : 'text-secondary'
                  }`}
                >
                  Stage 0{stage.id}
                </span>
                <p className="font-label-lg text-label-lg font-bold mt-1 truncate">
                  {stage.title.split('. ')[1]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Box */}
        {(() => {
          const current = drainageStages.find((s) => s.id === activeStage) || drainageStages[0];
          const Icon = current.icon;
          return (
            <div className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-lg border border-surface-container-high grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center animate-fadeIn">
              <div className="lg:col-span-8 space-y-space-sm">
                <div className="flex items-center gap-space-xs text-primary">
                  <Icon className="w-6 h-6 text-tertiary-container" />
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">
                    {current.subtitle}
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-primary font-bold">
                  {current.title}
                </h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  {current.desc}
                </p>
                <div className="p-space-md bg-surface-container-low rounded-lg border border-surface-container">
                  <span className="font-label-sm text-label-sm text-primary font-bold block mb-0.5">
                    Engineering Metric:
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface">
                    {current.metric}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 relative h-64 rounded-xl overflow-hidden shadow-md bg-surface-container">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk-jSpqjX6sVmePMOxZDsrJz1p3x2bGl1KwE8W1w0xzPq5UGDdD_Vw3vBri1OxSCesVrha0LVjT7ZeCDr4XzUSxd31N2HZ577x0ssym2orlFnPK2ZRpnw5Ex0ky0zPdyXCc2pci6x6p-lngV9pUtbs2ICB2JvKcM-_a75tnura-GZFqwBu0BJP2cdOQPn5sjb0ftYDdJcRBqRvUVNf2xT_UUCl4JEqj38lDfXQtDkV3R_VU5jVsa2-"
                  alt="Close-up of seamless gutter and downspout system"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          );
        })()}
      </section>

      {/* Gutter Engineering Features Grid */}
      <section className="bg-surface-container-low py-space-xl border-y border-surface-container">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-space-lg">
            <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider font-bold">
              Factory Precision
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-1">
              Engineered Better from Core to Hanger
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {gutterFeatures.map((feat) => (
              <div
                key={feat.title}
                className="bg-surface-container-lowest p-space-lg rounded-xl shadow-xs border border-surface-container-high space-y-space-xs"
              >
                <div className="flex items-center gap-space-xs text-primary">
                  <CheckCircle2 className="w-5 h-5 text-surface-tint" />
                  <h3 className="font-headline-sm text-headline-sm font-bold">
                    {feat.title}
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-secondary leading-relaxed pl-7">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />

      {/* CTA */}
      <CTASection
        title="Stop Foundation Settlement Before the Next Big Rain"
        subtitle="Schedule a free gutter consultation and laser-pitch inspection. We design custom seamless aluminum and copper channels tailored to your exact roofline."
      />
    </div>
  );
}
