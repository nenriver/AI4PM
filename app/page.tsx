import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import ToolsSummary from '@/components/ToolsSummary'
import PoemSection from '@/components/PoemSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <Timeline />
      <ToolsSummary />
      <PoemSection />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-white font-semibold text-lg mb-2">AI4PM</h3>
          <p className="text-sm">
            Empowering Product Managers with AI tools for every part of the day
          </p>
          <p className="text-xs mt-4 text-slate-500">
            Built for the B2B Product Management team
          </p>
        </div>
      </footer>
    </main>
  )
}
