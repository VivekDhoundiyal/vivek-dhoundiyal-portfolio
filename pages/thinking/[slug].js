import React from 'react'
import BlogPostPage, { getStaticPaths as getBlogStaticPaths, getStaticProps as getBlogStaticProps } from '../blog/[slug]'

export default function ThinkingPostAlias(props) {
  return <BlogPostPage {...props} />
}

export async function getStaticPaths() {
  return getBlogStaticPaths()
}

export async function getStaticProps(context) {
  return getBlogStaticProps(context)
}
