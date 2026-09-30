'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/constants/data';
import {
  Wrench,
  Home,
  Droplets,
  Layers,
  ShieldCheck,
  Search,
  Building,
  Building2,
  TreePine,
  AlertCircle,
  Clock,
  Sparkles,
  ClipboardList,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Phone,
  Lock,
  Calendar,
  Sparkle
} from 'lucide-react';

export interface QuoteFormData {
  services: string[];
  propertyType: string;
  sqft: string;
  condition: string;
  timeline: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  streetAddress: string;
  zipCode: string;
  userNotes: string;
}

const initialData: QuoteFormData = {
  services: ['Roof Replacement'],
  propertyType: 'Single-Family Home',
  sqft: '2,000–3,500 sq ft',
  condition: 'Aging / Visible Wear (>15 yrs)',
  timeline: 'Within 1–3 Months',
  fullName: '',
  phoneNumber: '',
  emailAddress: '',
  streetAddress: '',
  zipCode: '',
  userNotes: '',
};

export default function QuoteCalculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 5;
  const stepNames = [
    'Exterior Services',
    'Property Specs',
    'Exterior Condition',
    'Project Timeline',
    'Estimate Destination',
  ];

  const handleServiceToggle = (serviceName: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceName);
      if (exists) {
        // Keep at least one or allow unchecking
        return {
          ...prev,
          services: prev.services.filter((s) => s !== serviceName),
        };
      } else {
        return {
          ...prev,
          services: [...prev.services, serviceName],
        };
      }
    });
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: '' }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (formData.services.length === 0) {
        newErrors.services = 'Please select at least one service to continue.';
      }
    } else if (step === 5) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full name is required.';
      }
      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = 'Phone number is required.';
      }
      if (!formData.emailAddress.trim()) {
        newErrors.emailAddress = 'Email address is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
        newErrors.emailAddress = 'Please enter a valid email address.';
      }
      if (!formData.streetAddress.trim()) {
        newErrors.streetAddress = 'Street address is required.';
      }
      if (!formData.zipCode.trim()) {
        newErrors.zipCode = 'ZIP code is required.';
      } else if (!/^\d{5}$/.test(formData.zipCode.trim())) {
        newErrors.zipCode = 'Must be 5 digits.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(5)) return;

    setIsSubmitting(true);
    // Simulate real request processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData(initialData);
    setCurrentStep(1);
    setIsSubmitted(false);
    setErrors({});
  };

  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* LEFT 8 COLS: 5-Step Interactive Form Flow */}
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-xl relative min-w-0 border border-surface-container-high">
          {/* Step Progress Bar Header */}
          <div className="mb-space-lg">
            <div className="flex items-center justify-between gap-space-sm mb-space-xs">
              <div className="flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                <span>
                  Step <span className="text-primary font-bold">{currentStep}</span> of {totalSteps}
                </span>
                <span>&bull;</span>
                <span className="text-primary font-bold">{stepNames[currentStep - 1]}</span>
              </div>
              <div className="font-label-sm text-label-sm text-tertiary-container font-bold">
                {Math.round(progressPercent)}% Complete
              </div>
            </div>

            {/* Segmented Progress Line */}
            <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden flex">
              <div
                className="h-full bg-primary-container transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Step Indicators for Quick Scan */}
            <div className="grid grid-cols-5 gap-1 mt-2">
              {stepNames.map((name, idx) => {
                const stepNum = idx + 1;
                const isCurrent = currentStep === stepNum;
                const isPassed = currentStep > stepNum;
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => {
                      if (stepNum <= currentStep || validateStep(currentStep)) {
                        setCurrentStep(stepNum);
                      }
                    }}
                    className={`step-indicator-pill text-left py-1 text-[11px] font-label-sm transition-colors cursor-pointer ${
                      isCurrent
                        ? 'font-bold text-primary border-b-2 border-primary'
                        : isPassed
                        ? 'font-semibold text-tertiary-container'
                        : 'font-semibold text-secondary'
                    }`}
                  >
                    {stepNum}. {name.split(' ')[0]}
                  </button>
                );
              })}
            </div>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              {/* STEP 1: Services Selection */}
              {currentStep === 1 && (
                <div className="space-y-space-md animate-fadeIn">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-primary font-bold mb-1">
                      What does your home need?
                    </h2>
                    <p className="font-body-md text-body-md text-secondary">
                      Select all architectural scopes that apply. We calculate bundled efficiencies automatically.
                    </p>
                    {errors.services && (
                      <p className="text-error font-label-sm text-label-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.services}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                    {/* Roof Repair */}
                    <label
                      onClick={() => handleServiceToggle('Roof Repair')}
                      className={`relative flex items-start gap-space-sm p-space-md rounded-xl cursor-pointer transition-all border ${
                        formData.services.includes('Roof Repair')
                          ? 'bg-surface-container border-primary shadow-xs'
                          : 'bg-surface-container-low border-transparent hover:bg-surface-container'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes('Roof Repair')}
                        onChange={() => {}}
                        className="mt-1 w-4 h-4 rounded text-primary-container accent-primary-container shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-label-lg text-label-lg text-primary font-bold">
                            Roof Repair
                          </span>
                          <Wrench className="w-5 h-5 text-secondary" />
                        </div>
                        <p className="font-body-sm text-body-sm text-secondary">
                          Fix missing shingles, localized flashing leaks, and wind vent damage.
                        </p>
                      </div>
                    </label>

                    {/* Roof Replacement */}
                    <label
                      onClick={() => handleServiceToggle('Roof Replacement')}
                      className={`relative flex items-start gap-space-sm p-space-md rounded-xl cursor-pointer transition-all border ${
                        formData.services.includes('Roof Replacement')
                          ? 'bg-surface-container border-primary shadow-xs'
                          : 'bg-surface-container-low border-transparent hover:bg-surface-container'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes('Roof Replacement')}
                        onChange={() => {}}
                        className="mt-1 w-4 h-4 rounded text-primary-container accent-primary-container shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-label-lg text-label-lg text-primary font-bold">
                            Roof Replacement
                          </span>
                          <Home className="w-5 h-5 text-secondary" />
                        </div>
                        <p className="font-body-sm text-body-sm text-secondary">
                          Complete tear-off &amp; architectural lifetime shingle or standing seam system.
                        </p>
                      </div>
                    </label>

                    {/* Gutters */}
                    <label
                      onClick={() => handleServiceToggle('Gutters & Downspouts')}
                      className={`relative flex items-start gap-space-sm p-space-md rounded-xl cursor-pointer transition-all border ${
                        formData.services.includes('Gutters & Downspouts')
                          ? 'bg-surface-container border-primary shadow-xs'
                          : 'bg-surface-container-low border-transparent hover:bg-surface-container'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes('Gutters & Downspouts')}
                        onChange={() => {}}
                        className="mt-1 w-4 h-4 rounded text-primary-container accent-primary-container shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-label-lg text-label-lg text-primary font-bold">
                            Gutters &amp; Downspouts
                          </span>
                          <Droplets className="w-5 h-5 text-secondary" />
                        </div>
                        <p className="font-body-sm text-body-sm text-secondary">
                          Custom seamless 6&quot; aluminum or copper gutters with high-flow leaf protection.
                        </p>
                      </div>
                    </label>

                    {/* Siding */}
                    <label
                      onClick={() => handleServiceToggle('Siding Installation')}
                      className={`relative flex items-start gap-space-sm p-space-md rounded-xl cursor-pointer transition-all border ${
                        formData.services.includes('Siding Installation')
                          ? 'bg-surface-container border-primary shadow-xs'
                          : 'bg-surface-container-low border-transparent hover:bg-surface-container'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes('Siding Installation')}
                        onChange={() => {}}
                        className="mt-1 w-4 h-4 rounded text-primary-container accent-primary-container shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-label-lg text-label-lg text-primary font-bold">
                            Siding Installation
                          </span>
                          <Layers className="w-5 h-5 text-secondary" />
                        </div>
                        <p className="font-body-sm text-body-sm text-secondary">
                          Engineered fiber cement (James Hardie), insulated vinyl, or board &amp; batten.
                        </p>
                      </div>
                    </label>

                    {/* Complete Exterior Package */}
                    <label
                      onClick={() => handleServiceToggle('Complete Exterior Envelope Package')}
                      className={`relative flex items-start gap-space-sm p-space-md rounded-xl cursor-pointer transition-all sm:col-span-2 border ${
                        formData.services.includes('Complete Exterior Envelope Package')
                          ? 'bg-secondary-container/90 border-primary shadow-xs'
                          : 'bg-secondary-container/50 border-transparent hover:bg-secondary-container'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes('Complete Exterior Envelope Package')}
                        onChange={() => {}}
                        className="mt-1 w-4 h-4 rounded text-primary-container accent-primary-container shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-space-xs">
                            <span className="font-label-lg text-label-lg text-primary font-bold">
                              Complete Exterior Envelope Package
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary font-label-sm text-label-sm font-bold">
                              Save 15%
                            </span>
                          </div>
                          <ShieldCheck className="w-5 h-5 text-tertiary-container" />
                        </div>
                        <p className="font-body-sm text-body-sm text-on-secondary-container">
                          Full synchrony: New roof, seamless gutters, and premium facade siding bundled under one master warranty.
                        </p>
                      </div>
                    </label>

                    {/* Not Sure */}
                    <label
                      onClick={() => handleServiceToggle('Need Exterior Inspection')}
                      className={`relative flex items-start gap-space-sm p-space-md rounded-xl cursor-pointer transition-all sm:col-span-2 border ${
                        formData.services.includes('Need Exterior Inspection')
                          ? 'bg-surface-container border-primary shadow-xs'
                          : 'bg-surface-container-low border-transparent hover:bg-surface-container'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes('Need Exterior Inspection')}
                        onChange={() => {}}
                        className="mt-1 w-4 h-4 rounded text-primary-container accent-primary-container shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-label-lg text-label-lg text-primary font-bold">
                            Not Sure / Complimentary Drone &amp; Satellite Inspection
                          </span>
                          <Search className="w-5 h-5 text-secondary" />
                        </div>
                        <p className="font-body-sm text-body-sm text-secondary">
                          Our engineers will evaluate your high-resolution satellite imagery and identify exact structural needs.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* STEP 2: Property Type & Sizing */}
              {currentStep === 2 && (
                <div className="space-y-space-md animate-fadeIn">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-primary font-bold mb-1">
                      What type of property are we protecting?
                    </h2>
                    <p className="font-body-md text-body-md text-secondary">
                      Helps us calibrate roofing pitch, staging access, and material square footage.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                    {[
                      {
                        name: 'Single-Family Home',
                        desc: 'Standard gable or hip roof detached dwelling.',
                        icon: Home,
                      },
                      {
                        name: 'Multi-Story Suburban',
                        desc: '2+ stories, dormers, valleys, steep architectural pitch.',
                        icon: Building2,
                      },
                      {
                        name: 'Townhome / Duplex',
                        desc: 'Shared firewall conditions and uniform exterior facades.',
                        icon: Building,
                      },
                      {
                        name: 'Ranch / Single Level',
                        desc: 'Expansive single-story footprint with low-to-medium slope.',
                        icon: TreePine,
                      },
                    ].map((item) => {
                      const isSelected = formData.propertyType === item.name;
                      const IconComp = item.icon;
                      return (
                        <label
                          key={item.name}
                          onClick={() => setFormData((prev) => ({ ...prev, propertyType: item.name }))}
                          className={`flex flex-col p-space-md rounded-xl cursor-pointer transition-all border ${
                            isSelected
                              ? 'bg-surface-container border-primary shadow-xs'
                              : 'bg-surface-container-low border-transparent hover:bg-surface-container'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <IconComp className="w-6 h-6 text-primary" />
                            <input
                              type="radio"
                              name="propertyType"
                              checked={isSelected}
                              onChange={() => {}}
                              className="w-4 h-4 text-primary-container accent-primary-container"
                            />
                          </div>
                          <span className="font-label-lg text-label-lg text-primary font-bold">
                            {item.name}
                          </span>
                          <span className="font-body-sm text-body-sm text-secondary mt-1">
                            {item.desc}
                          </span>
                        </label>
                      );
                    })}
                  </div>

                  {/* Square Footage */}
                  <div className="mt-space-md pt-space-xs">
                    <label className="block font-label-md text-label-md text-primary font-bold mb-space-xs">
                      Approximate Home Square Footage
                    </label>
                    <div className="grid grid-cols-3 gap-space-sm">
                      {['1,000–2,000 sq ft', '2,000–3,500 sq ft', '3,500+ sq ft'].map((sq) => {
                        const isSelected = formData.sqft === sq;
                        return (
                          <button
                            key={sq}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, sqft: sq }))}
                            className={`flex flex-col items-center justify-center p-space-md rounded-xl cursor-pointer text-center transition-all border ${
                              isSelected
                                ? 'bg-primary-fixed/50 border-primary font-bold shadow-xs'
                                : 'bg-surface-container-low border-transparent hover:bg-surface-container'
                            }`}
                          >
                            <span className="font-label-lg text-label-lg text-primary font-bold">
                              {sq.split(' ')[0]}
                            </span>
                            <span className="font-label-sm text-label-sm text-secondary">
                              sq. ft.{sq.includes('2,000') ? ' (Common)' : ''}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Current Condition */}
              {currentStep === 3 && (
                <div className="space-y-space-md animate-fadeIn">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-primary font-bold mb-1">
                      What condition is your exterior currently in?
                    </h2>
                    <p className="font-body-md text-body-md text-secondary">
                      This guides our crew dispatch scheduling and insurance documentation support.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                    {[
                      {
                        title: 'Active Leak / Storm Damage',
                        badge: 'Urgent',
                        badgeColor: 'bg-error-container text-on-error-container',
                        desc: 'Interior water spots, missing shingles after recent wind/hail, or emergency tarping needed.',
                        value: 'Active Leak / Storm Damage (Urgent)',
                      },
                      {
                        title: 'Aging / Visible Wear (>15 yrs)',
                        badge: null,
                        desc: 'Granule loss, curling shingle tabs, faded or rotting siding boards, sagging gutters.',
                        value: 'Aging / Visible Wear (>15 yrs)',
                      },
                      {
                        title: 'Planning Upgrades / Remodel',
                        badge: null,
                        desc: 'Elevating curb appeal, converting to architectural standing seam, or modern color redesign.',
                        value: 'Planning Upgrades / Remodel',
                      },
                      {
                        title: 'Selling Soon / Real Estate Inspection',
                        badge: null,
                        desc: 'Preparing property for market listing or addressing buyer inspection contingency reports.',
                        value: 'Selling Soon / Real Estate Inspection',
                      },
                    ].map((item) => {
                      const isSelected = formData.condition === item.value;
                      return (
                        <label
                          key={item.value}
                          onClick={() => setFormData((prev) => ({ ...prev, condition: item.value }))}
                          className={`flex items-start gap-space-sm p-space-md rounded-xl cursor-pointer transition-all border ${
                            isSelected
                              ? 'bg-surface-container border-primary shadow-xs'
                              : 'bg-surface-container-low border-transparent hover:bg-surface-container'
                          }`}
                        >
                          <input
                            type="radio"
                            name="condition"
                            checked={isSelected}
                            onChange={() => {}}
                            className="mt-1 w-4 h-4 text-primary-container accent-primary-container shrink-0"
                          />
                          <div>
                            <div className="flex items-center gap-space-xs mb-1">
                              <span className="font-label-lg text-label-lg text-primary font-bold">
                                {item.title}
                              </span>
                              {item.badge && (
                                <span className={`px-1.5 py-0.5 rounded font-label-sm text-label-sm font-bold ${item.badgeColor}`}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="font-body-sm text-body-sm text-secondary">
                              {item.desc}
                            </p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4: Timeline */}
              {currentStep === 4 && (
                <div className="space-y-space-md animate-fadeIn">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-primary font-bold mb-1">
                      When would you like the project completed?
                    </h2>
                    <p className="font-body-md text-body-md text-secondary">
                      We reserve dedicated installation crews to preserve your planned schedule.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                    {[
                      {
                        title: 'Immediately / ASAP',
                        desc: 'Need prioritized crew booking within 7-14 days.',
                        value: 'Immediately / ASAP',
                      },
                      {
                        title: 'Within 1–3 Months',
                        desc: 'Ideal for organized seasonal planning and HOA approvals.',
                        value: 'Within 1–3 Months',
                      },
                      {
                        title: 'Within 3–6 Months',
                        desc: 'Forward planning for future quarter or tax schedule.',
                        value: 'Within 3–6 Months',
                      },
                      {
                        title: 'Just Researching & Budgeting',
                        desc: 'Gathering ballpark figures without sales pressure.',
                        value: 'Just Researching & Budgeting',
                      },
                    ].map((item) => {
                      const isSelected = formData.timeline === item.value;
                      return (
                        <label
                          key={item.value}
                          onClick={() => setFormData((prev) => ({ ...prev, timeline: item.value }))}
                          className={`flex items-center gap-space-sm p-space-md rounded-xl cursor-pointer transition-all border ${
                            isSelected
                              ? 'bg-surface-container border-primary shadow-xs'
                              : 'bg-surface-container-low border-transparent hover:bg-surface-container'
                          }`}
                        >
                          <input
                            type="radio"
                            name="timeline"
                            checked={isSelected}
                            onChange={() => {}}
                            className="w-4 h-4 text-primary-container accent-primary-container shrink-0"
                          />
                          <div>
                            <span className="font-label-lg text-label-lg text-primary font-bold block">
                              {item.title}
                            </span>
                            <span className="font-body-sm text-body-sm text-secondary">
                              {item.desc}
                            </span>
                          </div>
                        </label>
                      );
                    })}
                  </div>

                  <div className="mt-space-md p-space-md rounded-xl bg-surface-container">
                    <span className="font-label-md text-label-md text-primary font-bold block mb-1">
                      Included in your transparent breakdown:
                    </span>
                    <p className="font-body-sm text-body-sm text-secondary">
                      You will receive full side-by-side tier comparisons: <strong>Architectural Shingles</strong> (GAF Timberline HDZ / Owens Corning Duration), <strong>Engineered Metal Roofing</strong>, and <strong>James Hardie Fiber Siding</strong> specs.
                    </p>
                  </div>
                </div>
              )}

              {/* STEP 5: Details & Destination */}
              {currentStep === 5 && (
                <div className="space-y-space-md animate-fadeIn">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-primary font-bold mb-1">
                      Where should we send your custom estimate breakdown?
                    </h2>
                    <p className="font-body-md text-body-md text-secondary">
                      Your address is used strictly to pull satellite roof pitch &amp; square footage measurements.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
                    <div className="space-y-1">
                      <label className="block font-label-md text-label-md text-primary font-semibold" htmlFor="fullName">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Eleanor Vance"
                        className={`w-full px-space-md py-space-sm rounded-lg bg-surface text-on-surface font-body-md text-body-md border transition-all ${
                          errors.fullName ? 'border-error' : 'border-surface-container-high focus:border-primary'
                        }`}
                      />
                      {errors.fullName && <p className="text-error text-xs">{errors.fullName}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="block font-label-md text-label-md text-primary font-semibold" htmlFor="phoneNumber">
                        Phone Number (for SMS breakdown) *
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="(555) 234-5678"
                        className={`w-full px-space-md py-space-sm rounded-lg bg-surface text-on-surface font-body-md text-body-md border transition-all ${
                          errors.phoneNumber ? 'border-error' : 'border-surface-container-high focus:border-primary'
                        }`}
                      />
                      {errors.phoneNumber && <p className="text-error text-xs">{errors.phoneNumber}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="block font-label-md text-label-md text-primary font-semibold" htmlFor="emailAddress">
                        Email Address *
                      </label>
                      <input
                        id="emailAddress"
                        type="email"
                        required
                        value={formData.emailAddress}
                        onChange={handleInputChange}
                        placeholder="eleanor@example.com"
                        className={`w-full px-space-md py-space-sm rounded-lg bg-surface text-on-surface font-body-md text-body-md border transition-all ${
                          errors.emailAddress ? 'border-error' : 'border-surface-container-high focus:border-primary'
                        }`}
                      />
                      {errors.emailAddress && <p className="text-error text-xs">{errors.emailAddress}</p>}
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="col-span-2 space-y-1">
                        <label className="block font-label-md text-label-md text-primary font-semibold" htmlFor="streetAddress">
                          Street Address *
                        </label>
                        <input
                          id="streetAddress"
                          type="text"
                          required
                          value={formData.streetAddress}
                          onChange={handleInputChange}
                          placeholder="742 Evergreen Terr"
                          className={`w-full px-space-md py-space-sm rounded-lg bg-surface text-on-surface font-body-md text-body-md border transition-all ${
                            errors.streetAddress ? 'border-error' : 'border-surface-container-high focus:border-primary'
                          }`}
                        />
                        {errors.streetAddress && <p className="text-error text-xs">{errors.streetAddress}</p>}
                      </div>

                      <div className="col-span-1 space-y-1">
                        <label className="block font-label-md text-label-md text-primary font-semibold" htmlFor="zipCode">
                          ZIP Code *
                        </label>
                        <input
                          id="zipCode"
                          type="text"
                          maxLength={5}
                          required
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          placeholder="78704"
                          className={`w-full px-space-md py-space-sm rounded-lg bg-surface text-on-surface font-body-md text-body-md border transition-all ${
                            errors.zipCode ? 'border-error' : 'border-surface-container-high focus:border-primary'
                          }`}
                        />
                        {errors.zipCode && <p className="text-error text-xs">{errors.zipCode}</p>}
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-1">
                      <label className="block font-label-md text-label-md text-primary font-semibold" htmlFor="userNotes">
                        Any specific areas of concern or notes for our estimator?
                      </label>
                      <textarea
                        id="userNotes"
                        rows={3}
                        value={formData.userNotes}
                        onChange={handleInputChange}
                        placeholder="e.g. Chimney cricket has a leak, looking to match neighbors' darker architectural shingle tone, existing cedar shake beneath shingles."
                        className="w-full px-space-md py-space-sm rounded-lg bg-surface text-on-surface font-body-md text-body-md border border-surface-container-high focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm pt-space-xs">
                    <Lock className="w-4 h-4 text-primary shrink-0" />
                    <span>We respect your sanctuary. Your contact details are never sold, rented, or distributed to third parties.</span>
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between gap-space-md pt-space-lg mt-space-md border-t border-surface-container">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md font-semibold transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                <div className="ml-auto flex items-center gap-space-sm">
                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex items-center gap-space-xs px-space-xl py-3 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md font-bold transition-all shadow-md cursor-pointer"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center gap-space-xs px-space-xl py-3 rounded-lg bg-tertiary-container text-on-tertiary hover:bg-tertiary font-label-md text-label-md font-bold transition-all shadow-lg hover:-translate-y-0.5 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Analyzing Satellite Measurements...</span>
                      ) : (
                        <>
                          <ClipboardList className="w-5 h-5" />
                          <span>Get My Free Instant Estimate</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </form>
          ) : (
            /* Estimate Success Confirmation State */
            <div className="py-space-xl text-center space-y-space-md animate-fadeIn">
              <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto text-primary shadow-inner">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>

              <div className="max-w-md mx-auto space-y-space-xs">
                <h3 className="font-headline-md text-headline-md text-primary font-bold">
                  Estimate Request Received!
                </h3>
                <p className="font-body-md text-body-md text-secondary">
                  We have initiated satellite perimeter mapping for{' '}
                  <strong className="text-primary">{formData.streetAddress || 'your address'}</strong>. An interactive 3-tier digital quote has been dispatched to your email and phone.
                </p>
              </div>

              <div className="p-space-md bg-surface-container-low rounded-xl max-w-lg mx-auto text-left space-y-space-xs border border-surface-container">
                <div className="flex items-center justify-between font-label-md text-label-md text-primary">
                  <span className="font-bold">Next Milestone:</span>
                  <span className="text-tertiary-container font-semibold">Within 30 Minutes</span>
                </div>
                <p className="font-body-sm text-body-sm text-secondary">
                  A certified exterior specialist will text you a direct link to your interactive 3D roof pitch calculation and material cost breakdown.
                </p>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-surface-container text-primary font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Calculate Another Property</span>
              </button>
            </div>
          )}
        </div>

        {/* RIGHT 4 COLS: Trust Summary & What Happens Next Sidebar */}
        <div className="lg:col-span-4 space-y-space-md">
          {/* Live Selections Micro-Dashboard Card */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md border border-surface-container-high">
            <div className="flex items-center justify-between pb-space-xs mb-space-xs border-b border-surface-container">
              <h3 className="font-label-lg text-label-lg text-primary font-bold">Estimate Parameters</h3>
              <span className="px-2 py-0.5 rounded bg-primary-fixed/40 text-primary font-label-sm text-label-sm font-semibold">
                Live Spec
              </span>
            </div>

            <dl className="space-y-space-xs font-body-sm text-body-sm">
              <div className="flex justify-between items-start gap-2">
                <dt className="text-secondary shrink-0">Selected Scope:</dt>
                <dd className="font-semibold text-primary text-right truncate">
                  {formData.services.length > 0 ? formData.services.join(', ') : 'None selected'}
                </dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-secondary">Property Profile:</dt>
                <dd className="font-semibold text-primary">{formData.propertyType}</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-secondary">Target Scale:</dt>
                <dd className="font-semibold text-primary">{formData.sqft}</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-secondary">Current State:</dt>
                <dd className="font-semibold text-primary truncate max-w-[160px]">
                  {formData.condition}
                </dd>
              </div>
              <div className="flex justify-between items-center">
                <dt className="text-secondary">Desired Window:</dt>
                <dd className="font-semibold text-primary">{formData.timeline}</dd>
              </div>
            </dl>
          </div>

          {/* "What happens next?" Roadmap Card */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md space-y-space-md border border-surface-container-high">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary-container text-[22px]">route</span>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">What happens next?</h3>
            </div>
            <ol className="space-y-space-sm relative">
              <li className="flex items-start gap-space-sm relative">
                <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary font-bold">
                    Satellite &amp; Pitch Calibration
                  </p>
                  <p className="font-body-sm text-body-sm text-secondary">
                    High-res aerial imagery measures precise surface planes, ridges, and valleys.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-space-sm relative">
                <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary font-bold">
                    Transparent Tier Comparison
                  </p>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Side-by-side (Good / Better / Best) material packages with full itemized scope.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-space-sm relative">
                <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary font-bold">
                    Physical Verification Walk
                  </p>
                  <p className="font-body-sm text-body-sm text-secondary">
                    A certified specialist conducts a non-invasive Attic &amp; Decking inspection.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-space-sm relative">
                <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary font-bold">
                    Guaranteed Price Lock
                  </p>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Zero pressure. All quoted numbers are guaranteed for 30 calendar days.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Trust Highlights Panel */}
          <div className="bg-primary-container text-on-primary rounded-xl p-space-md shadow-md space-y-space-sm">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed block font-bold">
              The RoofRight Guarantee
            </span>
            <div className="space-y-space-xs">
              <div className="flex items-start gap-space-xs">
                <ShieldCheck className="w-5 h-5 text-primary-fixed shrink-0 mt-0.5" />
                <p className="font-body-sm text-body-sm text-on-primary-container">
                  <strong className="text-on-primary font-semibold">50-Year Non-Prorated Warranty</strong> backed by Owens Corning Platinum &amp; GAF Master Elite credentials.
                </p>
              </div>
              <div className="flex items-start gap-space-xs">
                <Sparkle className="w-5 h-5 text-primary-fixed shrink-0 mt-0.5" />
                <p className="font-body-sm text-body-sm text-on-primary-container">
                  <strong className="text-on-primary font-semibold">100% Magnetic Nail Sweep Guarantee</strong> — your driveway and garden left cleaner than we found them.
                </p>
              </div>
              <div className="flex items-start gap-space-xs">
                <CheckCircle2 className="w-5 h-5 text-primary-fixed shrink-0 mt-0.5" />
                <p className="font-body-sm text-body-sm text-on-primary-container">
                  <strong className="text-on-primary font-semibold">Fully Licensed &amp; $2M Insured</strong> for complete homeowner peace of mind.
                </p>
              </div>
            </div>
          </div>

          {/* Direct Phone Assistance Banner */}
          <div className="bg-surface-container-high rounded-xl p-space-md shadow-sm text-center space-y-1">
            <p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
              Prefer to talk directly?
            </p>
            <a
              href={SITE_CONFIG.phoneRaw}
              className="inline-flex items-center gap-space-xs font-headline-sm text-headline-sm font-bold text-primary hover:text-tertiary-container transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
            <p className="font-body-sm text-body-sm text-secondary">
              Our exterior specialists are ready to help Mon–Sat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
