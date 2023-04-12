// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import Link from "next/link"
import groq from "groq"
import client from "../client"

const Home = ({ featuredPost, posts } : {featuredPost:any, posts:any}) => {

  console.log(featuredPost)
  console.log(posts)

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

const featuredQuery = groq`*[_type == "post" && 'Featured' in categories[]->title]`
const postsQuery = groq`*[_type == "post" && publishedAt < now() && 'Standard' in categories[]->title] | order(publishedAt desc)`

export async function getStaticProps() {
  const featuredPost = await client.fetch(featuredQuery)
  const posts = await client.fetch(postsQuery)

  return {
    props: {
      featuredPost,
      posts
    }
  }
}

export default Home
