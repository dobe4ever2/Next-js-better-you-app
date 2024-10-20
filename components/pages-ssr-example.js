'use client'

export function SsrExampleJs({ data }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">SSR Example</h1>
      <p className="text-gray-600">{data}</p>
    </div>
  )
}

export async function getServerSideProps() {
  // Simulate data fetching
  const res = await fetch('https://api.example.com/data')
  const data = await res.text()

  return { props: { data } }
}