'use client';

import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/constants/data';
import { Phone, ArrowRight } from 'lucide-react';

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-surface-container-lowest/95 backdrop-blur-md border-t border-surface-container-high px-margin-mobile py-2.5 shadow-2xl flex items-center gap-2">
      <a
        href={SITE_CONFIG.phoneRaw}
        className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-lg bg-surface-container text-primary font-label-md text-label-md font-bold hover:bg-surface-container-high transition-colors shadow-xs"
        aria-label="Call RoofRight"
      >
        <Phone className="w-4 h-4 text-primary" />
        <span>Call RoofRight</span>
      </a>

      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-lg bg-tertiary-container text-on-tertiary font-label-md text-label-md font-bold hover:bg-tertiary transition-colors shadow-md"
      >
        <span>Free Estimate</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
