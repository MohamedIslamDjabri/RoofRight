'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE_CONFIG } from '@/constants/data';
import {
  Phone,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Bot,
  ChevronDown,
  Hammer,
  Wrench,
  Droplets,
  Layers,
  Sparkles
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const openAI = (mode: 'chat' | 'voice' = 'voice') => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-roofright-ai', { detail: { mode } }));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceSublinks = [
    {
      title: 'Residential Roofing',
      href: '/roofing',
      desc: 'Architectural shingles, metal & synthetic slate systems',
      icon: Hammer,
      badge: '50-Yr Warranty',
    },
    {
      title: 'Precision Roof Repair',
      href: '/roof-repair',
      desc: 'Infrared leak diagnostics, pipe boots & storm triage',
      icon: Wrench,
      badge: 'Rapid Response',
    },
    {
      title: 'Roof Replacement',
      href: '/roof-replacement',
      desc: 'Deck-level tear-offs, synthetic shields & ridge venting',
      icon: ShieldCheck,
      badge: 'Master Elite',
    },
    {
      title: 'Engineered Gutters',
      href: '/gutters',
      desc: 'Seamless 6" aluminum, leaf guards & foundation drainage',
      icon: Droplets,
      badge: 'Clog-Free',
    },
    {
      title: 'Architectural Siding',
      href: '/siding',
      desc: 'James Hardie fiber cement, lap, board & batten',
      icon: Layers,
      badge: 'ColorPlus™',
    },
  ];

  const isServicesActive = [
    '/roofing',
    '/roof-repair',
    '/roof-replacement',
    '/gutters',
    '/siding',
  ].includes(pathname);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-surface/95 backdrop-blur-xl shadow-[0_2px_16px_rgba(23,33,31,0.08)]'
            : 'bg-surface/90 backdrop-blur-xl shadow-[0_2px_12px_rgba(23,33,31,0.06)]'
        }`}
      >
        <div className="h-20 max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-primary-fixed shadow-sm group-hover:scale-105 transition-transform duration-200">
              <ShieldCheck className="w-6 h-6 text-primary-fixed" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary leading-tight font-bold tracking-tight group-hover:text-primary-container transition-colors">
                RoofRight
              </span>
              <span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider font-semibold">
                Exteriors
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Clean, Balanced & Zero Overflow */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-lg font-label-md text-[14px] transition-all whitespace-nowrap ${
                pathname === '/'
                  ? 'bg-surface-container text-primary font-bold shadow-xs'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container/60'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`px-3 py-1.5 rounded-lg font-label-md text-[14px] transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                  isServicesActive
                    ? 'bg-surface-container text-primary font-bold shadow-xs'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container/60'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-primary' : 'text-secondary'
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-80 bg-surface-container-lowest rounded-xl shadow-2xl border border-surface-container-high p-2 z-50 animate-fadeIn"
                >
                  <div className="text-[11px] font-bold text-secondary uppercase tracking-wider px-3 py-1.5">
                    Exterior Systems
                  </div>
                  {serviceSublinks.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`flex items-start gap-3 p-2.5 rounded-lg transition-colors group ${
                          isActive
                            ? 'bg-surface-container text-primary'
                            : 'hover:bg-surface-container-low text-on-surface'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary-container group-hover:text-on-primary transition-colors text-primary">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="font-label-md text-sm font-bold text-primary truncate">
                              {item.title}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-surface-container-high text-primary font-semibold shrink-0">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-xs text-secondary truncate mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/projects"
              className={`px-3 py-1.5 rounded-lg font-label-md text-[14px] transition-all whitespace-nowrap ${
                pathname === '/projects'
                  ? 'bg-surface-container text-primary font-bold shadow-xs'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container/60'
              }`}
            >
              Projects
            </Link>

            <Link
              href="/about"
              className={`px-3 py-1.5 rounded-lg font-label-md text-[14px] transition-all whitespace-nowrap ${
                pathname === '/about'
                  ? 'bg-surface-container text-primary font-bold shadow-xs'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container/60'
              }`}
            >
              About
            </Link>

            <Link
              href="/service-areas"
              className={`px-3 py-1.5 rounded-lg font-label-md text-[14px] transition-all whitespace-nowrap ${
                pathname === '/service-areas'
                  ? 'bg-surface-container text-primary font-bold shadow-xs'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container/60'
              }`}
            >
              Service Areas
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-1.5 rounded-lg font-label-md text-[14px] transition-all whitespace-nowrap ${
                pathname === '/contact'
                  ? 'bg-surface-container text-primary font-bold shadow-xs'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container/60'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Elements */}
          <div className="flex items-center gap-2 xl:gap-3 shrink-0">
            {/* AI Voice & Booking Trigger in Header */}
            <button
              type="button"
              onClick={() => openAI('voice')}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-primary font-label-md text-xs hover:bg-surface-container-high transition-colors font-semibold border border-surface-container cursor-pointer whitespace-nowrap group"
              title="Start AI Voice Call or Chat with Elena"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-surface-tint opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container" />
              </span>
              <PhoneCall className="w-3.5 h-3.5 text-tertiary-container group-hover:scale-110 transition-transform" />
              <span>AI Booking</span>
            </button>

            {/* Click-to-call phone link */}
            <a
              href={SITE_CONFIG.phoneRaw}
              className="hidden sm:flex items-center gap-1.5 font-label-md text-sm text-primary hover:text-tertiary-container transition-colors font-semibold whitespace-nowrap"
              title="Call RoofRight for Immediate Assistance"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span className="hidden xl:inline">{SITE_CONFIG.phone}</span>
              <span className="xl:hidden">Call</span>
            </a>

            {/* Primary Quote CTA Button */}
            <Link
              href="/contact"
              className="px-4 py-2.5 bg-tertiary-container text-on-tertiary rounded-xl font-label-md text-xs sm:text-sm transition-all hover:bg-tertiary shadow-sm hover:shadow flex items-center gap-1.5 whitespace-nowrap font-bold"
            >
              <span className="hidden sm:inline">Get Free Estimate</span>
              <span className="sm:hidden">Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 lg:hidden bg-primary/40 backdrop-blur-md animate-fadeIn">
          <div className="bg-surface-container-lowest border-b border-surface-container-high shadow-2xl p-space-md max-h-[calc(100vh-5rem)] overflow-y-auto">
            {/* Trust badge */}
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container mb-space-sm">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                GAF Master Elite &bull; Certified Craftsmanship
              </span>
            </div>

            {/* Links List */}
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-space-md py-3 rounded-lg font-label-lg text-label-lg transition-all ${
                      isActive
                        ? 'bg-primary-container text-on-primary font-bold'
                        : 'text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-primary-fixed' : 'text-secondary'}`} />
                  </Link>
                );
              })}
            </nav>

            {/* Bottom Actions inside drawer */}
            <div className="pt-space-md mt-space-md border-t border-surface-container space-y-space-xs">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAI('voice');
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md font-bold shadow-sm hover:bg-primary transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-primary-fixed" />
                <span>Call Elena (AI Voice Booking)</span>
              </button>

              <a
                href={SITE_CONFIG.phoneRaw}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-surface-container text-primary font-label-md text-label-md font-bold hover:bg-surface-container-high transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call {SITE_CONFIG.phone}</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-tertiary-container text-on-tertiary font-label-lg text-label-lg font-bold shadow-md hover:bg-tertiary transition-colors"
              >
                <span>Get Your Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
