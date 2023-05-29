import groq from "groq"
import client from "../../client"
import imageUrlBuilder from "@sanity/image-url"
import { PortableText } from "@portabletext/react"
import BlogPost from "@/components/BlogPost"

function urlFor (source:any) {
  return imageUrlBuilder(client).image(source)
}

// const ptComponents = {
//   types: {
//     image: ({ value } : {value:any}) => {
//       if (!value?.asset?._ref) {
//         return null
//       }
//       return (
//         <picture>
//           <img
//             alt={value.alt || ' '}
//             loading="lazy"
//             src={urlFor(value).width(320).height(240).fit('max').auto('format')}
//           />
//         </picture>
//       )
//     }
//   }
// }

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
    revalidate: 1,
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