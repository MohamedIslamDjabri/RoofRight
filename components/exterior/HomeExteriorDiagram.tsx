'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EXTERIOR_HOTSPOTS } from '@/constants/data';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function HomeExteriorDiagram() {
  const [activeHotspotId, setActiveHotspotId] = useState(1);

  return (
    <section className="w-full py-space-xl lg:py-24 bg-surface" id="envelope-engineering">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="max-w-3xl mb-space-lg">
          <span className="font-label-sm text-label-sm text-on-tertiary-container uppercase tracking-wider font-bold">
            Envelope Engineering
          </span>
          <h2 className="font-display-md text-display-md-mobile md:text-display-md text-primary font-bold mt-1">
            One Exterior. One Coordinated Defense.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
            Your roof, gutters, and siding are not separate components—they are an interconnected water-shedding system. When one fails, the others are exposed. See how our coordinated install guarantees flawless protection:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Interactive Elevation Map View */}
          <div className="lg:col-span-7 relative bg-surface-container-high rounded-xl overflow-hidden shadow-md h-[440px] md:h-[500px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnTu_PqEelund-1gYkeZg0_FsioaYKmJ38OKIolALIf0kPTMdP53XnjzkjnJ144gDq-Sn9hWfmJhDtdoMAvgx44rQcQP4_IdVWcK14N0Vj9vx_dTqNNkX3FjSvdUweJOIOJSa9a2VtLYZrkeX1Cc_DqPSs3A5AmVjiTcU6Lenpf2c6yS4IVyCJMyR-ft0CYY2e2jvB5TtdLlvp61CaHCZhv5Itltfgx7QvAmCLGUe862y-Gt_FuAHJ"
              alt="Architectural perspective of an elegant craftsman home with crisp charcoal shingle roof, dark bronze seamless gutters, and warm gray horizontal lap siding."
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20 pointer-events-none" />

            {/* Hotspots */}
            {EXTERIOR_HOTSPOTS.map((hotspot) => {
              const isSelected = activeHotspotId === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  type="button"
                  onClick={() => setActiveHotspotId(hotspot.id)}
                  style={{ top: hotspot.topPct, left: hotspot.leftPct }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none"
                  aria-label={hotspot.title}
                >
                  <span className="relative flex h-10 w-10">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        hotspot.id === 2 ? 'bg-primary-container' : 'bg-tertiary-container'
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-10 w-10 items-center justify-center font-bold text-sm shadow-xl transition-transform ${
                        hotspot.id === 2
                          ? 'bg-primary text-on-primary'
                          : 'bg-tertiary-container text-on-tertiary'
                      } ${isSelected ? 'scale-110 ring-4 ring-white' : 'hover:scale-105'}`}
                    >
                      {hotspot.id}
                    </span>
                  </span>

                  <div
                    className={`absolute left-12 -top-1 bg-surface text-primary px-3 py-1.5 rounded-lg shadow-xl font-label-md text-label-md whitespace-nowrap hidden sm:block border border-surface-container ${
                      isSelected ? 'font-bold' : 'opacity-90'
                    }`}
                  >
                    {hotspot.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Hotspot Detail Switcher Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-space-sm">
            {EXTERIOR_HOTSPOTS.map((hotspot) => {
              const isSelected = activeHotspotId === hotspot.id;
              const linkMap: Record<number, string> = {
                1: '/roofing',
                2: '/gutters',
                3: '/siding',
              };

              return (
                <div
                  key={hotspot.id}
                  onClick={() => setActiveHotspotId(hotspot.id)}
                  className={`hotspot-detail-card bg-surface-container-lowest p-space-md rounded-xl shadow-md border-l-4 transition-all cursor-pointer ${
                    hotspot.id === 2 ? 'border-primary' : 'border-tertiary-container'
                  } ${
                    isSelected
                      ? 'scale-[1.02] shadow-lg opacity-100 ring-1 ring-primary/10'
                      : 'opacity-60 hover:opacity-90'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-space-xs">
                      <span
                        className={`w-6 h-6 rounded-full font-bold text-xs flex items-center justify-center ${
                          hotspot.id === 2
                            ? 'bg-primary text-on-primary'
                            : 'bg-tertiary-container text-on-tertiary'
                        }`}
                      >
                        {hotspot.id}
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                        {hotspot.title}
                      </h3>
                    </div>

                    <Link
                      href={linkMap[hotspot.id]}
                      className="text-xs font-label-sm text-primary hover:text-tertiary-container flex items-center gap-1 font-semibold"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {hotspot.description}
                  </p>

                  <div className="mt-2 text-surface-tint font-label-sm text-label-sm font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-surface-tint" />
                    <span>{hotspot.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
