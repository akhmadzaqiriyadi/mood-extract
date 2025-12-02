import React from 'react'
import Image from 'next/image'

export const HeroProductCollection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/product-collection.webp"
        alt="Product Collection"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Container - Bottom Center */}
      <div className="relative h-full w-full flex items-end justify-center px-6 md:px-8 lg:px-12 pb-16 md:pb-24">
        <div className="text-center max-w-4xl">
          <p className="text-xs tracking-widest text-white uppercase mb-4">
            Crafted vape extracts inspired by emotion — designed for those who inhale art, not
            habit.
          </p>

          <h1 className="heading-hero">
            DISCOVER YOUR
            <br />
            PERFECT MOODS
          </h1>
        </div>
      </div>
    </section>
  )
}
