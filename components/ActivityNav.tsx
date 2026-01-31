'use client'

import Link from 'next/link'
import activities from '@/data/activities.json'

interface ActivityNavProps {
  currentId: number
}

export default function ActivityNav({ currentId }: ActivityNavProps) {
  return (
    <nav className="bg-slate-800/50 border-b border-slate-700 overflow-x-auto">
      <div className="max-w-5xl mx-auto px-6 py-3">
        <div className="flex items-center gap-2 min-w-max">
          {activities.map((activity, index) => {
            const isCurrent = activity.id === currentId
            return (
              <div key={activity.id} className="flex items-center">
                <Link
                  href={`/activity/${activity.id}`}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    isCurrent
                      ? 'bg-blue-500/20 border border-blue-500/50'
                      : 'hover:bg-slate-700/50'
                  }`}
                >
                  <span className={`text-xs font-medium whitespace-nowrap ${
                    isCurrent ? 'text-blue-400' : 'text-slate-500'
                  }`}>
                    {activity.time}
                  </span>
                  <span className={`text-sm whitespace-nowrap ${
                    isCurrent ? 'text-white font-medium' : 'text-slate-400'
                  }`}>
                    {activity.title}
                  </span>
                </Link>
                {index < activities.length - 1 && (
                  <div className="w-4 h-px bg-slate-600 mx-1" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
