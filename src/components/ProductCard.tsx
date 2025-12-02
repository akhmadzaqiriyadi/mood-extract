import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  id: string
  name: string
  category: string
  price: string
  image: string
  href?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  category,
  price,
  image,
  href = '#',
}) => {
  return (
    <Link href={href} className="group">
      <div className="relative aspect-3/4 bg-neutral-900 overflow-hidden mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-xs tracking-widest text-gray-400 uppercase">{category}</p>
          <h3 className="text-xl font-serif text-amber-400">{name}</h3>
        </div>
        <p className="text-sm text-gray-300 -mt-1">{price}</p>
      </div>
    </Link>
  )
}
