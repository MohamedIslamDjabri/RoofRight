'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { BEFORE_AFTER_PRESETS } from '@/constants/data';
import { MoveHorizontal } from 'lucide-react';

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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
          <div>
            <span className="font-label-sm text-label-sm text-on-tertiary-container uppercase tracking-wider font-bold">
              Verified Transformations
            </span>
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-primary font-bold mt-1">
              See the Difference Precision Craft Makes
            </h2>
          </div>

          {/* Mode Selectors */}
          {showPresets && (
            <div className="flex items-center gap-1.5 mt-4 md:mt-0 p-1 bg-surface-container-high rounded-lg">
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
                    className={`px-3 py-1.5 rounded-md font-label-md text-label-md transition-all cursor-pointer ${
                      isActive
                        ? 'bg-surface text-primary shadow-sm font-bold'
                        : 'text-secondary hover:text-primary'
                    }`}
                  >
                    {preset.name}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Comparison Component */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onTouchMove={handleTouchMove}
          className="relative w-full h-[380px] sm:h-[480px] md:h-[560px] rounded-xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-surface-container-high"
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
            <div className="absolute top-4 right-4 bg-primary/85 backdrop-blur-md text-on-primary font-label-sm text-label-sm uppercase px-3 py-1.5 rounded-lg shadow-sm font-bold z-10">
              After RoofRight Install
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

          {/* Draggable Divider Line & Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-surface-container-lowest cursor-ew-resize flex items-center justify-center pointer-events-none z-20 shadow-2xl"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-10 h-10 rounded-full bg-surface-container-lowest text-primary shadow-xl flex items-center justify-center font-bold text-sm -ml-5 border border-primary/20 pointer-events-auto">
              <MoveHorizontal className="w-5 h-5 text-primary" />
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
        </div>

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
