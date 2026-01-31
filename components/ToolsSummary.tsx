'use client'

import { useState } from 'react'
import toolsSummary from '@/data/tools-summary.json'

export default function ToolsSummary() {
  const [expandedTool, setExpandedTool] = useState<string | null>(null)

  // Flatten all tools into a single list
  const allTools = toolsSummary.flatMap(category =>
    category.tools.map(tool => ({ ...tool, category: category.category }))
  )

  return (
    <section className="py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Tools Overview
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Click on any tool to see pros and cons
        </p>

        {/* Grid of tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {allTools.map((tool) => (
            <button
              key={tool.name}
              onClick={() => setExpandedTool(expandedTool === tool.name ? null : tool.name)}
              className={`bg-slate-900 rounded-lg p-3 text-left hover:bg-slate-800 transition-colors h-24 flex flex-col ${
                expandedTool === tool.name ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className={`w-8 h-8 mb-2 rounded flex items-center justify-center text-white font-bold text-sm ${
                tool.name.startsWith('M') ? 'bg-gradient-to-br from-blue-500 to-blue-700' :
                tool.name.startsWith('G') ? 'bg-gradient-to-br from-emerald-500 to-emerald-700' :
                tool.name.startsWith('O') ? 'bg-gradient-to-br from-purple-500 to-purple-700' :
                tool.name.startsWith('F') ? 'bg-gradient-to-br from-orange-500 to-orange-700' :
                tool.name.startsWith('C') ? 'bg-gradient-to-br from-amber-500 to-amber-700' :
                tool.name.startsWith('N') ? 'bg-gradient-to-br from-slate-600 to-slate-800' :
                tool.name.startsWith('P') ? 'bg-gradient-to-br from-yellow-500 to-yellow-700' :
                tool.name.startsWith('T') ? 'bg-gradient-to-br from-indigo-500 to-indigo-700' :
                tool.name.startsWith('H') ? 'bg-gradient-to-br from-cyan-500 to-cyan-700' :
                tool.name.startsWith('L') ? 'bg-gradient-to-br from-violet-500 to-violet-700' :
                tool.name.startsWith('Z') ? 'bg-gradient-to-br from-rose-500 to-rose-700' :
                'bg-gradient-to-br from-blue-500 to-purple-600'
              }`}>
                {tool.name.charAt(0)}
              </div>
              <h4 className="text-xs font-medium text-white leading-tight">{tool.name}</h4>
            </button>
          ))}
        </div>

        {/* Expanded Panel - Shows below grid when a tool is selected */}
        {expandedTool && (
          <div className="mt-6 bg-slate-900 rounded-xl p-6 border border-slate-700">
            {(() => {
              const tool = allTools.find(t => t.name === expandedTool)
              if (!tool) return null
              return (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                    <button
                      onClick={() => setExpandedTool(null)}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Best For */}
                  <p className="text-blue-400 text-sm mb-6">
                    {tool.fit}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Pros */}
                    <div>
                      <h5 className="text-sm font-semibold text-green-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Pros
                      </h5>
                      <ul className="space-y-2">
                        {tool.pros.map((pro, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-green-400 mt-0.5">+</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div>
                      <h5 className="text-sm font-semibold text-red-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Cons
                      </h5>
                      <ul className="space-y-2">
                        {tool.cons.map((con, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-red-400 mt-0.5">-</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )
            })()}
          </div>
        )}
      </div>
    </section>
  )
}
