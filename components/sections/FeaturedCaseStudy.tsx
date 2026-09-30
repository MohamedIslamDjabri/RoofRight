import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FeaturedCaseStudy() {
  return (
    <section className="w-full py-space-xl lg:py-24 bg-surface" id="case-study-spotlight">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-xl shadow-xl border border-surface-container-high">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* Left Col: Narrative & Metrics */}
            <div className="lg:col-span-6 space-y-space-md">
              <div className="inline-flex items-center gap-1.5 px-space-xs py-1 bg-surface-container-high rounded text-primary font-label-sm text-label-sm font-bold uppercase">
                <Award className="w-4 h-4 text-on-tertiary-container" />
                <span>Case Study Showcase &bull; Austin, TX</span>
              </div>

              <h2 className="font-headline-lg text-headline-lg md:text-display-md text-primary font-bold leading-tight">
                The Sterling Residence: Full 360&deg; Envelope Rebuild
              </h2>

              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                When heavy hail compromised a 22-year-old shingle roof in Travis County, the homeowner faced escalating rot across the siding and wood fascia. Instead of hiring three uncoordinated trades, they partnered with RoofRight for a total synchronous installation.
              </p>

              {/* Metrics Bento */}
              <div className="grid grid-cols-3 gap-space-sm py-2">
                <div className="p-space-sm bg-surface-container-low rounded-lg text-center sm:text-left">
                  <span className="font-display-md text-headline-lg md:text-display-md text-primary font-bold block leading-none">
                    4
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary mt-1 block">
                    Days on site
                  </span>
                </div>
                <div className="p-space-sm bg-surface-container-low rounded-lg text-center sm:text-left">
                  <span className="font-display-md text-headline-lg md:text-display-md text-on-tertiary-container font-bold block leading-none">
                    100%
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary mt-1 block">
                    Inspected &amp; passed
                  </span>
                </div>
                <div className="p-space-sm bg-surface-container-low rounded-lg text-center sm:text-left">
                  <span className="font-display-md text-headline-lg md:text-display-md text-primary font-bold block leading-none">
                    50-Yr
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary mt-1 block">
                    Transferable warranty
                  </span>
                </div>
              </div>

              {/* Homeowner Quote */}
              <div className="p-space-md bg-surface-container-low rounded-xl border border-surface-container">
                <p className="font-body-sm text-body-sm text-on-surface italic leading-relaxed">
                  &ldquo;Having one project supervisor manage the roofing crew, the custom gutter fabricators, and the Hardie siding installers was like night and day compared to our previous contractor nightmare. Zero stress, impeccably clean driveway every evening.&rdquo;
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-label-md text-label-md font-bold text-primary">
                    Marcus &amp; Elena Sterling
                  </span>
                  <span className="font-label-sm text-[11px] text-secondary">
                    Westlake Hills, Austin
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-on-tertiary-container font-bold transition-colors"
                >
                  <span>View All Completed Case Studies</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Col: Gallery Montage */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-space-sm">
              <div className="h-64 sm:h-72 rounded-lg overflow-hidden shadow-md relative bg-surface-container">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB426rK8cxlNMK25f8E6iO-mRhZgAseEWD67SsEcMuTlbhsY5DFbIG3CbNONZs8O3YFYMxTSBn4Yd2bS1L0OjA5K8tCouILrUxnN5X23vSCalsbyr6WfrR0ndpjfe3RyAph0R7cDcpRKILBoHj5SlnzBD0imD-5t6G8f8SVu3ZWreN-9gwopEgZbH_UY9zDWhF6ny_u0Dsydspfg_TS7dBaWcgx9czcajvHuCp07oPyXpUaEPfJy8KC"
                  alt="Detailed close-up of brand new standing seam metal accent roof over a bay window with immaculate bronze flashing and warm stone trim."
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="h-64 sm:h-72 rounded-lg overflow-hidden shadow-md relative bg-surface-container">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9AyVDM5q0pbgcip7bsDecflzCSN1QUa_MhHhnh0bFPUXE3xpSwcT9glXNPm-Dezg0CnO19NfpEz8UDT-b98TYQTucpAJiXNLPS9t2Y4oT1GGB7vlWl07eILVDDQ83EsDd6bSNVW-78sAAcK1iQIKNDE_-t_ZTPcpdax_i-yw_o-cg9itTfZOHIu_pLQCv37tpstde36_npSoEUPkZZMztNapSmHxn3FU6aqStyREmaiqzW6zt9gEv"
                  alt="Vertical James Hardie board and batten siding installation in deep evergreen shade with flawless caulking and white framing."
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="col-span-2 h-56 sm:h-64 rounded-lg overflow-hidden shadow-md relative bg-surface-container">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlUL1ThvbwaIW_KtlyliuC3eomQDOokDQUFlvPvBJFtyvhteuoecrlPhTaUjau2QqYtQr3eiQKFwazTguBav6BmDws_u4jS8NHGjVhip6l9nqVcZ-gkiKIeTRumzlRHAHpf5gcK7YHOO8x1t6Q9ak9se4DHJgY6NvHvAPkeK7yodOGzFY0YofgNgKwMluPNf_mj0enyGwuTv6EV0TSLOI6q33KsTOz9anWVCtu7s3XgzYcw9_Ko-0o"
                  alt="Full panoramic view of completed two-story suburban home with high-definition architectural shingles and custom downspout extensions blending into manicured landscaping."
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
