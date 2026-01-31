'use client'

import Link from 'next/link'
import activities from '@/data/activities.json'

interface ActivityNavProps {
  currentId: number
}

export default function ActivityNav({ currentId }: ActivityNavProps) {
  return (
    <div className="flex justify-center py-4 overflow-x-auto">
      <div className="flex items-center">
        {activities.map((activity, index) => {
          const isCurrent = activity.id === currentId
          return (
            <div key={activity.id} className="flex items-center">
              {index > 0 && (
                <div className="w-8 border-t-2 border-dashed border-slate-600" />
              )}
              <Link
                href={`/activity/${activity.id}`}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  isCurrent
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {activity.time}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
