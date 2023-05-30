import groq from "groq"
import client from "../../client"
import BlogPost from "@/components/BlogPost"

const Post = ({post} : {post:any}) => {

  return (
    <BlogPost post={post} />
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  "mainImage": mainImage,
  "publishedAt": publishedAt,
  body
}`

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug : any) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context:any) {
  const { slug = '' } = context.params
  const post = await client.fetch(query, { slug })

  return {
    props: {
      post
    },
    revalidate: 1,
  }
 }

export default Post