'use client';

import React, { useState } from 'react';
import { TESTIMONIALS } from '@/constants/data';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ReviewsSection() {
  const [filter, setFilter] = useState<'all' | 'roof' | 'siding' | 'gutters'>('all');

  const filtered = TESTIMONIALS.filter((t) => {
    if (filter === 'roof') return t.service.toLowerCase().includes('roof');
    if (filter === 'siding') return t.service.toLowerCase().includes('siding');
    if (filter === 'gutters') return t.service.toLowerCase().includes('gutter');
    return true;
  });

  return (
    <section className="w-full py-space-xl lg:py-24 bg-surface-container-low" id="homeowner-reviews">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-space-xs py-1 bg-surface-container-high rounded text-primary font-label-sm text-label-sm font-bold uppercase mb-2">
              <Star className="w-4 h-4 text-on-tertiary-container fill-on-tertiary-container" />
              <span>Verified Local Customer Reviews</span>
            </div>
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-primary font-bold">
              Trusted by Hundreds of Discerning Homeowners
            </h2>
          </div>

          <div className="flex items-center gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm border border-surface-container-high shrink-0">
            <div className="flex text-on-tertiary-container">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-on-tertiary-container text-on-tertiary-container" />
              ))}
            </div>
            <div>
              <span className="font-label-md text-label-md font-bold text-primary block leading-none">
                4.9 / 5.0 Rating
              </span>
              <span className="font-label-sm text-[11px] text-secondary">
                380+ Verified Central Texas Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2 mb-space-lg">
          {[
            { key: 'all', label: 'All Reviews' },
            { key: 'roof', label: 'Roofing & Repair' },
            { key: 'gutters', label: 'Gutters' },
            { key: 'siding', label: 'Hardie Siding' },
          ].map((btn) => (
            <button
              key={btn.key}
              type="button"
              onClick={() => setFilter(btn.key as any)}
              className={`px-3 py-1.5 rounded-lg font-label-md text-label-md transition-all cursor-pointer ${
                filter === btn.key
                  ? 'bg-primary text-on-primary font-bold shadow-xs'
                  : 'bg-surface text-primary hover:bg-surface-container'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {filtered.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-surface-container-high hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-1 text-on-tertiary-container mb-space-sm">
                  {[...Array(item.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-on-tertiary-container text-on-tertiary-container"
                    />
                  ))}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">
                  &ldquo;{item.headline}&rdquo;
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-space-md mt-space-md border-t border-surface-container flex items-center justify-between">
                <div>
                  <span className="font-label-md text-label-md font-bold text-primary block">
                    {item.name}
                  </span>
                  <span className="font-label-sm text-[11px] text-secondary">
                    {item.service} &bull; {item.location}
                  </span>
                </div>
                {item.verified && (
                  <div className="flex items-center gap-1 text-surface-tint" title="Verified Customer">
                    <CheckCircle2 className="w-5 h-5 text-surface-tint" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
