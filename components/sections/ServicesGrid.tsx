import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/constants/data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicesGrid() {
  return (
    <section className="w-full py-space-xl lg:py-24 bg-surface" id="services-grid">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-on-tertiary-container uppercase font-bold tracking-wider mb-2">
              <span className="w-2 h-2 bg-on-tertiary-container rounded-full" />
              <span>Single-Point Contractor Reliability</span>
            </div>
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-primary font-bold">
              Complete Exterior Services. One Coordinated Team.
            </h2>
          </div>

          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm leading-relaxed">
            Eliminate finger-pointing between subcontractors. We engineer the complete shell so water channels effortlessly away from your structural frame.
          </p>
        </div>

        {/* 4 Primary Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="group bg-surface-container-lowest rounded-xl p-space-md shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-surface-container-high"
            >
              <div>
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-space-md bg-surface-container">
                  <Image
                    src={srv.image}
                    alt={srv.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div
                    className={`absolute top-3 left-3 px-space-xs py-1 rounded font-label-sm text-label-sm font-semibold z-10 ${
                      srv.id === 'roof-repair'
                        ? 'bg-tertiary-container text-on-tertiary'
                        : 'bg-primary text-on-primary'
                    }`}
                  >
                    {srv.badge}
                  </div>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-1">
                  {srv.title}
                </h3>

                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm leading-relaxed">
                  {srv.shortDesc}
                </p>

                <ul className="space-y-1.5 font-label-sm text-[12px] text-secondary mb-space-md">
                  {srv.features.slice(0, 3).map((feat) => (
                    <li key={feat} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-surface-tint shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/${srv.slug}`}
                className="inline-flex items-center justify-between pt-space-sm text-primary font-label-md text-label-md hover:text-on-tertiary-container transition-colors border-t border-surface-container font-semibold"
              >
                <span>Discover {srv.title.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
