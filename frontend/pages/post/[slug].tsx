import groq from "groq"
import client from "../../client"
import imageUrlBuilder from "@sanity/image-url"
import { PortableText } from "@portabletext/react"
import { format } from "path"

function urlFor (source:string) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value } : {value:any}) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <picture>
          <img
            alt={value.alt || ' '}
            loading="lazy"
            src={urlFor(value).width(320).height(240).fit('max').auto('format')}
          />
        </picture>
      )
    }
  }
}

const Post = ({post} : {post:any}) => {

  const { 
    title = 'Missing title', 
    name = 'Missing name', 
    categories, 
    authorImage,
    body = []
  } = post

  return (
    <article>
      <h1>{title}</h1>
      <span>By {name}</span>
      {categories && (
        <ul>
          Posted in:
          {categories.map((category:string) => <li key={category}>{category}</li>)}
        </ul>
      )}
      {authorImage && (
        <picture>
          <img src={urlFor(authorImage).width(50).url()} alt={`${name}'s picture`} />
        </picture>
      )}
      <PortableText 
        value={body}
        components={ptComponents}
      />
    </article>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
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
    }
  }
 }

export default Post