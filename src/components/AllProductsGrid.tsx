'use client'

import React, { useState } from 'react'
import { ProductCard } from './ProductCard'

interface Product {
  id: string
  name: string
  category: string
  price: string
  image: string
  href?: string
}

interface AllProductsGridProps {
  products?: Product[]
}

const categories = ['ALL MOODS', 'REVERIE', 'AFTERGLOW', 'IGNITE']

export const AllProductsGrid: React.FC<AllProductsGridProps> = ({ products: propProducts }) => {
  const [activeCategory, setActiveCategory] = useState('ALL MOODS')

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
      name: 'Afterglow',
      category: 'WARM CONTENTMENT',
      price: '$30,000 USD',
      image: '/images/productone.png',
      href: '/products/afterglow-2',
    },
    {
      id: '5',
      name: 'Afterglow',
      category: 'WARM CONTENTMENT',
      price: '$30,000 USD',
      image: '/images/productone.png',
      href: '/products/afterglow-3',
    },
    {
      id: '6',
      name: 'Ignite',
      category: 'WARM CONTENTMENT',
      price: '$30,000 USD',
      image: '/images/productone.png',
      href: '/products/ignite-2',
    },
  ]

  const products = propProducts || defaultProducts

  // Filter products berdasarkan kategori aktif
  const filteredProducts =
    activeCategory === 'ALL MOODS'
      ? products
      : products.filter((product) => product.name.toUpperCase() === activeCategory)

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-0">
        {/* Category Tabs + Filter Button */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12 gap-6">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-8 border-b border-amber-500/20 pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm md:text-base tracking-wider transition-colors pb-2 ${
                  activeCategory === category
                    ? 'text-amber-400 border-b-2 border-amber-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Filter Button */}
          <button className="flex items-center gap-2 text-sm text-white border border-amber-500/40 hover:border-amber-400 px-6 py-2 rounded-sm transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
              />
            </svg>
            Filters
          </button>
        </div>

        {/* Products Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
