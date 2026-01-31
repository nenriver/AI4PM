'use client'

import { useState } from 'react'
import { getAssetPath } from '@/lib/utils'

interface ImageModalProps {
  src: string
  alt: string
}

export default function ImageModal({ src, alt }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const imageSrc = getAssetPath(src)

  return (
    <>
      <div
        className="aspect-video bg-slate-900 rounded overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-contain hover:opacity-90 transition-opacity"
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-slate-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={imageSrc}
              alt={alt}
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}
