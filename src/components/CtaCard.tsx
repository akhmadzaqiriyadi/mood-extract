import React from 'react'
import Image from 'next/image'

export const CtaCard: React.FC = () => {
  return (
    <section className="w-full bg-black">
      
      {/* Mobile Layout: Content Top + Image Bottom */}
      <div className="md:hidden flex flex-col min-h-screen">
        {/* Top: Content */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12">
          <div className="max-w-md">
            {/* Title */}
            <h2 className="heading-xl mb-4">
              Mood Extract is<br />
              where vapor meets soul.
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-gray-200/90 leading-relaxed mb-6">
              Join the ritual — early access to new moods, limited drops, and journal stories.
            </p>

            {/* Button with Icon */}
            <button className="group/btn relative w-full overflow-hidden border border-amber-500/60 bg-transparent hover:bg-amber-500/5 px-6 py-3 text-white transition-all hover:border-amber-400 rounded-sm">
              <div className="flex items-center justify-between gap-6">
                <span className="font-medium tracking-wide text-sm">Join the Ritual</span>
                <svg
                  className="w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom: Product Image (Full Width) */}
        <div className="relative w-full h-[500px]">
          <Image
            src="/images/bg-cta-mobile.webp"
            alt="Mood Extract Product"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Desktop Layout: Card with Background */}
      <div className="hidden md:flex h-[700px] items-start justify-center pt-12 md:pt-16 lg:pt-20 px-4">
        {/* Card Container */}
        <div className="relative w-full max-w-7xl aspect-[2.5/1] rounded-md overflow-hidden group">
          {/* Background Image */}
          <Image
            src="/images/bg-cta.webp"
            alt="Mood Extract Ritual"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />

          {/* Content Container - Right aligned */}
          <div className="absolute inset-0 flex items-center justify-end p-8 md:p-12 lg:p-16">
            <div className="max-w-[636px] w-full flex flex-col gap-2 text-left">
              {/* Title */}
              <h2 className="heading-xl">
                Mood Extract is <br /> where vapor meets soul.
              </h2>

              {/* Subtitle */}
              <p className="text-[18px] text-gray-200/90 leading-relaxed max-w-full">
                Join the ritual — early access to new moods, limited drops, and journal stories.
              </p>

              {/* Button with Icon */}
              <button className="group/btn relative w-full md:w-auto overflow-hidden border border-amber-500/60 bg-transparent hover:bg-amber-500/5 px-6 py-3 text-white transition-all hover:border-amber-400 mt-1 rounded-sm">
                <div className="flex items-center justify-between gap-6">
                  <span className="font-medium tracking-wide text-sm">Join the Ritual</span>
                  <svg
                    className="w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}
