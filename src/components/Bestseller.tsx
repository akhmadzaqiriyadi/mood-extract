import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Bestseller: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image 
        src="/images/bestseller.webp"
        alt="Bestseller background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content Container - Responsive */}
      <div className="relative h-full w-full px-6 md:px-8 lg:px-12 py-8 md:py-12">
        
        {/* Mobile: Space Between (Top & Bottom) */}
        <div className="h-full flex flex-col justify-between md:hidden">
          {/* Top: Heading */}
          <div className="pt-4">
            <h2 className="heading-xl max-w-xs text-left">
              Bestseller:<br />
              Afterglow
            </h2>
          </div>
          
          {/* Bottom: Description & Buttons */}
          <div className="pb-8">
            <p className="text-xs md:text-sm text-white max-w-xs leading-relaxed text-left mb-6">
              Amber woods, citrus zest, and dark honey — a blend that lingers like the last light of day.
            </p>
            
            <div className="flex gap-4 text-center w-full">
              <Link href="/cart" className="btn-gradient-amber flex-1">
                Add to Cart
              </Link>
              
              <Link href="/collection" className="btn-border-amber flex-1">
                Shop All
              </Link>
            </div>
          </div>
        </div>
        
        {/* Desktop: Flexible Positioning */}
        <div className="hidden md:flex max-w-7xl mx-auto h-full flex-col justify-between">
          
          {/* Top Left - Title */}
          <div>
            <h2 className="heading-hero">
              Bestseller:<br />
              Afterglow
            </h2>
          </div>
          
          {/* Bottom Right - Description and CTA Buttons */}
          <div className="self-end max-w-md">
            <p className="text-sm md:text-base text-white mb-6 leading-relaxed">
              Amber woods, citrus zest, and dark honey —<br />
              a blend that lingers like the last light of day.
            </p>
            
            <div className="flex gap-4">
              <Link href="/cart" className="btn-gradient-amber">
                Add to Cart
              </Link>
              
              <Link href="/collection" className="btn-border-amber">
                Shop All
              </Link>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  )
}
