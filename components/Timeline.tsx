'use client'

import TimelineDot from './TimelineDot'
import activities from '@/data/activities.json'

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Our AI-Powered Day
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          Click on each activity to discover the AI tools that can help you work smarter
        </p>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-line" />

          {/* Timeline items */}
          <div className="relative z-10 space-y-4">
            {activities.map((activity, index) => (
              <TimelineDot
                key={activity.id}
                activity={activity}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
