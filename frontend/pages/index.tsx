import groq from "groq"
import client from "../client"
import BlogPost from "@/components/BlogPost"
import { useState } from "react"
import PostList from "@/components/PostList"
import Pagination from "@/components/Pagination"

const Home = ({ featuredPost, posts } : { featuredPost:any, posts:any }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(6)

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Welcome to the Blog!</h1>

      <BlogPost post={featuredPost} />
      <PostList currentPosts={currentPosts} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      
    </div>
  )
}

const featuredQuery = groq`*[_type == "post" && 'Featured' in categories[]->title][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  "mainImage": mainImage,
  "publishedAt": publishedAt,
  body
}`
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
