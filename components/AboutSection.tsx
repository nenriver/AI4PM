'use client'

import { useState } from 'react'

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-20 px-6 bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              About AI4PM
            </h2>
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
            <div className="px-6 pb-6 space-y-6 text-slate-300 leading-relaxed">
              <p>
                This website was created to showcase a curated set of AI applications that can be practically useful in a Product Manager's day-to-day work—from research and synthesis to planning, communication, and execution.
              </p>
              <p>
                Rather than attempting to catalog every available tool, the selection reflects focused exploration and comparative research across multiple large language models (LLMs). The goal is to highlight tools that are usable today, not to produce an exhaustive market survey.
              </p>

              <h3 className="text-lg font-semibold text-white pt-4">Scope & Methodology</h3>
              <ul className="space-y-3">
                <li>
                  <span className="text-blue-400 font-medium">The tools featured here represent a point-in-time snapshot as of January 2026.</span>
                  <br />
                  <span className="text-slate-400 text-sm">The AI landscape evolves rapidly, and capabilities, pricing, and product direction may change.</span>
                </li>
                <li>
                  <span className="text-blue-400 font-medium">Coverage is intentionally selective.</span>
                  <br />
                  <span className="text-slate-400 text-sm">While not all tools were evaluated, those included were chosen based on cross-model research, hands-on experimentation, and relevance to real PM workflows.</span>
                </li>
                <li>
                  <span className="text-blue-400 font-medium">Recommendations should be viewed as directional guidance, not definitive rankings.</span>
                  <br />
                  <span className="text-slate-400 text-sm">Time invested in each tool varied, and different teams or contexts may reach different conclusions.</span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white pt-4">A Note on AI Adoption</h3>
              <p>
                AI-driven automation will continue to accelerate. The real advantage will not come from chasing every new tool, but from developing the habit of learning, adapting, and integrating AI thoughtfully into daily work.
              </p>
              <p className="text-slate-400">Use this site as:</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span>
                  <span>A starting point</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span>
                  <span>A lens for evaluation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span>
                  <span>A prompt to experiment</span>
                </li>
              </ul>
              <p className="text-slate-500 italic">—not as a final authority.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
