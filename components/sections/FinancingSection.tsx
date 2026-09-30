import React from 'react';
import Link from 'next/link';
import { Percent, CreditCard, Shield, ArrowRight } from 'lucide-react';

export default function FinancingSection() {
  return (
    <section className="w-full py-space-xl bg-surface" id="financing-options">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="bg-primary-container text-on-primary rounded-xl p-space-lg md:p-space-xl shadow-xl relative overflow-hidden border border-primary">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-8 space-y-space-sm">
              <span className="px-space-xs py-1 bg-surface/20 text-on-primary font-label-sm text-label-sm rounded uppercase tracking-wider font-semibold inline-block">
                Flexible Homeowner Budgeting
              </span>
              <h2 className="font-display-md text-display-md-mobile md:text-display-md font-bold leading-tight">
                Make Your Exterior Investment Manageable &bull; 0% APR Available
              </h2>
              <p className="font-body-md text-body-md text-on-primary-container max-w-2xl leading-relaxed">
                Don&apos;t compromise on exterior protection. We partner with top consumer home improvement lenders to deliver simple, fixed-rate financing with zero prepayment penalties and fast same-day approval.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-2">
                <div className="flex items-center gap-space-xs">
                  <Percent className="w-6 h-6 text-primary-fixed shrink-0" />
                  <div>
                    <span className="font-label-md text-label-md font-bold block">0% Interest Plans</span>
                    <span className="font-label-sm text-label-sm text-on-primary-container block">
                      Up to 12 or 18 months
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-space-xs">
                  <CreditCard className="w-6 h-6 text-primary-fixed shrink-0" />
                  <div>
                    <span className="font-label-md text-label-md font-bold block">No Down Payment</span>
                    <span className="font-label-sm text-label-sm text-on-primary-container block">
                      100% project coverage
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-space-xs">
                  <Shield className="w-6 h-6 text-primary-fixed shrink-0" />
                  <div>
                    <span className="font-label-md text-label-md font-bold block">Lifetime Workmanship</span>
                    <span className="font-label-sm text-label-sm text-on-primary-container block">
                      Full transferable pledge
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 bg-tertiary-container hover:bg-tertiary text-on-tertiary font-label-lg text-label-lg rounded-xl shadow-md transition-all font-bold"
              >
                <span>Check Financing Rates</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <span className="font-label-sm text-[11px] text-on-primary-container mt-2">
                Checking rates does not impact credit score.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
