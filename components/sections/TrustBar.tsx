'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Calculator,
  Award,
  Users,
  Home,
  Sparkle
} from 'lucide-react';

export default function TrustBar() {
  const trustPoints = [
    {
      icon: ShieldCheck,
      title: 'Licensed & Insured',
      sub: 'State Reg #ROC-88492',
    },
    {
      icon: Calculator,
      title: 'Detailed Free Quotes',
      sub: 'Itemized Guaranteed Pricing',
    },
    {
      icon: Award,
      title: 'GAF & James Hardie',
      sub: 'Factory-Certified Installers',
    },
    {
      icon: Users,
      title: 'Dedicated Local Crews',
      sub: 'No Untrained Sub-crews',
    },
    {
      icon: Home,
      title: 'Full Exterior Envelope',
      sub: 'Roofing, Siding & Flow',
    },
    {
      icon: Sparkle,
      title: 'Magnetic Sweep Guarantee',
      sub: 'Zero Nails in Driveways',
    },
  ];

  return (
    <section className="w-full bg-surface-container-high py-space-md shadow-sm border-y border-surface-container overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-4 gap-x-2 items-center text-center"
        >
          {trustPoints.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                whileHover={{ y: -3, scale: 1.03 }}
                className="flex flex-col items-center justify-center px-2 py-1 rounded-xl transition-colors hover:bg-surface/50 cursor-default"
              >
                <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center mb-1 shadow-xs border border-surface-container">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-label-md text-label-md text-primary font-bold">
                  {item.title}
                </span>
                <span className="font-label-sm text-[11px] text-secondary">
                  {item.sub}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
