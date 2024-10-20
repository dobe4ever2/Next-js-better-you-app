import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Post {id}</h1>
      <p className="text-gray-600">This is the content of post {id}</p>
    </div>
  )
}