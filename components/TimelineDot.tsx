'use client'

import Link from 'next/link'

interface Tool {
  name: string
  description: string
  url: string
}

interface Activity {
  id: number
  time: string
  title: string
  description: string
  why: string
  howAiHelps: string
  tools: Tool[]
  videoId: string
}

interface TimelineDotProps {
  activity: Activity
  isLeft: boolean
}

export default function TimelineDot({ activity, isLeft }: TimelineDotProps) {
  return (
    <div className="relative flex items-center">
      {/* Left content area */}
      <div className={`flex-1 pb-20 pr-8 ${isLeft ? '' : 'invisible'}`}>
        {isLeft && (
          <div className="text-right">
            <div className="flex items-center justify-end gap-3 mb-2">
              <Link
                href={`/activity/${activity.id}`}
                className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
              >
                {activity.title}
              </Link>
              <span className="px-3 py-1 bg-slate-700 text-slate-300 text-sm font-medium rounded-full">
                {activity.time}
              </span>
            </div>
            <p className="text-slate-400">{activity.description}</p>
            <ul className="mt-2 space-y-1">
              {activity.tools.map((tool) => (
                <li key={tool.name} className="text-sm text-blue-400">
                  {tool.name} •
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Center: Dot only */}
      <div className="relative z-10 flex-shrink-0">
        <Link
          href={`/activity/${activity.id}`}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all bg-slate-800 border-4 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white hover:scale-110 dot-pulse"
        >
          <span className="text-xs font-bold">{activity.id}</span>
        </Link>
      </div>

      {/* Right content area */}
      <div className={`flex-1 pb-20 pl-8 ${isLeft ? 'invisible' : ''}`}>
        {!isLeft && (
          <div className="text-left">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-slate-700 text-slate-300 text-sm font-medium rounded-full">
                {activity.time}
              </span>
              <Link
                href={`/activity/${activity.id}`}
                className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
              >
                {activity.title}
              </Link>
            </div>
            <p className="text-slate-400">{activity.description}</p>
            <ul className="mt-2 space-y-1">
              {activity.tools.map((tool) => (
                <li key={tool.name} className="text-sm text-blue-400">
                  • {tool.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
