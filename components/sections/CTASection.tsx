'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { SITE_CONFIG } from '@/constants/data';
import { Calendar, Phone, Check } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = 'Protect Your Home. Complete the Look.',
  subtitle = "Schedule your on-site exterior consultation today. You'll receive a detailed itemized estimate, digital slope analysis, and transparent material options—no pressure, no obligation.",
}: CTASectionProps) {
  return (
    <section className="w-full py-space-xl lg:py-24 bg-surface-container-high relative overflow-hidden border-t border-surface-container">
      {/* Background Animated Subtle Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-tertiary-container/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-space-md"
        >
          <div className="inline-flex items-center gap-1.5 px-space-xs py-1 bg-surface-container text-primary font-label-sm text-label-sm font-bold uppercase rounded-lg shadow-xs border border-surface-container">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
            <span>Ready to safeguard your property value?</span>
          </div>

          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary font-bold tracking-tight">
            {title}
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-sm pt-space-xs">
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-4 bg-tertiary-container hover:bg-tertiary text-on-tertiary font-label-lg text-label-lg rounded-xl shadow-lg transition-all font-bold"
              >
                <Calendar className="w-5 h-5" />
                <span>Get Your Free Estimate</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <a
                href={SITE_CONFIG.phoneRaw}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-4 bg-surface hover:bg-surface-container text-primary font-label-lg text-label-lg rounded-xl shadow-sm transition-all font-bold border border-surface-container-high"
              >
                <Phone className="w-5 h-5" />
                <span>{SITE_CONFIG.phone}</span>
              </a>
            </motion.div>
          </div>

          <div className="pt-space-sm flex flex-wrap items-center justify-center gap-space-md text-secondary font-label-sm text-label-sm">
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-surface-tint" />
              <span>In-Person Consultation</span>
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-surface-tint" />
              <span>Drone Roof Inspection Included</span>
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-surface-tint" />
              <span>Price-Lock Guarantee for 30 Days</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
