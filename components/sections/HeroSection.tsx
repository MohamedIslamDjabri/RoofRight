'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import {
  Wrench,
  Home,
  Droplets,
  Layers,
  MapPin,
  Phone,
  ArrowRight,
  ArrowDown,
  Calculator,
  Lock,
  CheckCircle2,
  ShieldCheck,
  Check,
  Sparkles,
  Zap,
  Activity
} from 'lucide-react';

export default function HeroSection() {
  const router = useRouter();
  const [selectedServices, setSelectedServices] = useState<string[]>(['Roof Replacement']);
  const [zipCode, setZipCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipCode || !phoneNumber) return;
    setIsSubmitted(true);
    setTimeout(() => {
      router.push(`/contact?zip=${encodeURIComponent(zipCode)}&phone=${encodeURIComponent(phoneNumber)}&services=${encodeURIComponent(selectedServices.join(','))}`);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-surface-container-low">
      {/* Background Architectural Grid Pattern with Animated Pulse Glow */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="48" id="arch-grid" patternUnits="userSpaceOnUse" width="48">
              <path
                className="text-primary-container"
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="currentColor"
                strokeDasharray="2 4"
                strokeWidth="0.75"
              />
            </pattern>
          </defs>
          <rect fill="url(#arch-grid)" height="100%" width="100%" />
        </svg>
      </div>

      {/* Ambient Gradient Highlights */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 right-1/4 w-96 h-96 rounded-full bg-tertiary-container/20 blur-3xl pointer-events-none"
      />

      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Left Column: Architectural Intro with Staggered Motion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-space-md"
          >
            {/* Live Status Badge */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-space-xs px-3 py-1 bg-surface-container-high text-primary font-label-sm text-label-sm uppercase rounded-lg shadow-sm border border-surface-container">
                <ShieldCheck className="w-4 h-4 text-on-tertiary-container" />
                <span>GAF Master Elite &bull; James Hardie Preferred</span>
              </div>

              {/* Texas Storm Guard Indicator */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface text-secondary font-label-sm text-[11px] border border-surface-container shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-semibold text-primary">Austin Crew Status:</span>
                <span>Active On-Site &amp; Rapid Drone Triage</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight font-extrabold leading-[1.08]"
            >
              Protect Your Home <br className="hidden sm:inline" />
              <span className="text-on-tertiary-container">From the Top Down.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed"
            >
              Roofing, gutters, and siding orchestrated by one master exterior team. Architectural durability, verified structural moisture barriers, and refined curb appeal tailored for generational longevity.
            </motion.p>

            {/* Interactive CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm pt-space-xs"
            >
              <motion.a
                whileHover={{ scale: 1.025, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#quick-estimator"
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 bg-tertiary-container text-on-tertiary font-label-lg text-label-lg rounded-xl shadow-md hover:bg-tertiary transition-all duration-200 font-bold"
              >
                <Calculator className="w-5 h-5" />
                <span>Get Your Free Estimate</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="#services-grid"
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 bg-surface text-primary font-label-lg text-label-lg rounded-xl shadow-sm hover:bg-surface-container transition-all duration-200 font-bold border border-surface-container"
              >
                <span>Explore Our Services</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </motion.a>
            </motion.div>

            {/* Trust Badges Under Buttons */}
            <motion.div
              variants={itemVariants}
              className="pt-space-md flex flex-wrap items-center gap-y-2 gap-x-space-md text-secondary font-label-sm text-label-sm uppercase"
            >
              {[
                'Roofing Precision',
                'Engineered Gutters',
                'Hardie Siding',
                'Full Cleanup Warranty',
              ].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Qualification Card with Motion */}
          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 w-full"
            id="quick-estimator"
          >
            <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-2xl shadow-xl relative overflow-hidden border border-surface-container-high">
              {/* Subtle architectural accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-tertiary-container to-primary-container" />

              <div className="flex items-center justify-between pb-space-sm border-b border-surface-container mb-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm text-on-tertiary-container uppercase tracking-wider font-bold">
                    Fast Consultation Planner
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
                    What does your home need?
                  </h2>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                  <Calculator className="w-5 h-5 text-primary" />
                </div>
              </div>

              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Select one or multiple exterior systems to generate an accurate initial scope:
              </p>

              <form onSubmit={handleQuickSubmit} className="space-y-space-sm">
                {/* 4 Interactive Service Chips */}
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    {
                      id: 'Roof Repair',
                      title: 'Roof Repair',
                      sub: 'Leaks & Wind Damage',
                      icon: Wrench,
                    },
                    {
                      id: 'Roof Replacement',
                      title: 'Replacement',
                      sub: 'Complete 50-Yr Systems',
                      icon: Home,
                    },
                    {
                      id: 'Gutters',
                      title: 'Gutters',
                      sub: 'Seamless + Guard Shield',
                      icon: Droplets,
                    },
                    {
                      id: 'Siding',
                      title: 'Siding',
                      sub: 'Hardie & Thermal Vinyl',
                      icon: Layers,
                    },
                  ].map((service) => {
                    const isSelected = selectedServices.includes(service.id);
                    const Icon = service.icon;

                    return (
                      <motion.div
                        key={service.id}
                        whileHover={{ scale: 1.025, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleService(service.id)}
                        className={`p-space-sm rounded-xl transition-all flex flex-col justify-between h-24 cursor-pointer border relative select-none ${
                          isSelected
                            ? 'bg-surface-container-high text-primary border-primary shadow-sm'
                            : 'bg-surface-container-low text-on-surface border-transparent hover:bg-surface-container'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <Icon className={`w-5 h-5 ${isSelected ? 'text-primary' : 'text-secondary'}`} />
                          <AnimatePresence>
                            {isSelected && (
                              <motion.span
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className="w-4 h-4 rounded-full bg-primary text-on-primary flex items-center justify-center"
                              >
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </div>
                        <div>
                          <span className="font-label-md text-label-md font-bold block text-on-surface">
                            {service.title}
                          </span>
                          <span className="font-label-sm text-[11px] text-secondary">
                            {service.sub}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Animated Multi-system Discount Callout */}
                <AnimatePresence>
                  {selectedServices.length >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -6 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -6 }}
                      className="overflow-hidden"
                    >
                      <div className="p-2.5 rounded-lg bg-tertiary-container/15 border border-tertiary-container/30 flex items-center gap-2 text-on-tertiary-container font-label-sm text-[12px] font-semibold">
                        <Sparkles className="w-4 h-4 text-on-tertiary-container shrink-0" />
                        <span>
                          Multi-System Bundle Active: <strong>$750 Coordinated Savings</strong> applied to your project scope.
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ZIP Code and Phone */}
                <div className="pt-space-xs space-y-space-xs">
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-secondary absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="Enter Property ZIP Code (e.g. 78704)"
                      className="w-full pl-10 pr-space-md py-2.5 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg focus:outline-none focus:bg-surface-container-lowest transition-colors border border-surface-container shadow-inner"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="w-4 h-4 text-secondary absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Contact Phone Number"
                      className="w-full pl-10 pr-space-md py-2.5 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg focus:outline-none focus:bg-surface-container-lowest transition-colors border border-surface-container shadow-inner"
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  type="submit"
                  className="w-full mt-space-sm py-3 bg-tertiary-container hover:bg-tertiary text-on-tertiary font-label-lg text-label-lg rounded-xl shadow-md transition-all flex items-center justify-center gap-space-xs cursor-pointer font-bold group"
                >
                  <span>Start Your Estimate</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-2 bg-surface-container text-primary font-label-sm text-label-sm rounded-lg flex items-center justify-center gap-1"
                  >
                    <CheckCircle2 className="w-4 h-4 text-surface-tint" />
                    <span>Loading your custom estimate calculator...</span>
                  </motion.div>
                )}

                <div className="flex items-center justify-center gap-space-sm pt-space-xs text-secondary font-label-sm text-[11px]">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3 text-surface-tint" /> 100% Private
                  </span>
                  <span>&bull;</span>
                  <span>No High-Pressure Sales</span>
                  <span>&bull;</span>
                  <span>Free Drone Scan</span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
