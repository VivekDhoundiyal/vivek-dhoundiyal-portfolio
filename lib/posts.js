import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'posts')

export function getAllPosts() {
  if (!fs.existsSync(postsDir)) {
    return []
  }
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
  return files.map(filename => {
    const slug = filename.replace(/\.mdx?$|\.md$/i, '')
    const filePath = path.join(postsDir, filename)
    const source = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(source)
    return {
      slug,
      title: data.title || slug,
      seoTitle: data.seoTitle || data.title || slug,
      seoDescription: data.seoDescription || data.excerpt || null,
      date: data.date || null,
      category: data.category || 'Product & Systems',
      readingTime: data.readingTime || '5 min read',
      excerpt: data.excerpt || null,
      coverImage: data.coverImage || null,
      featured: Boolean(data.featured),
      tags: data.tags || []
    }
  }).sort((a,b)=> {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return (b.date || '').localeCompare(a.date || '')
  })
}

export function getPostSource(slug){
  const filePath = path.join(postsDir, `${slug}.mdx`)
  const mdPath = path.join(postsDir, `${slug}.md`)
  let targetPath = null
  if (fs.existsSync(filePath)) targetPath = filePath
  else if (fs.existsSync(mdPath)) targetPath = mdPath
  else return null

  const source = fs.readFileSync(targetPath, 'utf8')
  const { data, content } = matter(source)
  return { 
    meta: {
      ...data,
      slug,
      title: data.title || slug,
      category: data.category || 'Product & Systems',
      readingTime: data.readingTime || '5 min read',
    }, 
    content 
  }
}
