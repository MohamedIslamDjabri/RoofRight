import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/constants/data';
import { ShieldCheck, Calculator, Hammer, Users, Phone, Mail, Clock, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-on-primary">
      {/* Trust Badges Strip */}
      <div className="bg-primary py-space-lg">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin grid grid-cols-2 md:grid-cols-4 gap-gutter">
          <div className="flex items-center gap-space-sm">
            <ShieldCheck className="w-6 h-6 text-primary-fixed shrink-0" />
            <div>
              <p className="font-label-md text-label-md text-on-primary font-bold">Licensed &amp; Insured</p>
              <p className="font-label-sm text-label-sm text-on-primary-container">Full liability protection</p>
            </div>
          </div>

          <div className="flex items-center gap-space-sm">
            <Calculator className="w-6 h-6 text-primary-fixed shrink-0" />
            <div>
              <p className="font-label-md text-label-md text-on-primary font-bold">Free Estimates</p>
              <p className="font-label-sm text-label-sm text-on-primary-container">On-site transparent quote</p>
            </div>
          </div>

          <div className="flex items-center gap-space-sm">
            <Hammer className="w-6 h-6 text-primary-fixed shrink-0" />
            <div>
              <p className="font-label-md text-label-md text-on-primary font-bold">Quality Materials</p>
              <p className="font-label-sm text-label-sm text-on-primary-container">Engineered durability</p>
            </div>
          </div>

          <div className="flex items-center gap-space-sm">
            <Users className="w-6 h-6 text-primary-fixed shrink-0" />
            <div>
              <p className="font-label-md text-label-md text-on-primary font-bold">Experienced Team</p>
              <p className="font-label-sm text-label-sm text-on-primary-container">Master craft standards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
        {/* Brand Column */}
        <div className="lg:col-span-4 space-y-space-md">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shadow-sm group-hover:scale-105 transition-transform duration-200">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-primary font-bold leading-tight">
                RoofRight
              </span>
              <span className="font-label-sm text-[11px] text-primary-fixed-dim uppercase tracking-wider font-semibold">
                Exteriors
              </span>
            </div>
          </Link>

          <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
            Roofing, gutters, and siding from one trusted exterior team. Architectural integrity, master craftsmanship, and complete exterior protection for discerning homeowners.
          </p>

          <div className="flex items-center gap-space-sm pt-space-xs">
            <Shield className="w-5 h-5 text-primary-fixed shrink-0" />
            <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider font-semibold">
              One Company. Complete Exterior Protection.
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="lg:col-span-2 space-y-space-sm">
          <p className="font-label-lg text-label-lg text-primary-fixed font-bold">Navigation</p>
          <ul className="space-y-space-xs font-body-sm text-body-sm">
            <li>
              <Link href="/" className="text-on-primary-container hover:text-on-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-on-primary-container hover:text-on-primary transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-on-primary-container hover:text-on-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/service-areas" className="text-on-primary-container hover:text-on-primary transition-colors">
                Service Areas
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-on-primary-container hover:text-on-primary transition-colors">
                Contact &amp; Estimate
              </Link>
            </li>
          </ul>
        </div>

        {/* Exterior Services */}
        <div className="lg:col-span-3 space-y-space-sm">
          <p className="font-label-lg text-label-lg text-primary-fixed font-bold">Exterior Services</p>
          <ul className="space-y-space-xs font-body-sm text-body-sm">
            <li>
              <Link href="/roofing" className="text-on-primary-container hover:text-on-primary transition-colors">
                Residential Roofing
              </Link>
            </li>
            <li>
              <Link href="/roof-repair" className="text-on-primary-container hover:text-on-primary transition-colors">
                Precision Roof Repair
              </Link>
            </li>
            <li>
              <Link href="/roof-replacement" className="text-on-primary-container hover:text-on-primary transition-colors">
                Roof Replacement Systems
              </Link>
            </li>
            <li>
              <Link href="/gutters" className="text-on-primary-container hover:text-on-primary transition-colors">
                Engineered Gutter Systems
              </Link>
            </li>
            <li>
              <Link href="/siding" className="text-on-primary-container hover:text-on-primary transition-colors">
                Architectural Siding
              </Link>
            </li>
          </ul>
        </div>

        {/* Direct Contact */}
        <div className="lg:col-span-3 space-y-space-sm">
          <p className="font-label-lg text-label-lg text-primary-fixed font-bold">Direct Contact</p>
          <ul className="space-y-space-sm font-body-sm text-body-sm">
            <li className="flex items-start gap-space-xs">
              <Phone className="w-4 h-4 text-primary-fixed-dim shrink-0 mt-0.5" />
              <a
                href={SITE_CONFIG.phoneRaw}
                className="text-on-primary hover:text-primary-fixed transition-colors font-semibold"
              >
                {SITE_CONFIG.phone}
              </a>
            </li>
            <li className="flex items-start gap-space-xs">
              <Mail className="w-4 h-4 text-primary-fixed-dim shrink-0 mt-0.5" />
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-on-primary-container hover:text-on-primary transition-colors break-all"
              >
                {SITE_CONFIG.email}
              </a>
            </li>
            <li className="flex items-start gap-space-xs">
              <Clock className="w-4 h-4 text-primary-fixed-dim shrink-0 mt-0.5" />
              <span className="text-on-primary-container">{SITE_CONFIG.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-primary/60 py-space-md border-t border-primary">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex flex-col md:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-on-primary-container">
          <p>&copy; {new Date().getFullYear()} RoofRight Exteriors. All rights reserved.</p>
          <div className="flex items-center gap-space-lg">
            <span className="text-on-primary-container/80 text-xs">GAF Master Elite #ROC-88492</span>
            <Link href="/contact" className="hover:text-on-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-on-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
