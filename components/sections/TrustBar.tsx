import React from 'react';
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
    <section className="w-full bg-surface-container-high py-space-md shadow-sm border-y border-surface-container">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-4 gap-x-2 items-center text-center">
          {trustPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex flex-col items-center justify-center px-2">
                <Icon className="w-6 h-6 text-primary" />
                <span className="font-label-md text-label-md text-primary font-bold mt-1">
                  {item.title}
                </span>
                <span className="font-label-sm text-[11px] text-secondary">
                  {item.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
