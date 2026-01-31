'use client'

export default function SurveyResults() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full mb-4">
            Live Poll
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Your Life Today
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            See how other Product Managers are using AI tools in their daily workflow
          </p>
        </div>

        {/* Survey embed with styled container */}
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-blue-500/5">
          <div style={{ position: 'relative', paddingBottom: '56.25%', paddingTop: '35px', height: 0, overflow: 'hidden' }}>
            <iframe
              sandbox="allow-scripts allow-same-origin allow-presentation"
              allowFullScreen={true}
              frameBorder="0"
              height="315"
              src="https://www.mentimeter.com/app/presentation/alss27mr1c9j4a78vcp48w1h267y1si4/embed"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              width="420"
            />
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-slate-500 text-sm mt-6">
          Results update in real-time as responses come in
        </p>
      </div>
    </section>
  )
}
