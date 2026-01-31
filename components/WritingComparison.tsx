'use client'

import { useState } from 'react'

interface Comparison {
  gemini: string
  chatgpt: string
  claude: string
}

interface Prompt {
  id: number
  title: string
  prompt: string
  responses: {
    gemini: string
    chatgpt: string
    claude: string
  }
  ratings?: {
    accuracy: Comparison
    clarity: Comparison
    structure: Comparison
    technicalDepth: Comparison
  }
}

interface WritingComparisonProps {
  prompts: Prompt[]
}

export default function WritingComparison({ prompts }: WritingComparisonProps) {
  const [activePrompt, setActivePrompt] = useState(1)
  const [expandedPanels, setExpandedPanels] = useState<Record<string, boolean>>({
    gemini: true,
    chatgpt: true,
    claude: true
  })

  const currentPrompt = prompts.find(p => p.id === activePrompt)

  const togglePanel = (key: string) => {
    setExpandedPanels(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const tools = [
    { key: 'gemini', name: 'Gemini', text: 'text-blue-400' },
    { key: 'chatgpt', name: 'ChatGPT', text: 'text-green-400' },
    { key: 'claude', name: 'Claude', text: 'text-orange-400' }
  ]

  const criteria = [
    { key: 'accuracy', label: 'Accuracy' },
    { key: 'clarity', label: 'Clarity' },
    { key: 'structure', label: 'Structure' },
    { key: 'technicalDepth', label: 'Technical Depth' }
  ]

  return (
    <div className="p-6 border-b border-slate-700">
      <h4 className="text-xl font-bold text-white mb-4">Writing Sample Comparison</h4>

      {/* Prompt tabs */}
      <div className="flex gap-2 mb-6">
        {prompts.map((prompt) => (
          <button
            key={prompt.id}
            onClick={() => setActivePrompt(prompt.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activePrompt === prompt.id
                ? 'bg-blue-500 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {prompt.title}
          </button>
        ))}
      </div>

      {currentPrompt && (
        <>
          {/* Prompt display */}
          <div className="bg-slate-800 rounded-lg p-4 mb-6">
            <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">Prompt</h5>
            <p className="text-white">{currentPrompt.prompt}</p>
          </div>

          {/* Comparison Table */}
          {currentPrompt.ratings && (
            <div className="mb-6 overflow-x-auto">
              <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Comparison</h5>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-2 px-3 text-slate-400 font-medium">Criteria</th>
                    <th className="text-center py-2 px-3 text-blue-400 font-medium">Gemini</th>
                    <th className="text-center py-2 px-3 text-green-400 font-medium">ChatGPT</th>
                    <th className="text-center py-2 px-3 text-orange-400 font-medium">Claude</th>
                  </tr>
                </thead>
                <tbody>
                  {criteria.map((c) => (
                    <tr key={c.key} className="border-b border-slate-700/50">
                      <td className="py-2 px-3 text-slate-300">{c.label}</td>
                      <td className="py-2 px-3 text-center text-slate-300">
                        {currentPrompt.ratings?.[c.key as keyof typeof currentPrompt.ratings]?.gemini || '-'}
                      </td>
                      <td className="py-2 px-3 text-center text-slate-300">
                        {currentPrompt.ratings?.[c.key as keyof typeof currentPrompt.ratings]?.chatgpt || '-'}
                      </td>
                      <td className="py-2 px-3 text-center text-slate-300">
                        {currentPrompt.ratings?.[c.key as keyof typeof currentPrompt.ratings]?.claude || '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Responses - vertical layout, collapsible */}
          <div className="space-y-4">
            {tools.map((tool) => (
              <div
                key={tool.key}
                className="rounded-xl bg-slate-800/50 border border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => togglePanel(tool.key)}
                  className="w-full flex items-center justify-between p-4 hover:bg-slate-700/30 transition-colors"
                >
                  <h5 className={`font-semibold text-lg ${tool.text}`}>
                    {tool.name}
                  </h5>
                  <svg
                    className={`w-5 h-5 text-slate-400 transition-transform ${expandedPanels[tool.key] ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedPanels[tool.key] && (
                  <div className="px-4 pb-4 text-slate-300 text-sm whitespace-pre-wrap leading-relaxed border-t border-slate-700/50">
                    <div className="pt-4">
                      {currentPrompt.responses[tool.key as keyof typeof currentPrompt.responses]}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
