import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import QuoteCalculator from '@/components/forms/QuoteCalculator';
import { SITE_CONFIG } from '@/constants/data';
import { Calculator, ShieldCheck, Lock, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Instant Exterior Estimate & Contact | RoofRight Exteriors',
  description: 'Get an accurate, honest estimate for roofing, gutters, and siding. Satellite-assisted precision, zero pressure, certified architectural guidance.',
};

export default function ContactPage() {
  const showcaseProjects = [
    {
      title: 'Oakridge Architectural Re-Roof',
      tag: 'Roof & Gutters Bundle',
      location: 'Fairfield County',
      duration: 'Completed in 2 Days',
      desc: 'Complete removal of double layer shingles, full plywood re-nailing, and 6" seamless aluminum gutter replacement.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFYF-Oc-cV9560Zj28RiVus3rdRS_WTOvAYevXxDlZ4MJ_bk9LlMa7xAw_00AA94Zrlf51fYpsRzEZAMsPySW5ynXIi7Yuh6x5mkkcX2jY6cxyUr3ltL0HFpVVgCJILndPiB-eRQwqQrXkO48v7rH0ns2lQ7NczPs3PqNudCLgQOA96RAGaDtEBhqj7EvYQ-Aai8dhJoX7vWbEKVC7RqKrl4m5wGmm0uK6Kw4gOX3Dr2w4RyNubtG1',
      alt: 'A grand two-story suburban home with high-definition charcoal architectural shingles and sharp white trim under golden afternoon sunlight.',
    },
    {
      title: 'Modern Siding & Standing Seam',
      tag: 'Siding & Metal Accents',
      location: 'Westchester Estate',
      duration: 'Hardie Plank Elite',
      desc: 'Engineered fiber cement lap siding conversion with 24-gauge standing seam metal overhangs for lifetime weatherproofing.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-a7o6zsGTzLc--znESvhQNsQ-cfppMEgnsn4wAKbgeJqOW_id7Sti35oAmmPTii3zv3n9i3FrmP-YKcM7Mbc9lNZ0jvEQve2y369g-pXI9LnmuxFuASxqMUZIYUI3vNj_iWNi9qpYz4LKRAJTVozGLxgu-HH1zfoPqbSuWaXO5d1ay9Ysz_qOa7vIwDWHWQQ5NnP4bxZwNPFY1tNX6sMCM36JlJK3cU8khwPAaTw1DPtZGmV6Foaz',
      alt: 'Contemporary farmhouse with dark standing seam metal roofing on accent porches and deep navy James Hardie board and batten siding.',
    },
    {
      title: 'Storm Restoration & Flashing',
      tag: 'Historic Restoration',
      location: 'Bergen Ridge',
      duration: 'Class 4 Impact',
      desc: 'Custom copper valleys, chimney step flashing, and hail-resistant Owens Corning Duration shingles backed by lifetime coverage.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCioWSbCLyFmv4MH5fCMn1c9BpCIjlTB3Gx76Wu5YLwRdf2EOWymf0-e8uIhUMDwUKFvkQJ6y8njUK3eezsvxhd2RK7ZYQduQtXowj-v_OrhMupOy-WbZqiI-ZRClRT8Si9qFzkX9pREmRsv34rkNGDdUR0kTL2TfYqPd3n66mYpx8Ri5AWFVdQClAR7bkEHgbpFglEXGL0x-vBUH88BMJNq6zHovyURngBAJpcK-wjRInmzEARWfnf',
      alt: 'A restored classic colonial home with new weathered wood architectural shingles, copper flashing around brick chimney, and high-performance gutter guards.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Architectural Header Scrim / Background Context */}
      <div className="relative w-full bg-surface-container-low py-space-xl overflow-hidden shadow-sm border-b border-surface-container">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-tertiary-fixed/30 blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider mb-space-sm shadow-sm font-semibold">
              <Calculator className="w-4 h-4 text-tertiary-container" />
              <span>Free Instant Exterior Estimate Calculator</span>
            </div>

            <h1 className="font-display-md text-display-md-mobile md:text-display-md text-primary tracking-tight font-bold mb-space-xs">
              Tell Us About Your Home.<br className="hidden sm:inline" />
              <span className="text-tertiary-container">Get an Accurate, Honest Estimate.</span>
            </h1>

            <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
              No high-pressure sales. Just transparent pricing, certified architectural advice, and clear options for roofing, gutters, and siding.
            </p>
          </div>

          {/* Live Meta Badges Strip */}
          <div className="flex flex-wrap items-center gap-space-sm mt-space-md pt-space-xs">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface text-primary font-label-md text-label-md shadow-xs border border-surface-container">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Satellite-Assisted Precision</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface text-primary font-label-md text-label-md shadow-xs border border-surface-container">
              <Lock className="w-4 h-4 text-primary" />
              <span>100% Privacy Protected</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface text-primary font-label-md text-label-md shadow-xs border border-surface-container">
              <Clock className="w-4 h-4 text-tertiary-container" />
              <span>Takes Under 90 Seconds</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main 5-Step Calculator Flow & Trust Sidebar */}
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl w-full">
        <QuoteCalculator />
      </div>

      {/* Real-World Exterior Proof / Photo Evidence Section */}
      <div className="w-full bg-surface-container-low py-space-xl border-t border-surface-container">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin space-y-space-md">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
            <div>
              <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider font-bold">
                Architectural Precision
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-1">
                Engineered for Decades, Built in Days
              </h2>
            </div>
            <p className="font-body-md text-body-md text-secondary max-w-md leading-relaxed">
              Explore recent installations across high-wind corridors and storm zones. Every project is inspected three times before final sign-off.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter pt-space-xs">
            {showcaseProjects.map((proj) => (
              <div
                key={proj.title}
                className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md group border border-surface-container-high"
              >
                <div className="relative h-56 w-full overflow-hidden bg-surface-container">
                  <Image
                    src={proj.img}
                    alt={proj.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-2 py-1 rounded bg-primary/80 backdrop-blur-md text-on-primary font-label-sm text-label-sm font-semibold z-10">
                    {proj.tag}
                  </div>
                </div>

                <div className="p-space-md space-y-1">
                  <div className="flex justify-between items-center font-label-sm text-label-sm text-secondary">
                    <span>{proj.location}</span>
                    <span className="text-primary font-bold">{proj.duration}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                    {proj.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
