'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { BEFORE_AFTER_PRESETS } from '@/constants/data';
import { MoveHorizontal, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  initialPreset?: string;
  showPresets?: boolean;
}

export default function BeforeAfterSlider({
  initialPreset = 'full',
  showPresets = true,
}: BeforeAfterSliderProps) {
  const [activePresetId, setActivePresetId] = useState(initialPreset);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activePreset =
    BEFORE_AFTER_PRESETS.find((p) => p.id === activePresetId) || BEFORE_AFTER_PRESETS[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(clampedPct);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    },
    [handleMove]
  );

  const handleMouseDown = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging, handleMove]);

  return (
    <section className="w-full py-space-xl lg:py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg"
        >
          <div>
            <span className="font-label-sm text-label-sm text-on-tertiary-container uppercase tracking-wider font-bold">
              Verified Transformations
            </span>
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-primary font-bold mt-1">
              See the Difference Precision Craft Makes
            </h2>
          </div>

          {/* Mode Selectors with Animated Active Pill */}
          {showPresets && (
            <div className="flex items-center gap-1 mt-4 md:mt-0 p-1 bg-surface-container-high rounded-xl relative">
              {BEFORE_AFTER_PRESETS.map((preset) => {
                const isActive = activePresetId === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => {
                      setActivePresetId(preset.id);
                      setSliderPos(50);
                    }}
                    className={`relative px-3.5 py-1.5 rounded-lg font-label-md text-label-md transition-colors cursor-pointer select-none ${
                      isActive ? 'text-primary font-bold' : 'text-secondary hover:text-primary'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePresetPill"
                        className="absolute inset-0 bg-surface rounded-lg shadow-sm border border-surface-container"
                        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{preset.name}</span>
                  </button>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* Comparison Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onTouchMove={handleTouchMove}
          className="relative w-full h-[380px] sm:h-[480px] md:h-[560px] rounded-2xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-surface-container-high group"
          id="ba-container"
        >
          {/* AFTER IMAGE (Underneath, Full Width) */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={activePreset.afterImg}
              alt={activePreset.afterAlt}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
            <div className="absolute top-4 right-4 bg-primary/85 backdrop-blur-md text-on-primary font-label-sm text-label-sm uppercase px-3 py-1.5 rounded-lg shadow-sm font-bold z-10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-on-tertiary-container" />
              <span>After RoofRight Install</span>
            </div>
          </div>

          {/* BEFORE IMAGE (Clipped with CSS clipPath) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <Image
              src={activePreset.beforeImg}
              alt={activePreset.beforeAlt}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
            <div className="absolute top-4 left-4 bg-inverse-surface/85 backdrop-blur-md text-inverse-on-surface font-label-sm text-label-sm uppercase px-3 py-1.5 rounded-lg shadow-sm font-bold z-10">
              Before Renovation
            </div>
          </div>

          {/* Draggable Divider Line & Pulsing Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="relative">
              {/* Subtle pulsing indicator ring */}
              <div className="absolute -inset-2 rounded-full bg-white/40 animate-ping pointer-events-none" />
              <div className="w-11 h-11 rounded-full bg-white text-primary shadow-2xl flex items-center justify-center font-bold text-sm border-2 border-primary/20 pointer-events-auto transition-transform group-hover:scale-110 active:scale-95">
                <MoveHorizontal className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>

          {/* Hidden Accessible Native Range for Screen Readers & Keyboard Access */}
          <input
            type="range"
            min="0"
            max="100"
            value={Math.round(sliderPos)}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            aria-label="Before and after comparison slider"
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />
        </motion.div>

        {/* Info footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-space-sm text-secondary font-label-sm text-label-sm gap-2">
          <span>&larr; Drag slider or click anywhere to inspect craftsmanship &rarr;</span>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-primary">{activePreset.title}</span>
            <span>&bull;</span>
            <span>{activePreset.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
