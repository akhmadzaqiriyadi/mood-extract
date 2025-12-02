import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image 
        src="/images/bg-hero.webp"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-black/90 via-black/60 to-transparent" />
      
      {/* Content - Responsive Layout */}
      <div className="absolute inset-0 flex items-end justify-center md:justify-start px-6 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Mobile: Centered Bottom */}
          <div className="flex flex-col items-center text-center md:hidden gap-6 pb-8">
            <h1 className="heading-lg max-w-lg">
              EXTRACT THE MOOD.<br />
              ELEVATE THE MOMENT.
            </h1>
            
            <p className="text-xs md:text-sm text-white md:max-w-md max-w-xs leading-relaxed">
              Crafted vape extracts inspired by emotion — designed for those who inhale art, not habit.
            </p>
            
            <Link href="/collection" className="btn-gradient-amber w-fit">
              Shop Collection
            </Link>
          </div>
          
          {/* Desktop: Bottom Row Layout */}
          <div className="hidden md:flex items-end justify-between gap-8">
            {/* Left - Title */}
            <h1 className="heading-hero max-w-3xl">
              EXTRACT THE MOOD.<br />
              ELEVATE THE MOMENT.
            </h1>
            
            {/* Right - Subtitle and CTA */}
            <div className="flex flex-col gap-6">
              <p className="text-sm md:text-base text-white max-w-md leading-relaxed">
                Crafted vape extracts inspired by emotion <br /> — designed for those who inhale art, not habit.
              </p>
              
              <Link href="/collection" className="btn-gradient-amber w-fit">
                Shop Collection
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
