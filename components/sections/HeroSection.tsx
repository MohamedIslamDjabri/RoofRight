'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  PhoneCall
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

  return (
    <section className="relative w-full overflow-hidden bg-surface-container-low">
      {/* Background Architectural Grid Pattern */}
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

      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Left Column: Architectural Intro */}
          <div className="lg:col-span-7 flex flex-col space-y-space-md">
            <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 bg-surface-container-high text-primary font-label-sm text-label-sm uppercase rounded-lg shadow-sm">
              <ShieldCheck className="w-4 h-4 text-on-tertiary-container" />
              <span>GAF Master Elite &bull; James Hardie Preferred</span>
            </div>

            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight font-extrabold leading-[1.08]">
              Protect Your Home <br className="hidden sm:inline" />
              <span className="text-on-tertiary-container">From the Top Down.</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Roofing, gutters, and siding orchestrated by one master exterior team. Architectural durability, verified structural moisture barriers, and refined curb appeal tailored for generational longevity.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm pt-space-xs">
              <a
                href="#quick-estimator"
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 bg-tertiary-container text-on-tertiary font-label-lg text-label-lg rounded-xl shadow-md hover:bg-tertiary transition-all duration-200 font-bold"
              >
                <Calculator className="w-5 h-5" />
                <span>Get Your Free Estimate</span>
              </a>

              <a
                href="#services-grid"
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 bg-surface text-primary font-label-lg text-label-lg rounded-xl shadow-sm hover:bg-surface-container transition-all duration-200 font-bold border border-surface-container"
              >
                <span>Explore Our Services</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Badges Under Buttons */}
            <div className="pt-space-md flex flex-wrap items-center gap-y-2 gap-x-space-md text-secondary font-label-sm text-label-sm uppercase">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container" />
                Roofing Precision
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container" />
                Engineered Gutters
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container" />
                Hardie Siding
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container" />
                Full Cleanup Warranty
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Qualification Card */}
          <div className="lg:col-span-5 w-full" id="quick-estimator">
            <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-xl shadow-xl relative overflow-hidden border border-surface-container-high">
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
                <div className="grid grid-cols-2 gap-2.5">
                  {/* Roof Repair */}
                  <div
                    onClick={() => toggleService('Roof Repair')}
                    className={`p-space-sm rounded-lg transition-all flex flex-col justify-between h-24 cursor-pointer border ${
                      selectedServices.includes('Roof Repair')
                        ? 'bg-surface-container-high text-primary border-primary shadow-xs'
                        : 'bg-surface-container-low text-on-surface border-transparent hover:bg-surface-container'
                    }`}
                  >
                    <Wrench className="w-5 h-5 text-primary" />
                    <div>
                      <span className="font-label-md text-label-md font-bold block text-on-surface">
                        Roof Repair
                      </span>
                      <span className="font-label-sm text-[11px] text-secondary">
                        Leaks &amp; Wind Damage
                      </span>
                    </div>
                  </div>

                  {/* Replacement */}
                  <div
                    onClick={() => toggleService('Roof Replacement')}
                    className={`p-space-sm rounded-lg transition-all flex flex-col justify-between h-24 cursor-pointer border ${
                      selectedServices.includes('Roof Replacement')
                        ? 'bg-surface-container-high text-primary border-primary shadow-xs'
                        : 'bg-surface-container-low text-on-surface border-transparent hover:bg-surface-container'
                    }`}
                  >
                    <Home className="w-5 h-5 text-primary" />
                    <div>
                      <span className="font-label-md text-label-md font-bold block text-on-surface">
                        Replacement
                      </span>
                      <span className="font-label-sm text-[11px] text-secondary">
                        Complete 50-Yr Systems
                      </span>
                    </div>
                  </div>

                  {/* Gutters */}
                  <div
                    onClick={() => toggleService('Gutters')}
                    className={`p-space-sm rounded-lg transition-all flex flex-col justify-between h-24 cursor-pointer border ${
                      selectedServices.includes('Gutters')
                        ? 'bg-surface-container-high text-primary border-primary shadow-xs'
                        : 'bg-surface-container-low text-on-surface border-transparent hover:bg-surface-container'
                    }`}
                  >
                    <Droplets className="w-5 h-5 text-primary" />
                    <div>
                      <span className="font-label-md text-label-md font-bold block text-on-surface">
                        Gutters
                      </span>
                      <span className="font-label-sm text-[11px] text-secondary">
                        Seamless + Guard Shield
                      </span>
                    </div>
                  </div>

                  {/* Siding */}
                  <div
                    onClick={() => toggleService('Siding')}
                    className={`p-space-sm rounded-lg transition-all flex flex-col justify-between h-24 cursor-pointer border ${
                      selectedServices.includes('Siding')
                        ? 'bg-surface-container-high text-primary border-primary shadow-xs'
                        : 'bg-surface-container-low text-on-surface border-transparent hover:bg-surface-container'
                    }`}
                  >
                    <Layers className="w-5 h-5 text-primary" />
                    <div>
                      <span className="font-label-md text-label-md font-bold block text-on-surface">
                        Siding
                      </span>
                      <span className="font-label-sm text-[11px] text-secondary">
                        Hardie &amp; Thermal Vinyl
                      </span>
                    </div>
                  </div>
                </div>

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

                <button
                  type="submit"
                  className="w-full mt-space-sm py-3 bg-tertiary-container hover:bg-tertiary text-on-tertiary font-label-lg text-label-lg rounded-xl shadow-md transition-all flex items-center justify-center gap-space-xs cursor-pointer font-bold"
                >
                  <span>Start Your Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {isSubmitted && (
                  <div className="text-center py-2 bg-surface-container text-primary font-label-sm text-label-sm rounded-lg animate-fadeIn flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-surface-tint" />
                    <span>Loading your custom estimate calculator...</span>
                  </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
