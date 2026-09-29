import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getAllPosts } from '../../lib/posts'

export default function BlogPostRedirect() {
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    if (slug) {
      router.replace(`/thinking/${slug}`)
    }
  }, [slug, router])

  return null
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  return {
    paths: posts.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    }
  }
}
