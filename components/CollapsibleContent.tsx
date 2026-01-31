'use client'

import { useState } from 'react'

interface Section {
  heading: string
  intro: string
  bullets: string[]
  note: string
}

interface ExcelAdvantages {
  title: string
  intro: string
  bullets: string[]
  conclusion: string
}

interface DetailedContent {
  title: string
  sections: Section[]
  excelAdvantages?: ExcelAdvantages
  layout?: 'default' | 'side-by-side'
}

interface CollapsibleContentProps {
  content: DetailedContent
}

export default function CollapsibleContent({ content }: CollapsibleContentProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const isSideBySide = content.layout === 'side-by-side' || content.sections.length === 6

  return (
    <div className="p-6 border-b border-slate-700">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left group"
      >
        <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {content.title}
        </h4>
        <svg
          className={`w-6 h-6 text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="mt-6">
          {isSideBySide ? (
            <>
              {/* Side by side layout: Left column (1-3) vs Right column (4-6) */}
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                {/* Left column - Power BI strengths (blue) */}
                <div className="space-y-4">
                  {content.sections.slice(0, 3).map((section, idx) => (
                    <div key={idx} className="bg-slate-700/30 rounded-lg p-4">
                      <h5 className="text-blue-400 font-semibold mb-2">{section.heading}</h5>
                      <p className="text-slate-400 text-sm mb-2">{section.intro}</p>
                      <ul className="space-y-1 mb-2">
                        {section.bullets.map((bullet, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-green-400 mt-0.5">+</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <p className="text-slate-500 text-xs italic">{section.note}</p>
                    </div>
                  ))}
                </div>

                {/* Right column - Lucanet strengths (purple) */}
                <div className="space-y-4">
                  {content.sections.slice(3, 6).map((section, idx) => (
                    <div key={idx} className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-4">
                      <h5 className="text-purple-400 font-semibold mb-2">{section.heading}</h5>
                      <p className="text-slate-400 text-sm mb-2">{section.intro}</p>
                      <ul className="space-y-1 mb-2">
                        {section.bullets.map((bullet, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-purple-400 mt-0.5">+</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <p className="text-slate-500 text-xs italic">{section.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full width best practice */}
              {content.excelAdvantages && (
                <div className="bg-emerald-900/20 border border-emerald-700/30 rounded-lg p-4">
                  <h5 className="text-emerald-400 font-semibold mb-2">{content.excelAdvantages.title}</h5>
                  <p className="text-slate-400 text-sm mb-3">{content.excelAdvantages.intro}</p>
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    {content.excelAdvantages.bullets.map((bullet, i) => (
                      <div key={i} className="px-3 py-2 bg-emerald-900/30 text-emerald-300 text-sm rounded">
                        {bullet}
                      </div>
                    ))}
                  </div>
                  <p className="text-emerald-200 text-sm font-medium text-center mt-4">{content.excelAdvantages.conclusion}</p>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Default layout: 2-column grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {content.sections.slice(0, 6).map((section, idx) => (
                  <div key={idx} className="bg-slate-700/30 rounded-lg p-4">
                    <h5 className="text-blue-400 font-semibold mb-2">{section.heading}</h5>
                    <p className="text-slate-400 text-sm mb-2">{section.intro}</p>
                    <ul className="space-y-1 mb-2">
                      {section.bullets.map((bullet, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-green-400 mt-0.5">+</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <p className="text-slate-500 text-xs italic">{section.note}</p>
                  </div>
                ))}
              </div>

              {/* Section 7 and Excel advantages side by side */}
              {content.sections.length > 6 && (
                <div className="grid md:grid-cols-2 gap-4">
                  {content.sections.slice(6, 7).map((section, idx) => (
                    <div key={idx} className="bg-slate-700/30 rounded-lg p-4">
                      <h5 className="text-blue-400 font-semibold mb-2">{section.heading}</h5>
                      <p className="text-slate-400 text-sm mb-2">{section.intro}</p>
                      <ul className="space-y-1 mb-2">
                        {section.bullets.map((bullet, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-green-400 mt-0.5">+</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <p className="text-slate-500 text-xs italic">{section.note}</p>
                    </div>
                  ))}

                  {content.excelAdvantages && (
                    <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4">
                      <h5 className="text-amber-400 font-semibold mb-2">{content.excelAdvantages.title}</h5>
                      <p className="text-slate-400 text-sm mb-2">{content.excelAdvantages.intro}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {content.excelAdvantages.bullets.map((bullet, i) => (
                          <span key={i} className="px-2 py-1 bg-amber-900/30 text-amber-300 text-xs rounded">
                            {bullet}
                          </span>
                        ))}
                      </div>
                      <p className="text-amber-200 text-sm font-medium">{content.excelAdvantages.conclusion}</p>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}
