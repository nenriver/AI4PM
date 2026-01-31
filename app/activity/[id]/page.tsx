import Link from 'next/link'
import activities from '@/data/activities.json'
import CollapsibleContent from '@/components/CollapsibleContent'
import ImageModal from '@/components/ImageModal'
import WritingComparison from '@/components/WritingComparison'

interface PageProps {
  params: { id: string }
}

export function generateStaticParams() {
  return activities.map((activity) => ({
    id: activity.id.toString(),
  }))
}

export default function ActivityPage({ params }: PageProps) {
  const activity = activities.find((a) => a.id.toString() === params.id)

  if (!activity) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Activity not found</h1>
          <Link href="/" className="text-blue-400 hover:underline">
            Back to timeline
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link
            href="/#timeline"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Timeline
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Time and Title */}
        <div className="mb-12">
          <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full mb-4">
            {activity.time}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {activity.title}
          </h1>
          <p className="text-xl text-slate-400">
            {activity.description}
          </p>
        </div>

        {/* Why it matters & How AI helps - side by side */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <section className="bg-slate-800/50 rounded-xl p-6">
            <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-3">
              Why it matters
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              {activity.why}
            </p>
          </section>

          <section className="bg-slate-800/50 rounded-xl p-6">
            <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-3">
              How AI helps
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              {activity.howAiHelps}
            </p>
          </section>
        </div>

        {/* Tools with Videos */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">
            Recommended Tools
          </h2>

          <div className="space-y-12">
            {activity.tools.map((tool) => (
              <div key={tool.name} className="bg-slate-800 rounded-xl overflow-hidden">
                {/* Tool Header */}
                <div className="p-6 border-b border-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {tool.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-bold text-white">
                          {tool.name}
                        </h3>
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          Visit Website
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        {tool.exampleUrl && (
                          <a
                            href={tool.exampleUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-orange-400 hover:text-orange-300 transition-colors"
                          >
                            See Example
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </a>
                        )}
                      </div>
                      <p className="text-slate-400 mt-1">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Detailed Content (e.g., Power BI comparison) */}
                {tool.detailedContent && (
                  <CollapsibleContent content={tool.detailedContent} />
                )}

                {/* Video Embeds */}
                {(tool.embedUrl || tool.videoId || tool.screenshotUrl) && (
                  <div className={`${(tool.embedUrl && tool.videoId) || (tool.screenshotUrl && tool.videoId) ? 'grid md:grid-cols-2 gap-4 p-4' : 'p-4'}`}>
                    {/* YouTube Tutorial */}
                    {tool.videoId && (
                      <div>
                        {(tool.embedUrl || tool.screenshotUrl) && (
                          <p className="text-sm text-slate-400 mb-2 font-medium">YouTube Tutorial</p>
                        )}
                        <div className="aspect-video">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${tool.videoId}`}
                            title={`${tool.name} Tutorial`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    )}
                    {/* Screenshot */}
                    {tool.screenshotUrl && (
                      <div>
                        <p className="text-sm text-slate-400 mb-2 font-medium">Screenshot</p>
                        <ImageModal src={tool.screenshotUrl} alt={`${tool.name} Screenshot`} />
                      </div>
                    )}
                    {/* Custom Embed (e.g., HeyGen demo, Loom illustration) */}
                    {tool.embedUrl && (
                      <div>
                        {tool.videoId && (
                          <p className="text-sm text-slate-400 mb-2 font-medium">
                            {tool.name === 'Loom' ? 'Loom illustration by Jin' : tool.name === 'Gamma' ? 'Gamma illustration by Jin' : tool.name === 'Canva Business' ? 'Canva illustration by Jin' : tool.name === 'Zapier' ? 'Zapier Simple Flow Creation by Jin' : 'Video Created with HeyGen by Jin'}
                          </p>
                        )}
                        <div className="aspect-video">
                          <iframe
                            width="100%"
                            height="100%"
                            src={tool.embedUrl}
                            title={`${tool.name} Demo`}
                            frameBorder="0"
                            allow="encrypted-media; fullscreen"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Justifications */}
                {tool.justifications && (
                  <div className="p-6 border-t border-slate-700">
                    <h4 className="text-lg font-semibold text-white mb-4">{tool.justifications.title}</h4>
                    <ul className="space-y-3 mb-4">
                      {tool.justifications.items.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-300">
                          <span className="text-blue-400 font-bold">{idx + 1}.</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {tool.justifications.imageUrl && (
                      <ImageModal src={tool.justifications.imageUrl} alt={`${tool.name} Comparison`} />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Writing Comparison */}
        {activity.writingComparison && (
          <section className="mt-12">
            <div className="bg-slate-800 rounded-xl overflow-hidden">
              <WritingComparison prompts={activity.writingComparison.prompts} />
            </div>
          </section>
        )}

        {/* Why These Tools Summary */}
        <section className="mt-16 p-8 bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4">Summary</h3>
          <p className="text-slate-300 leading-relaxed mb-6">
            {activity.recommendation ? (
              <>
                {activity.recommendation.split(/(Microsoft 365 Copilot|Glean|Otter\.ai|Fireflies\.ai|Claude|ChatGPT|Gemini|Gamma|Canva|Power BI|Tableau|Lucanet|HeyGen|Loom|Gumloop|Zapier|Zoom|Teams?)/g).map((part: string, index: number) => {
                  const allTools = [...activity.tools, ...(activity.otherTools || [])]
                  const externalProducts: Record<string, string> = {
                    'Zoom': 'https://zoom.us',
                    'Teams': 'https://www.microsoft.com/en-us/microsoft-teams',
                    'Team': 'https://www.microsoft.com/en-us/microsoft-teams',
                    'Glean': 'https://www.glean.com'
                  }
                  const tool = allTools.find((t: { name: string; url: string }) => t.name === part || t.name.includes(part) || part.includes(t.name.split(' ')[0]))
                  if (tool) {
                    return (
                      <a key={index} href={tool.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium">
                        {part}
                      </a>
                    )
                  }
                  if (externalProducts[part]) {
                    return (
                      <a key={index} href={externalProducts[part]} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium">
                        {part}
                      </a>
                    )
                  }
                  return part
                })}
              </>
            ) : (
              <>I&apos;ve tried several tools in this category and found <a href={activity.tools[0]?.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium">{activity.tools[0]?.name}</a>{activity.tools[1] && <> and <a href={activity.tools[1]?.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium">{activity.tools[1]?.name}</a></>} to be the most easy to use while having all the features I can think of for a Product Manager&apos;s daily workflow. Hence my recommendation.</>
            )}
          </p>

          {activity.tutorialLinks && activity.tutorialLinks.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                Video Tutorials
              </h4>
              <div className="flex flex-wrap gap-3">
                {activity.tutorialLinks.map((link: { name: string; url: string }) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-blue-400 text-sm rounded-lg border border-slate-600 hover:bg-slate-700 hover:border-blue-500 transition-colors"
                  >
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}

          {activity.otherTools && activity.otherTools.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                Other Tools I Looked At
              </h4>
              <ul className="space-y-2">
                {activity.otherTools.map((tool: { name: string; url: string; note?: string; exampleUrl?: string; videoUrl?: string }) => (
                  <li key={tool.name} className="flex items-start gap-2">
                    <span className="text-slate-500 mt-1">•</span>
                    <div>
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {tool.name}
                      </a>
                      {tool.note && (
                        <span className="text-slate-500"> — {tool.note}</span>
                      )}
                      {tool.exampleUrl && (
                        <a
                          href={tool.exampleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-sm text-orange-400 hover:text-orange-300 transition-colors"
                        >
                          [See example]
                        </a>
                      )}
                      {tool.videoUrl && (
                        <a
                          href={tool.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 inline-flex items-center gap-1 text-sm text-red-400 hover:text-red-300 transition-colors"
                        >
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                          [Tutorial]
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 mt-20">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center">
          <p className="text-slate-500 text-sm">AI4PM - AI Tools for Product Managers</p>
        </div>
      </footer>
    </main>
  )
}
