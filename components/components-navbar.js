'use client'

import Link from 'next/link'

export function NavbarJs() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/posts/1" className="text-white hover:text-gray-300">
            First Post
          </Link>
        </li>
      </ul>
    </nav>
  )
}