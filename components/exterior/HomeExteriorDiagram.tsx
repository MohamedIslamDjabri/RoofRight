'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { EXTERIOR_HOTSPOTS } from '@/constants/data';
import { ShieldCheck, ArrowRight, Gauge, CheckCircle2 } from 'lucide-react';

interface MetricSpec {
  label: string;
  value: string;
  percent: number;
}

const HOTSPOT_METRICS: Record<number, MetricSpec[]> = {
  1: [
    { label: 'Water Shedding & Runoff', value: '100% Guaranteed', percent: 100 },
    { label: 'Wind Uplift Resistance', value: '130 MPH Category 4', percent: 95 },
    { label: 'Warranty Non-Prorated Term', value: '50 Years GAF Golden Pledge', percent: 100 },
  ],
  2: [
    { label: 'Hydraulic Flow Capacity', value: '2.5x Heavy Downpour Volume', percent: 92 },
    { label: 'Debris & Clog Filtration', value: '99% Clean Flow Rate', percent: 99 },
    { label: 'Foundation Splash Defense', value: '10ft Engineered Diverters', percent: 100 },
  ],
  3: [
    { label: 'Hail & Impact Rating', value: 'UL 2218 Class 4 Certified', percent: 98 },
    { label: 'Thermal Envelope Moisture Barrier', value: 'Tyvek Commercial Grade', percent: 96 },
    { label: 'Rot, Termite & Fire Resistance', value: 'Non-Combustible James Hardie', percent: 100 },
  ],
};

export default function HomeExteriorDiagram() {
  const [activeHotspotId, setActiveHotspotId] = useState(1);

  return (
    <section className="w-full py-space-xl lg:py-24 bg-surface" id="envelope-engineering">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-space-lg"
        >
          <span className="font-label-sm text-label-sm text-on-tertiary-container uppercase tracking-wider font-bold">
            Envelope Engineering
          </span>
          <h2 className="font-display-md text-display-md-mobile md:text-display-md text-primary font-bold mt-1">
            One Exterior. One Coordinated Defense.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
            Your roof, gutters, and siding are not separate components—they are an interconnected water-shedding system. When one fails, the others are exposed. See how our coordinated install guarantees flawless protection:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Interactive Elevation Map View with Hotspots */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative bg-surface-container-high rounded-2xl overflow-hidden shadow-xl h-[440px] md:h-[500px] border border-surface-container"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnTu_PqEelund-1gYkeZg0_FsioaYKmJ38OKIolALIf0kPTMdP53XnjzkjnJ144gDq-Sn9hWfmJhDtdoMAvgx44rQcQP4_IdVWcK14N0Vj9vx_dTqNNkX3FjSvdUweJOIOJSa9a2VtLYZrkeX1Cc_DqPSs3A5AmVjiTcU6Lenpf2c6yS4IVyCJMyR-ft0CYY2e2jvB5TtdLlvp61CaHCZhv5Itltfgx7QvAmCLGUe862y-Gt_FuAHJ"
              alt="Architectural perspective of an elegant craftsman home with crisp charcoal shingle roof, dark bronze seamless gutters, and warm gray horizontal lap siding."
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/25 pointer-events-none" />

            {/* Subtle Diagnostic Grid Overlay */}
            <div className="absolute top-4 left-4 z-10 bg-primary/80 backdrop-blur-md text-on-primary px-3 py-1.5 rounded-lg font-label-sm text-[11px] uppercase tracking-wider flex items-center gap-1.5 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Interactive Envelope Inspection Points</span>
            </div>

            {/* Hotspots */}
            {EXTERIOR_HOTSPOTS.map((hotspot) => {
              const isSelected = activeHotspotId === hotspot.id;
              return (
                <motion.button
                  key={hotspot.id}
                  type="button"
                  onClick={() => setActiveHotspotId(hotspot.id)}
                  style={{ top: hotspot.topPct, left: hotspot.leftPct }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none z-20"
                  aria-label={hotspot.title}
                >
                  <span className="relative flex h-11 w-11">
                    {/* Concentric radar wave rings */}
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${
                        hotspot.id === 2 ? 'bg-primary-container' : 'bg-tertiary-container'
                      }`}
                    />
                    {isSelected && (
                      <motion.span
                        animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 rounded-full border-2 border-white"
                      />
                    )}
                    <span
                      className={`relative inline-flex rounded-full h-11 w-11 items-center justify-center font-bold text-sm shadow-2xl transition-all ${
                        hotspot.id === 2
                          ? 'bg-primary text-on-primary'
                          : 'bg-tertiary-container text-on-tertiary'
                      } ${isSelected ? 'ring-4 ring-white shadow-emerald-900/40' : 'hover:scale-105 opacity-90'}`}
                    >
                      {hotspot.id}
                    </span>
                  </span>

                  <motion.div
                    initial={false}
                    animate={{
                      scale: isSelected ? 1.05 : 1,
                      opacity: 1,
                      x: isSelected ? 4 : 0,
                    }}
                    className={`absolute left-13 -top-1 bg-surface/95 backdrop-blur-md text-primary px-3 py-1.5 rounded-lg shadow-xl font-label-md text-label-md whitespace-nowrap hidden sm:block border ${
                      isSelected ? 'border-primary font-bold shadow-lg' : 'border-surface-container opacity-90'
                    }`}
                  >
                    {hotspot.subtitle}
                  </motion.div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Hotspot Detail Switcher Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-space-sm">
            {EXTERIOR_HOTSPOTS.map((hotspot) => {
              const isSelected = activeHotspotId === hotspot.id;
              const linkMap: Record<number, string> = {
                1: '/roofing',
                2: '/gutters',
                3: '/siding',
              };
              const metrics = HOTSPOT_METRICS[hotspot.id] || [];

              return (
                <motion.div
                  key={hotspot.id}
                  layout
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  onClick={() => setActiveHotspotId(hotspot.id)}
                  className={`hotspot-detail-card bg-surface-container-lowest p-space-md rounded-2xl shadow-md border-l-4 transition-all cursor-pointer ${
                    hotspot.id === 2 ? 'border-primary' : 'border-tertiary-container'
                  } ${
                    isSelected
                      ? 'shadow-xl ring-2 ring-primary/15 bg-surface-container-lowest'
                      : 'opacity-70 hover:opacity-95'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-space-xs">
                      <span
                        className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center shadow-sm ${
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
                      className="text-xs font-label-sm text-primary hover:text-tertiary-container flex items-center gap-1 font-semibold group"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {hotspot.description}
                  </p>

                  <div className="mt-2.5 text-surface-tint font-label-sm text-label-sm font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-surface-tint shrink-0" />
                    <span>{hotspot.highlight}</span>
                  </div>

                  {/* Animated Engineering Metrics Drawer when Active */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-3 pt-3 border-t border-surface-container"
                      >
                        <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-secondary mb-2">
                          <Gauge className="w-3.5 h-3.5 text-primary" />
                          <span>Engineering Benchmarks</span>
                        </div>
                        <div className="space-y-2">
                          {metrics.map((m) => (
                            <div key={m.label} className="text-xs">
                              <div className="flex justify-between text-on-surface mb-0.5">
                                <span className="text-secondary font-medium">{m.label}</span>
                                <span className="font-bold text-primary">{m.value}</span>
                              </div>
                              <div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${m.percent}%` }}
                                  transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                                  className={`h-full rounded-full ${
                                    hotspot.id === 2 ? 'bg-primary' : 'bg-on-tertiary-container'
                                  }`}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
