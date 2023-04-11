// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import Link from "next/link"
import groq from "groq"
import client from "../client"

const Home = ({ posts } : {posts:any}) => {
  return (
    <div>
      <h1>Welcome to the Blog!</h1>
      {posts.length > 0 && posts.map(
        ({ _id, title = '', slug = '', publishedAt = '' }:{_id:any, title:string, slug:any, publishedAt:string}) =>
        slug && (
          <li key={_id}>
            <Link href={`/post/${encodeURIComponent(slug.current)}`}>
              {title}
            </Link>{' '}
            ({new Date(publishedAt).toDateString()})
          </li>
        )
      )}
    </div>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `)
  return {
    props: {
      posts
    }
  }
}

export default Home
