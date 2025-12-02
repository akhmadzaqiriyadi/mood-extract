import React from 'react'
import { Hero } from '@/components/Hero'
import { CtaCard } from '@/components/CtaCard'
import { HeroTwo } from '@/components/HeroTwo'
import { Bestseller } from '@/components/Bestseller'
import { Footer } from '@/components/Footer'
import { ProductSection } from '@/components/ProductSection'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function Page() {
  const payload = await getPayload({ config })

  // Fetch products from Payload CMS
  const { docs: productsData } = await payload.find({
    collection: 'products',
    limit: 10,
    where: {
      featured: {
        equals: true,
      },
    },
  })

  // Transform data untuk ProductSection
  const products = productsData.map((product: any) => ({
    id: product.id,
    name: product.name,
    category: product.category,
    price: `$${product.price.toLocaleString('en-US')} USD`,
    image: typeof product.image === 'object' ? product.image.url : '/images/productone.png',
    href: `/products/${product.slug}`,
  }))

  return (
    <main>
      <Hero />
      <HeroTwo />
      <ProductSection products={products.length > 0 ? products : undefined} />
      <Bestseller />
      <CtaCard />
      <Footer />
    </main>
  )
}
