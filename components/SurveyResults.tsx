'use client'

export default function SurveyResults() {
  return (
    <section className="py-20 px-6 bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Our Day Now
        </h2>

        <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400">
          <div className="rounded-xl overflow-hidden bg-white">
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
        </div>
      </div>
    </section>
  )
}
