import React from 'react'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'

// Force dynamic rendering
export const dynamic = 'force-dynamic'
export const revalidate = 0

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params

  try {
    const payload = await getPayload({ config })

    // Fetch product by slug
    const { docs } = await payload.find({
      collection: 'products',
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    })

    const product = docs[0]

    if (!product) {
      notFound()
    }

    return (
      <main className="bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
          {/* Back Button */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Collection
          </Link>

          {/* Product Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative aspect-square bg-neutral-900 rounded-lg overflow-hidden">
              <Image
                src={
                  typeof product.image === 'object' && product.image?.url
                    ? product.image.url
                    : '/images/productone.png'
                }
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">
                {product.category}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-amber-400 mb-6">
                {product.name}
              </h1>
              <p className="text-2xl md:text-3xl text-white mb-8">
                ${product.price.toLocaleString('en-US')} USD
              </p>

              {product.description && (
                <p className="text-base text-gray-300 mb-8 leading-relaxed">
                  {product.description}
                </p>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-gradient-amber flex-1 sm:flex-none">Add to Cart</button>
                <button className="btn-border-amber flex-1 sm:flex-none">Shop All</button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    )
  } catch (error) {
    console.error('Failed to fetch product:', error)
    notFound()
  }
}
