import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white pt-12 md:pt-16 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-0">
        {/* Row 1: Newsletter + Navigation Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 md:mb-4">
          {/* Left: Newsletter Signup */}
          <div>
            <h3 className="text-sm font-bold tracking-wider mb-2 text-white">JOIN THE RITUAL</h3>
            <p className="text-xs md:text-sm text-gray-400 mb-6 max-w-md">
              Not for everyone. Receive early access to new moods, limited blends, and stories
              behind the craft. No noise — only essence.
            </p>

            {/* Email Form */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-transparent border border-white/20 px-4 py-3 text-sm focus:outline-none focus:border-amber-500/60 transition-colors rounded-sm"
                />
                <button className="btn-gradient-amber">SIGN UP</button>
              </div>

              {/* Checkboxes */}
              <label className="flex items-start gap-2 text-xs text-gray-400">
                <input type="checkbox" className="mt-0.5" />
                <span>I agree to receive emails from Mood. You can unsubscribe at any time.</span>
              </label>

              <p className="text-xs text-gray-500">
                By signing up, you agree to the{' '}
                <Link href="/privacy" className="underline hover:text-amber-400">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Right: Navigation Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Shop */}
            <div>
              <h4 className="text-sm font-bold tracking-wider mb-4 text-amber-400">SHOP</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/products" className="hover:text-amber-400 transition-colors">
                    All products
                  </Link>
                </li>
                <li>
                  <Link href="/new" className="hover:text-amber-400 transition-colors">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="/bestseller" className="hover:text-amber-400 transition-colors">
                    Best Seller
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-amber-400 transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="text-sm font-bold tracking-wider mb-4 text-amber-400">HELP</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/return-policy" className="hover:text-amber-400 transition-colors">
                    Return & Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-amber-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-amber-400 transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold tracking-wider mb-4 text-amber-400">CONTACT</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:info@dyrka.com"
                    className="hover:text-amber-400 transition-colors"
                  >
                    info@dyrka.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Row 2: Dropdown + Payment Icons + Social Media */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 pb-8 border-t border-white/10 pt-8">
          {/* Social Media Icons - Left side on desktop */}
          <div className="flex items-center gap-4 order-3 md:order-1">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-amber-500/40 hover:border-amber-400 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-amber-500/40 hover:border-amber-400 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-amber-500/40 hover:border-amber-400 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-amber-500/40 hover:border-amber-400 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-amber-500/40 hover:border-amber-400 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Right side: Dropdown + Payment Icons stacked */}
          <div className="flex flex-col gap-4 order-1 md:order-2">
            {/* Dropdown */}
            <div className="w-full relative">
              <select className="bg-transparent border border-amber-500/40 px-6 py-3 pr-12 text-sm hover:border-amber-400 transition-colors cursor-pointer rounded-sm w-full md:w-auto appearance-none">
                <option value="usd" className="bg-black">
                  UNITED STATES (USD $)
                </option>
                <option value="eur" className="bg-black">
                  EUROPE (EUR €)
                </option>
                <option value="gbp" className="bg-black">
                  UNITED KINGDOM (GBP £)
                </option>
              </select>
              {/* Custom Arrow */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Payment Icons */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="relative h-6 w-12">
                <Image
                  src="/images/payments/mastercard 1.png"
                  alt="Mastercard"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-6 w-12">
                <Image src="/images/payments/visa.png" alt="Visa" fill className="object-contain" />
              </div>
              <div className="relative h-6 w-16">
                <Image
                  src="/images/payments/american-express.png"
                  alt="American Express"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-6 w-12">
                <Image
                  src="/images/payments/applepay.png"
                  alt="Apple Pay"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-6 w-14">
                <Image
                  src="/images/payments/shoppay.png"
                  alt="Shop Pay"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-6 w-14">
                <Image
                  src="/images/payments/klarna.png"
                  alt="Klarna"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-6 w-12">
                <Image
                  src="/images/payments/paypal.png"
                  alt="PayPal"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 pb-8">© 2025 — Mood. All Rights Reserved</div>
      </div>

      {/* Row 3: Footer Texture Background - Positioned at Bottom */}
      <div className="relative w-full h-8 md:h-32 mt-8">
        <Image
          src="/images/footer.webp"
          alt="Footer texture"
          fill
          className="object-cover object-bottom"
          priority={false}
        />
      </div>
    </footer>
  )
}
