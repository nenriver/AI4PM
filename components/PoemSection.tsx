'use client'

import { getAssetPath } from '@/lib/utils'

export default function PoemSection() {
  return (
    <section className="py-16 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            The AI PM's Anthem
          </h2>
          <p className="text-slate-400">A poetic journey through a day with AI tools</p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-8">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <img
              src={getAssetPath('/Poem image.png')}
              alt="AI PM illustration"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Right side - Full poem */}
          <div className="flex-1 text-slate-300 text-sm leading-relaxed space-y-4 flex flex-col justify-center">
            <p className="italic text-slate-400 text-base">A Day in the Life</p>

            <p>
              The morning breaks, Copilot drafts with poise,<br />
              While Glean finds knowledge through the noise,<br />
              Otter captures every word with ease,<br />
              And ChatGPT, Claude, Gemini help ideas seize.
            </p>

            <p>
              Gamma builds decks, Canva makes them shine,<br />
              Power BI turns data into storyline,<br />
              HeyGen and Loom bring demos to life,<br />
              Zapier automates away the strife.
            </p>

            <p>
              From roadmap dreams to shipped release,<br />
              These AI partners never cease,<br />
              They handle tasks both big and small,<br />
              So PMs can focus on what matters most of all.
            </p>

            <p className="pt-3 border-t border-slate-700">
              So here's to PMs, bold and bright,<br />
              With AI tools from dawn to night,<br />
              Not replacing what we do,<br />
              But amplifying me and you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
