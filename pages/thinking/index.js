import React from 'react'
import BlogIndex, { getStaticProps as getBlogStaticProps } from '../blog/index'

export default function ThinkingAlias(props) {
  return <BlogIndex {...props} />
}

export async function getStaticProps() {
  return getBlogStaticProps()
}
