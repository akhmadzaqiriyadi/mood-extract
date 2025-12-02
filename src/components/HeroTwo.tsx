import React from 'react'
import Image from 'next/image'

export const HeroTwo: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image 
        src="/images/bg-hero-two.webp"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      
      {/* Content - Responsive Layout */}
      <div className="absolute inset-0 px-6 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="max-w-7xl mx-auto w-full h-full">
          
          {/* Mobile: Space Between (Top & Bottom) */}
          <div className="h-full flex flex-col justify-between md:hidden">
            {/* Top: Heading */}
            <div className="pt-4">
              <h1 className="heading-xl max-w-xs text-left">
                Where Craft<br />
                Meets Clarity.
              </h1>
            </div>
            
            {/* Bottom: Description */}
            <div className="pb-8">
              <p className="text-xs md:text-sm text-white max-w-xs leading-relaxed text-left">
                Born from the world of perfumery and precision chemistry, Mood Extract redefines what vaping can be — smooth, balanced, and artistic. Every batch is small-crafted, tested, and bottled with purpose.
              </p>
            </div>
          </div>
          
          {/* Desktop: Bottom Row Layout */}
          <div className="hidden md:flex h-full items-end justify-between gap-8">
            {/* Left - Title */}
            <h1 className="heading-hero max-w-3xl">
              Where Craft<br />
              Meets Clarity.
            </h1>
            
            {/* Right - Subtitle only (no button) */}
            <div className="flex flex-col gap-6">
              <p className="text-sm md:text-base text-white max-w-md leading-relaxed">
                Born from the world of perfumery and precision chemistry,<br />
                Mood Extract redefines what vaping can be — smooth,<br />
                balanced, and artistic. Every batch is small-crafted, tested,<br />
                and bottled with purpose.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
