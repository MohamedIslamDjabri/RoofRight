'use client';

import React, { useState } from 'react';
import { SERVICE_AREAS, ServiceAreaItem } from '@/constants/data';
import { MapPin, Navigation, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function MapSection() {
  const [selectedArea, setSelectedArea] = useState<ServiceAreaItem>(SERVICE_AREAS[0]);

  return (
    <section className="w-full py-space-xl bg-surface" id="service-map">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-space-lg">
          <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider font-bold">
            Local Coverage Network
          </span>
          <h2 className="font-display-md text-display-md-mobile md:text-display-md text-primary font-bold mt-1">
            Austin &amp; Central Texas Service Radius
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Dedicated local roofing, gutter, and siding crews based across Travis, Williamson, and Hays counties. Prompt same-day emergency inspection and on-site consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Interactive Map Canvas / Graphic Component */}
          <div className="lg:col-span-8 bg-surface-container-high rounded-xl overflow-hidden shadow-lg border border-surface-container relative min-h-[460px] flex flex-col justify-between p-space-md">
            {/* Architectural Grid & Map Aesthetic Background */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
              </svg>
            </div>

            {/* Stylized Topographical / County Highway Contours */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <svg viewBox="0 0 800 500" className="w-full h-full object-cover">
                {/* Colorado River curve */}
                <path
                  d="M 50 200 C 180 220, 240 310, 380 260 S 520 230, 750 290"
                  fill="none"
                  stroke="#42655e"
                  strokeWidth="8"
                  strokeLinecap="round"
                  opacity="0.4"
                />
                {/* I-35 corridor */}
                <path
                  d="M 420 20 L 410 240 L 390 480"
                  fill="none"
                  stroke="#173b35"
                  strokeWidth="4"
                  strokeDasharray="6 4"
                  opacity="0.5"
                />
                {/* MoPac / 360 Loop */}
                <path
                  d="M 330 80 C 290 180, 280 320, 360 450"
                  fill="none"
                  stroke="#173b35"
                  strokeWidth="3"
                  strokeDasharray="4 4"
                  opacity="0.4"
                />
              </svg>
            </div>

            {/* Header overlay */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 bg-surface/90 backdrop-blur-md p-space-sm rounded-lg border border-surface-container shadow-sm">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-tertiary-container" />
                <span className="font-label-sm text-label-sm font-bold text-primary uppercase">
                  Central Texas Dispatch Hub &bull; 45-Mile Service Radius
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary">
                Click any region below to inspect response times
              </span>
            </div>

            {/* Area Interactive Pins */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2 my-auto py-space-md">
              {SERVICE_AREAS.map((area) => {
                const isSelected = selectedArea.id === area.id;
                return (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setSelectedArea(area)}
                    className={`flex items-center gap-2 p-3 rounded-xl transition-all text-left cursor-pointer border ${
                      isSelected
                        ? 'bg-primary-container text-on-primary border-primary shadow-md scale-105'
                        : 'bg-surface/90 hover:bg-surface text-primary border-surface-container shadow-xs'
                    }`}
                  >
                    <MapPin
                      className={`w-4 h-4 shrink-0 ${
                        isSelected ? 'text-primary-fixed' : 'text-tertiary-container'
                      }`}
                    />
                    <div className="min-w-0">
                      <p className="font-label-md text-label-md font-bold truncate">
                        {area.name}
                      </p>
                      <p
                        className={`font-label-sm text-[11px] truncate ${
                          isSelected ? 'text-primary-fixed-dim' : 'text-secondary'
                        }`}
                      >
                        {area.county}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom notification */}
            <div className="relative z-10 flex items-center justify-between bg-primary/90 backdrop-blur-md text-on-primary px-space-md py-2.5 rounded-lg text-xs font-label-sm">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary-fixed" />
                Emergency Tarping Available Across All Covered ZIPs Within 4 Hours
              </span>
              <a href="tel:5553917663" className="underline font-bold hover:text-primary-fixed">
                (555) 391-ROOF
              </a>
            </div>
          </div>

          {/* Right Selected Area Card */}
          <div className="lg:col-span-4 bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-md border border-surface-container-high space-y-space-md">
            <div className="space-y-1 pb-space-xs border-b border-surface-container">
              <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider font-bold">
                {selectedArea.county}
              </span>
              <h3 className="font-headline-lg text-headline-lg text-primary font-bold">
                {selectedArea.name}
              </h3>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {selectedArea.description}
            </p>

            <div className="space-y-space-xs">
              <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                Local Capabilities:
              </p>
              <ul className="space-y-1.5">
                {selectedArea.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 font-body-sm text-body-sm text-primary">
                    <CheckCircle2 className="w-4 h-4 text-surface-tint shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-1 pt-space-xs">
              <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                Primary ZIP Codes Served:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedArea.zipCodes.map((zip) => (
                  <span
                    key={zip}
                    className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold"
                  >
                    {zip}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-space-sm border-t border-surface-container flex flex-col gap-2">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md font-bold transition-all shadow-sm"
              >
                <span>Book In-Person Estimate in {selectedArea.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
