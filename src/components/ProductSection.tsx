'use client'

import React, { useRef, useState, useEffect } from 'react'
import { ProductCard } from './ProductCard'

interface Product {
  id: string
  name: string
  category: string
  price: string
  image: string
  href?: string
}

interface ProductSectionProps {
  products?: Product[]
}

export const ProductSection: React.FC<ProductSectionProps> = ({ products: propProducts }) => {
  // Fallback data jika tidak ada products dari props
  const defaultProducts: Product[] = [
    {
      id: '1',
      name: 'Reverie',
      category: 'WARM CONTENTMENT',
      price: '$30,000 USD',
      image: '/images/productone.png',
      href: '/products/reverie',
    },
    {
      id: '2',
      name: 'Afterglow',
      category: 'WARM CONTENTMENT',
      price: '$30,000 USD',
      image: '/images/productone.png',
      href: '/products/afterglow',
    },
    {
      id: '3',
      name: 'Ignite',
      category: 'WARM CONTENTMENT',
      price: '$30,000 USD',
      image: '/images/productone.png',
      href: '/products/ignite',
    },
    {
      id: '4',
      name: 'Lucid',
      category: 'WARM CONTENTMENT',
      price: '$30,000 USD',
      image: '/images/productone.png',
      href: '/products/lucid',
    },
  ]

  const products = propProducts || defaultProducts
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return

      const scrollLeft = scrollRef.current.scrollLeft
      const cardWidth = 320 + 32 // card width + gap
      const index = Math.round(scrollLeft / cardWidth)
      setActiveIndex(index)
    }

    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll)
      return () => scrollElement.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return
    const cardWidth = 320 + 32 // card width + gap
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    })
  }

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-0">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 gap-6">
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">
              SIGNATURE COLLECTIONS
            </p>
            <h2 className="heading-lg">
              Every Flavor,
              <br />A State of Mind.
            </h2>
          </div>

          <div className="lg:text-right">
            <p className="text-sm text-gray-400 mb-6 max-w-md lg:ml-auto">
              From calm serenity to vibrant ignition —<br />
              each Mood Extract blend is a reflection of how you feel.
            </p>
            <button className="btn-border-amber">Shop Collection</button>
          </div>
        </div>

        {/* Products Grid - Horizontal Scroll */}
        <div className="relative -mx-6 md:-mx-8 lg:-mx-12">
          <div ref={scrollRef} className="overflow-x-auto scrollbar-hide px-6 md:px-8 lg:px-12">
            <div className="flex gap-6 lg:gap-8 pb-4">
              {products.map((product) => (
                <div key={product.id} className="shrink-0 w-[280px] md:w-[320px]">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-8 h-1 rounded-full transition-colors ${
                activeIndex === index ? 'bg-amber-500' : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
