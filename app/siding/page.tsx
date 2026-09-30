'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TrustBar from '@/components/sections/TrustBar';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import CTASection from '@/components/sections/CTASection';
import {
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Flame,
  Bug,
  Thermometer,
  Palette,
  Sparkle
} from 'lucide-react';
import { SITE_CONFIG } from '@/constants/data';

interface SidingMaterial {
  id: string;
  name: string;
  profile: string;
  description: string;
  fireRating: string;
  rValue: string;
  warranty: string;
  image: string;
}

const SIDING_MATERIALS: SidingMaterial[] = [
  {
    id: 'hardie-lap',
    name: 'HardiePlank® Lap Siding',
    profile: 'Horizontal Lap & Cedarmill Texture',
    description: 'The #1 brand of siding in North America. Sleek horizontal lines with authentic wood grain texture, engineered for climate durability and resistance to moisture rot.',
    fireRating: 'Class A Non-Combustible',
    rValue: 'R-4.5 with Rigid Wrap',
    warranty: '30-Year Non-Prorated Warranty',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmqRrm5r17x8DLffe-DQnm0DxHYW8gJBxbFk4tivCkdf-_Atmeu5ExXcWwIHoNBKZdfIzn5xmk8y1hduO5rCU6NWyDBgk_L2q8mlAdtcwzZSaK8xcpk2B1q6qfc2kQ2tWyc6Jk0AfeRDluMwXonJ2LksXtquIQPmOK9f0c0GO0NENlg3nsPqjfSXVGFpiDDija1SbSqFnCt2BsM6TaH69gNMjQEQ2VO4T9Klrb-iW40Ak4c1I0nbW7',
  },
  {
    id: 'board-batten',
    name: 'HardiePanel® Board & Batten',
    profile: 'Modern Farmhouse Vertical Panels',
    description: 'Striking vertical geometry featuring wide fiber cement panels accented with 2.5-inch batten strips. Delivers modern architectural depth with zero rot.',
    fireRating: 'Class A Non-Combustible',
    rValue: 'R-5.0 with Rigid Foam',
    warranty: '30-Year Non-Prorated Warranty',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeWsCdUhq6t1rYEdJlrHgl7RQdqg-4597dbGU0FjZ5VSqMlkslzvm3LpSwgKEoV1zy83pO8YgqdcHC7ziQdmYQJx8X7xWgq-KyEpTtsgaovgcgiqUa_mDD0zFTfPYgiWsR1qQm6Utp4woc47Eq2l32ve2BDlfvi-RJ_vWuDMN7ogFMPFcufH4Chi5JOyh8QfZbR1Puw5ICiRQD84RXCU4xIXZbVQfpMAq_1s7l_ldO76maYh4j-TQv',
  },
  {
    id: 'hardie-shingle',
    name: 'HardieShingle® Accent Shakes',
    profile: 'Staggered Edge & Straight Gable Accents',
    description: 'Captures the handcrafted warmth of cedar shingles without rotting, curling, or splitting under blazing southern sunlight.',
    fireRating: 'Class A Non-Combustible',
    rValue: 'R-4.0 with Vapor Wrap',
    warranty: '30-Year Non-Prorated Warranty',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-a7o6zsGTzLc--znESvhQNsQ-cfppMEgnsn4wAKbgeJqOW_id7Sti35oAmmPTii3zv3n9i3FrmP-YKcM7Mbc9lNZ0jvEQve2y369g-pXI9LnmuxFuASxqMUZIYUI3vNj_iWNi9qpYz4LKRAJTVozGLxgu-HH1zfoPqbSuWaXO5d1ay9Ysz_qOa7vIwDWHWQQ5NnP4bxZwNPFY1tNX6sMCM36JlJK3cU8khwPAaTw1DPtZGmV6Foaz',
  },
  {
    id: 'insulated-vinyl',
    name: 'Engineered Insulated Cladding',
    profile: 'Contoured EPS Foam Backed Panels',
    description: 'High-performance vinyl bonded with high-density graphite insulation. Offers impact resistance and continuous thermal wrapping for superior energy savings.',
    fireRating: 'Class A Impact & Fire Shield',
    rValue: 'R-3.8 Thermal Blanket',
    warranty: 'Lifetime Limited Warranty',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRo7mJUAb48anzq-UC68UGU7bu1l3Tl7yioFnX_Fq2DnDhNtmetOlIA3o4CSlBmknMMUP2zlbWVUKVFREaJrjnC1Wf0FKL3zgHgbXm5clAYTRkDkSAHxoprEzQ8TVP-jird6V3Tj5R_Hi0FzJr4ICGDXTctQPKuo73a-2CXIKqk0UqngDuRMmyukMsruhEB3EEmufyZRP2I62wIX357qpFKLrzMYlm68p8Pbroo6CN2bvg4-XDLwo5',
  },
];

const COLOR_PALETTE = [
  { name: 'Arctic White', hex: '#F4F4F4', contrastText: '#131d1c' },
  { name: 'Evening Blue', hex: '#2C3E50', contrastText: '#ffffff' },
  { name: 'Mountain Sage', hex: '#4B5D52', contrastText: '#ffffff' },
  { name: 'Iron Gray', hex: '#3E424B', contrastText: '#ffffff' },
  { name: 'Timberbark', hex: '#7D7063', contrastText: '#ffffff' },
  { name: 'Boothbay Blue', hex: '#688295', contrastText: '#ffffff' },
];

export default function SidingPage() {
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>('hardie-lap');
  const [selectedColor, setSelectedColor] = useState<string>('Evening Blue');

  const activeMaterial =
    SIDING_MATERIALS.find((m) => m.id === selectedMaterialId) || SIDING_MATERIALS[0];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-primary text-on-primary py-space-xl lg:py-24">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin relative z-10">
          <div className="max-w-3xl space-y-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-primary-container text-primary-fixed border border-primary-fixed/20">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
                James Hardie Preferred Contractor &bull; Non-Combustible Core
              </span>
            </div>

            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg tracking-tight font-extrabold text-on-primary">
              Architectural Siding. Dramatic Curb Appeal.
            </h1>

            <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
              Transform your exterior with James Hardie fiber cement and engineered thermal cladding. Non-combustible, impervious to woodpeckers and pests, and baked with ColorPlus finish technology that never peels.
            </p>

            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <Link
                href="/contact"
                className="px-space-lg py-3.5 bg-tertiary-container hover:bg-tertiary text-on-tertiary rounded-xl font-label-lg text-label-lg font-bold shadow-md transition-all flex items-center gap-2"
              >
                <span>Explore Siding Options &amp; Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={SITE_CONFIG.phoneRaw}
                className="px-space-lg py-3.5 bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-primary rounded-xl font-label-lg text-label-lg font-bold transition-all border border-surface-container-lowest/20"
              >
                Call (555) 391-ROOF
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Interactive Material & Color Selector */}
      <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div className="text-center max-w-3xl mx-auto mb-space-xl space-y-2">
          <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider font-bold">
            Interactive Design Studio
          </span>
          <h2 className="font-display-md text-display-md-mobile md:text-display-md text-primary font-bold">
            Explore Profiles, Colors &amp; Performance Specs
          </h2>
          <p className="font-body-md text-body-md text-secondary">
            Select a siding profile and ColorPlus palette to preview durability attributes and thermal barrier ratings.
          </p>
        </div>

        {/* Profile Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-space-lg">
          {SIDING_MATERIALS.map((mat) => {
            const isSelected = selectedMaterialId === mat.id;
            return (
              <button
                key={mat.id}
                type="button"
                onClick={() => setSelectedMaterialId(mat.id)}
                className={`p-space-md rounded-xl text-left transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-primary text-on-primary border-primary shadow-md font-bold'
                    : 'bg-surface-container-low text-primary border-surface-container hover:bg-surface-container'
                }`}
              >
                <Layers className={`w-5 h-5 mb-1 ${isSelected ? 'text-primary-fixed' : 'text-primary'}`} />
                <span className="font-label-lg text-label-lg block">{mat.name}</span>
                <span
                  className={`text-xs block mt-0.5 truncate ${
                    isSelected ? 'text-primary-fixed-dim' : 'text-secondary'
                  }`}
                >
                  {mat.profile.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Siding Card & Preview Showcase */}
        <div className="bg-surface-container-lowest p-space-md md:p-space-lg rounded-xl shadow-lg border border-surface-container-high grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-space-md">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary-container font-bold">
                {activeMaterial.profile}
              </span>
              <h3 className="font-headline-lg text-headline-lg text-primary font-bold mt-1">
                {activeMaterial.name}
              </h3>
              <p className="font-body-md text-body-md text-secondary leading-relaxed mt-2">
                {activeMaterial.description}
              </p>
            </div>

            {/* Performance specs bento */}
            <div className="grid grid-cols-3 gap-space-xs pt-space-xs">
              <div className="p-space-sm bg-surface-container-low rounded-lg text-center">
                <Flame className="w-5 h-5 text-tertiary-container mx-auto mb-1" />
                <span className="font-label-sm text-xs text-secondary block">Fire Rating</span>
                <span className="font-label-sm text-xs font-bold text-primary block mt-0.5">
                  Class A
                </span>
              </div>

              <div className="p-space-sm bg-surface-container-low rounded-lg text-center">
                <Thermometer className="w-5 h-5 text-primary mx-auto mb-1" />
                <span className="font-label-sm text-xs text-secondary block">Thermal Barrier</span>
                <span className="font-label-sm text-xs font-bold text-primary block mt-0.5">
                  {activeMaterial.rValue.split(' ')[0]}
                </span>
              </div>

              <div className="p-space-sm bg-surface-container-low rounded-lg text-center">
                <ShieldCheck className="w-5 h-5 text-surface-tint mx-auto mb-1" />
                <span className="font-label-sm text-xs text-secondary block">Warranty</span>
                <span className="font-label-sm text-xs font-bold text-primary block mt-0.5">
                  30 Years
                </span>
              </div>
            </div>

            {/* Color Swatch Selector */}
            <div className="space-y-space-xs pt-space-xs border-t border-surface-container">
              <div className="flex justify-between items-center">
                <span className="font-label-sm text-label-sm text-primary font-bold flex items-center gap-1.5">
                  <Palette className="w-4 h-4 text-tertiary-container" />
                  Select ColorPlus Palette:
                </span>
                <span className="font-label-sm text-xs font-semibold text-secondary">
                  Current: {selectedColor}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {COLOR_PALETTE.map((col) => (
                  <button
                    key={col.name}
                    type="button"
                    onClick={() => setSelectedColor(col.name)}
                    style={{ backgroundColor: col.hex }}
                    className={`h-9 px-3 rounded-lg flex items-center justify-center font-label-sm text-xs font-semibold shadow-xs cursor-pointer border transition-all ${
                      selectedColor === col.name
                        ? 'ring-2 ring-primary ring-offset-2 scale-105'
                        : 'border-surface-container hover:scale-102'
                    }`}
                  >
                    <span style={{ color: col.contrastText }}>{col.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-space-md py-3 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-bold shadow-md hover:bg-primary-container transition-all"
              >
                <span>Request {activeMaterial.name} Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 relative h-72 sm:h-96 rounded-xl overflow-hidden shadow-md bg-surface-container">
            <Image
              src={activeMaterial.image}
              alt={activeMaterial.name}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-label-sm text-primary font-bold shadow-sm">
              Color Style: {selectedColor}
            </div>
          </div>
        </div>
      </section>

      {/* Siding Durability Benefits */}
      <section className="bg-surface-container-low py-space-xl border-y border-surface-container">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-xs border border-surface-container-high space-y-space-xs">
              <Flame className="w-8 h-8 text-tertiary-container" />
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                100% Non-Combustible
              </h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                James Hardie fiber cement will not ignite when exposed to direct flame or burning brush embers, unlike vinyl which melts and cedar which burns.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-xs border border-surface-container-high space-y-space-xs">
              <Bug className="w-8 h-8 text-primary" />
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                Impervious to Termites &amp; Pests
              </h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                Formulated from Portland cement, sand, and cellulose fibers. Woodpeckers cannot bore into it, and carpenter bees and termites reject it completely.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-xs border border-surface-container-high space-y-space-xs">
              <Sparkle className="w-8 h-8 text-surface-tint" />
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                Baked-On ColorPlus Finish
              </h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                Multiple coats of paint baked in factory kilns cure deep into the fiber cement surface, resisting UV fading, chalking, and paint blistering for 15+ years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Slider */}
      <BeforeAfterSlider initialPreset="siding" showPresets={false} />

      {/* Reviews */}
      <ReviewsSection />

      {/* CTA */}
      <CTASection
        title="Ready to Elevate Your Home's Architectural Facade?"
        subtitle="Schedule a free design consultation. We'll show you physical ColorPlus sample planks against your exterior brick and stone for an exact match."
      />
    </div>
  );
}
