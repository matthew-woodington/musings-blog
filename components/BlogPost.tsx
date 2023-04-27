import { PortableText } from "@portabletext/react"
import imageUrlBuilder from "@sanity/image-url"
import client from "../client"


function urlFor (source:any) {
  return imageUrlBuilder(client).image(source)
}

const BlogPost = ({ post } : { post:any }) => {

return(
  <>
    {post && (
    <article>
      <h1>{post.title}</h1>
      <span>By {post.name}</span>
      <span>{new Date(post.publishedAt).toDateString()}</span>
      {post.authorImage && (
        <picture>
          <img src={urlFor(post.authorImage).width(50).url()} alt={`${post.name}'s picture`} />
        </picture>
      )}
      <PortableText 
        value={post.body[0]}
      />
      {post.mainImage && (
        <picture>
          <img src={urlFor(post.mainImage).width(320).url()} alt={`${post.title} picture`} />
        </picture>
      )}
      <PortableText 
        value={post.body.slice(1)}
      />
    </article>
    )}
  </>
)
}

export default BlogPost