'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SERVICE_COMPARISON } from '@/constants/data';
import { ArrowRight, AlertTriangle, Clock, Wrench, ShieldCheck } from 'lucide-react';

export default function ServiceComparison() {
  const [activeTab, setActiveTab] = useState('roof-repair');

  const currentItem = SERVICE_COMPARISON.find((item) => item.id === activeTab) || SERVICE_COMPARISON[0];

  return (
    <section className="w-full py-space-xl lg:py-24 bg-surface-container-low" id="service-comparison">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-space-lg">
          <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider font-bold">
            Diagnostic Evaluation
          </span>
          <h2 className="font-display-md text-display-md-mobile md:text-display-md text-primary font-bold mt-1">
            Which Exterior Service Is Right for Your Home?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Compare scope, failure indicators, and long-term protection benefits to determine where your property&apos;s exterior envelope requires immediate focus.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-space-lg">
          {SERVICE_COMPARISON.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-space-md py-2.5 rounded-lg font-label-md text-label-md transition-all cursor-pointer ${
                  isActive
                    ? 'bg-primary text-on-primary shadow-sm font-bold'
                    : 'bg-surface text-primary hover:bg-surface-container'
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Tab Contents Matrix */}
        <div className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-lg border border-surface-container-high transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* Left Col: Overview & CTA */}
            <div className="lg:col-span-4 space-y-space-sm">
              <span className="px-space-xs py-1 bg-surface-container text-primary font-label-sm text-label-sm uppercase rounded font-semibold inline-block">
                {currentItem.badge}
              </span>
              <h3 className="font-headline-lg text-headline-lg text-primary font-bold">
                {currentItem.headline}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {currentItem.description}
              </p>
              <div className="pt-2">
                <Link
                  href={currentItem.ctaHref}
                  className="inline-flex items-center gap-2 px-space-md py-2.5 bg-primary text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:bg-primary-container transition-all"
                >
                  <span>{currentItem.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Col: 4 Key Parameters Bento */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-space-md bg-surface-container-low p-space-md rounded-xl">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-secondary">
                  <AlertTriangle className="w-4 h-4 text-tertiary-container" />
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Common Warning Signs</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface font-semibold">
                  {currentItem.warningSigns}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-secondary">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Project Turnaround</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface font-semibold">
                  {currentItem.turnaround}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-secondary">
                  <Wrench className="w-4 h-4 text-primary" />
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Estimated Scope</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface font-semibold">
                  {currentItem.scope}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-secondary">
                  <ShieldCheck className="w-4 h-4 text-surface-tint" />
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Long-Term Impact</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface font-semibold">
                  {currentItem.longTermImpact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
