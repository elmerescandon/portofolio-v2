"use client";

import { useState } from "react";
import { projects, papers, ContributionCategory, Paper } from "@/data/projects";

const tabs: ContributionCategory[] = ["work", "projects", "academia", "others"];
const PAGE_SIZE = 4;

const accentByIndex = [
  { title: "text-accent-red", link: "text-accent-red hover:text-accent-brown" },
  { title: "text-accent-blue", link: "text-accent-blue hover:text-accent-green" },
  { title: "text-accent-orange", link: "text-accent-orange hover:text-accent-yellow" },
];

const typeBadge: Record<Paper["type"], string> = {
  journal: "text-accent-green",
  conference: "text-accent-blue",
  preprint: "text-accent-orange",
  "book-chapter": "text-accent-pink",
};

const typeLabel: Record<Paper["type"], string> = {
  journal: "journal",
  conference: "conference",
  preprint: "preprint",
  "book-chapter": "book chapter",
};

function PaperCard({ paper, index }: { paper: Paper; index: number }) {
  const accent = accentByIndex[index % accentByIndex.length];
  return (
    <a
      href={`https://doi.org/${paper.doi}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-1.5 py-3 md:py-3 lg:py-5 border-b border-foreground/10 last:border-b-0"
    >
      <div className="flex items-start justify-between gap-3">
        <h3
          className={`font-black text-sm md:text-sm lg:text-base xl:text-lg lowercase tracking-[0.02em] leading-snug line-clamp-2 md:line-clamp-3 lg:line-clamp-none ${accent.title} group-hover:opacity-70 transition-opacity`}
        >
          {paper.title}
        </h3>
        {paper.citations > 0 && (
          <span className="font-mono text-[10px] lowercase tracking-wider border border-foreground/20 px-1.5 py-0.5 shrink-0 whitespace-nowrap">
            {paper.citations} cit.
          </span>
        )}
      </div>

      <p className="font-mono text-[10px] lg:text-[11px] text-foreground/50 lowercase tracking-wide leading-relaxed line-clamp-1">
        {paper.authors}
      </p>

      <div className="flex items-center gap-2 flex-nowrap overflow-hidden">
        <span className={`font-mono text-[10px] lowercase tracking-wider shrink-0 ${typeBadge[paper.type]}`}>
          {typeLabel[paper.type]}
        </span>
        <span className="text-foreground/20 text-xs shrink-0">·</span>
        <span className="font-mono text-[10px] text-foreground/40 lowercase tracking-wide truncate">
          {paper.venue}
        </span>
        <span className="text-foreground/20 text-xs shrink-0">·</span>
        <span className="font-mono text-[10px] text-foreground/40 shrink-0">{paper.year}</span>
      </div>
    </a>
  );
}

function Pagination({
  page,
  total,
  onPrev,
  onNext,
}: {
  page: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  if (total <= 1) return null;
  return (
    <div className="flex items-center justify-between pt-3 lg:pt-6 border-t border-foreground/10 shrink-0">
      <button
        onClick={onPrev}
        disabled={page === 0}
        className="font-mono text-xs lowercase tracking-[0.2em] disabled:opacity-20 hover:text-accent-orange transition-colors min-h-[44px] min-w-[44px] flex items-center"
      >
        ← prev
      </button>

      <span className="font-mono text-[10px] text-foreground/40 tracking-widest lowercase">
        {page + 1} / {total}
      </span>

      <button
        onClick={onNext}
        disabled={page === total - 1}
        className="font-mono text-xs lowercase tracking-[0.2em] disabled:opacity-20 hover:text-accent-orange transition-colors min-h-[44px] min-w-[44px] flex items-center justify-end"
      >
        next →
      </button>
    </div>
  );
}

export default function ContributionsSection() {
  const [activeTab, setActiveTab] = useState<ContributionCategory>("work");
  const [page, setPage] = useState(0);

  const isAcademia = activeTab === "academia";
  const allItems = isAcademia
    ? papers.filter((p) => p.category === "academia")
    : projects.filter((p) => p.category === activeTab);

  const totalPages = Math.ceil(allItems.length / PAGE_SIZE);
  const pageItems = allItems.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  const pageProjects = isAcademia ? [] : (pageItems as import("@/data/projects").Project[]);

  function switchTab(tab: ContributionCategory) {
    setActiveTab(tab);
    setPage(0);
  }

  return (
    <section className="h-full bg-background flex flex-col px-6 md:px-12 pt-16 md:pt-20 pb-16">
      {/* Header */}
      <div className="mb-2 md:mb-3 lg:mb-6 shrink-0">
        <h2 className="font-black text-[clamp(1.75rem,5vw,5rem)] leading-[0.9] lowercase tracking-[0.05em]">
          contributions
        </h2>
        <p className="font-mono text-xs lg:text-sm tracking-[0.2em] lowercase mt-1 lg:mt-2 text-foreground/50">
          what i&apos;ve been building
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-foreground/20 mb-3 md:mb-4 lg:mb-8 shrink-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => switchTab(tab)}
            className={`font-mono text-xs lowercase tracking-[0.2em] px-2 md:px-4 lg:px-5 py-2 border-b-2 -mb-px transition-colors min-h-[44px] ${
              activeTab === tab
                ? "border-foreground text-foreground"
                : "border-transparent text-foreground/40 hover:text-foreground/70"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-0 flex-1 min-h-0 overflow-hidden">
        {allItems.length === 0 && (
          <p className="font-mono text-sm lowercase tracking-[0.2em] text-foreground/30 py-6">
            nothing here yet
          </p>
        )}

        {/* Academia papers */}
        {isAcademia &&
          (pageItems as Paper[]).map((paper, index) => (
            <PaperCard
              key={paper.slug}
              paper={paper}
              index={page * PAGE_SIZE + index}
            />
          ))}

        {/* Work / Projects / Others */}
        {!isAcademia &&
          pageProjects.map((project, index) => {
            const globalIndex = page * PAGE_SIZE + index;
            const accent = accentByIndex[globalIndex % accentByIndex.length];
            return (
              <a
                key={project.slug}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-8 lg:gap-12 py-4 md:py-5 lg:py-6 border-b border-foreground/10 last:border-b-0"
              >
                <div className="flex-1">
                  <h3
                    className={`font-black text-xl md:text-xl lg:text-2xl lowercase tracking-[0.03em] leading-[0.95] ${accent.title} group-hover:opacity-70 transition-opacity`}
                  >
                    {project.title}
                  </h3>
                  <p className="mt-1.5 lg:mt-2 text-sm leading-relaxed font-light line-clamp-2 lg:line-clamp-none">
                    {project.description}
                  </p>
                  <div className="mt-2 lg:mt-3 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] lowercase tracking-wider border border-foreground/20 px-1.5 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p
                  className={`font-mono text-xs lowercase tracking-[0.2em] shrink-0 md:pt-1 ${accent.link} transition-colors`}
                >
                  view &rarr;
                </p>
              </a>
            );
          })}
      </div>

      {/* Pagination */}
      <Pagination
        page={page}
        total={totalPages}
        onPrev={() => setPage((p) => Math.max(0, p - 1))}
        onNext={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
      />
    </section>
  );
}
