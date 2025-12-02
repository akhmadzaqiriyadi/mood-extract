import React from 'react'
import { HeroProductCollection } from '@/components/HeroProductCollection'
import { AllProductsGrid } from '@/components/AllProductsGrid'
import { Bestseller } from '@/components/Bestseller'
import { CtaCard } from '@/components/CtaCard'
import { Footer } from '@/components/Footer'
import { getPayload } from 'payload'
import config from '@/payload.config'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function ProductsPage() {
  let products = []

  try {
    const payload = await getPayload({ config })

    // Fetch all products from Payload CMS
    const { docs: productsData } = await payload.find({
      collection: 'products',
      limit: 100,
    })

    // Transform data untuk AllProductsGrid
    products = productsData.map((product: any) => ({
      id: product.id,
      name: product.name,
      category: product.category,
      price: `$${product.price.toLocaleString('en-US')} USD`,
      image: typeof product.image === 'object' ? product.image.url : '/images/productone.png',
      href: `/products/${product.slug}`,
    }))
  } catch (error) {
    console.error('Error fetching products:', error)
    // Fallback to empty array, AllProductsGrid will use default data
  }

  return (
    <main>
      <HeroProductCollection />
      <AllProductsGrid products={products.length > 0 ? products : undefined} />
      <Bestseller />
      <CtaCard />
      <Footer />
    </main>
  )
}
