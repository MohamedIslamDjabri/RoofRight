'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS, ProjectCardItem } from '@/constants/data';
import { Clock, ArrowRight, X, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FilterOption {
  key: string;
  label: string;
  count: number;
}

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<ProjectCardItem | null>(null);

  const filters: FilterOption[] = [
    { key: 'all', label: 'All Projects', count: PROJECTS.length },
    {
      key: 'roofing',
      label: 'Roofing',
      count: PROJECTS.filter((p) => p.category.includes('roofing')).length,
    },
    {
      key: 'repair',
      label: 'Roof Repair',
      count: PROJECTS.filter((p) => p.category.includes('repair')).length,
    },
    {
      key: 'replacement',
      label: 'Roof Replacement',
      count: PROJECTS.filter((p) => p.category.includes('replacement')).length,
    },
    {
      key: 'gutters',
      label: 'Gutters',
      count: PROJECTS.filter((p) => p.category.includes('gutters')).length,
    },
    {
      key: 'siding',
      label: 'Siding',
      count: PROJECTS.filter((p) => p.category.includes('siding')).length,
    },
    {
      key: 'full-exterior',
      label: 'Full Exterior',
      count: PROJECTS.filter((p) => p.category.includes('full-exterior')).length,
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(activeCategory));

  return (
    <div className="w-full">
      {/* Filter Ribbon */}
      <div className="flex items-center gap-space-xs overflow-x-auto pb-2 no-scrollbar mb-space-lg">
        {filters.map((filter) => {
          const isActive = activeCategory === filter.key;
          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveCategory(filter.key)}
              className={`flex items-center gap-space-xs px-space-md py-space-xs rounded-xl font-label-md text-label-md transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-primary-container text-on-primary shadow-sm font-bold'
                  : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
              }`}
            >
              <span>{filter.label}</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-label-sm text-[11px] font-bold ${
                  isActive
                    ? 'bg-tertiary-container text-on-tertiary'
                    : 'bg-surface-container-high text-on-surface'
                }`}
              >
                {filter.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-surface-container-high"
          >
            <div className="relative overflow-hidden aspect-[16/11] bg-surface-container">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                <span className="bg-primary/90 text-on-primary px-2.5 py-1 rounded font-label-sm text-label-sm backdrop-blur-sm font-bold">
                  {project.categoryLabel}
                </span>
                <span className="bg-tertiary-container/90 text-on-tertiary px-2 py-1 rounded font-label-sm text-label-sm font-semibold">
                  {project.location}
                </span>
              </div>
              <div className="absolute bottom-3 right-3 bg-surface/90 text-on-surface px-2.5 py-1 rounded font-label-sm text-label-sm shadow-sm backdrop-blur-sm flex items-center gap-1 z-10 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>{project.buildDuration}</span>
              </div>
            </div>

            <div className="p-space-md space-y-space-sm flex-1 flex flex-col justify-between">
              <div className="space-y-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors font-bold">
                  {project.title}
                </h3>
                <p className="font-body-sm text-body-sm text-secondary line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="space-y-space-xs pt-space-xs">
                {project.roofSpec && (
                  <div className="p-space-xs rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm flex items-center justify-between">
                    <span className="text-secondary font-normal">Roof Spec:</span>
                    <span className="font-semibold text-primary truncate max-w-[180px]">
                      {project.roofSpec}
                    </span>
                  </div>
                )}
                {project.sidingSystem && (
                  <div className="p-space-xs rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm flex items-center justify-between">
                    <span className="text-secondary font-normal">Siding System:</span>
                    <span className="font-semibold text-primary truncate max-w-[180px]">
                      {project.sidingSystem}
                    </span>
                  </div>
                )}
                {project.gutterSpec && (
                  <div className="p-space-xs rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm flex items-center justify-between">
                    <span className="text-secondary font-normal">Gutter Spec:</span>
                    <span className="font-semibold text-primary truncate max-w-[180px]">
                      {project.gutterSpec}
                    </span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full mt-space-sm py-2.5 px-space-sm rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md transition-colors flex items-center justify-center gap-1 cursor-pointer font-semibold"
                >
                  <span>View Project Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Project Specs Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-primary-container/60 backdrop-blur-sm flex items-center justify-center p-margin-mobile">
          <div className="bg-surface-container-lowest rounded-2xl max-w-xl w-full p-space-lg shadow-2xl relative space-y-space-md border border-surface-container-high animate-fadeIn">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-highest transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-space-xs pr-8">
              <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-wider font-bold">
                {selectedProject.location} &bull; {selectedProject.categoryLabel}
              </span>
              <h3 className="font-headline-md text-headline-md text-primary font-bold">
                {selectedProject.title}
              </h3>
            </div>

            <div className="relative w-full h-56 rounded-xl overflow-hidden bg-surface-container">
              <Image
                src={selectedProject.image}
                alt={selectedProject.imageAlt}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              {selectedProject.modalDetails || selectedProject.description}
            </p>

            <div className="p-space-md bg-surface-container-low rounded-xl space-y-space-xs font-label-sm text-label-sm text-on-surface-variant border border-surface-container">
              <div className="flex justify-between items-center">
                <span className="text-secondary">Warranty Coverage:</span>
                <span className="font-bold text-primary flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  {selectedProject.warranty}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-secondary">Installation Window:</span>
                <span className="font-bold text-primary">{selectedProject.buildDuration}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-secondary">Permitting &amp; Inspection:</span>
                <span className="font-bold text-primary flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-surface-tint" />
                  Municipal Passed &amp; Drone Thermally Verified
                </span>
              </div>
            </div>

            <div className="pt-space-xs flex justify-end gap-space-xs">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-space-md py-space-sm rounded-lg bg-surface-container text-on-surface font-label-md text-label-md cursor-pointer hover:bg-surface-container-high transition-colors"
              >
                Close
              </button>
              <Link
                href="/contact"
                className="px-space-md py-space-sm rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors font-bold"
              >
                Request Similar Scope
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
