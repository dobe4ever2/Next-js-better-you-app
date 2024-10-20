'use client'

import Image from 'next/image'

export function IndexJs() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to my Next.js app!</h1>
      <Image
        src="/placeholder.svg?height=300&width=400"
        alt="Placeholder Image"
        width={400}
        height={300}
        className="rounded-lg shadow-md"
      />
    </div>
  )
}