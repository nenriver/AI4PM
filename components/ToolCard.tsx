interface Tool {
  name: string
  description: string
  url: string
}

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-slate-700 rounded-lg border border-slate-600 hover:border-blue-400 hover:bg-slate-600 transition-all group"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {tool.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
            {tool.name}
            <svg
              className="inline-block w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </h4>
          <p className="text-sm text-slate-300 mt-1">{tool.description}</p>
        </div>
      </div>
    </a>
  )
}
