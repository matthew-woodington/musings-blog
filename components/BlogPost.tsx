import { PortableText } from "@portabletext/react"
import imageUrlBuilder from "@sanity/image-url"
import client from "../client"
import styles from '../styles/BlogPost.module.css'


function urlFor (source:any) {
  return imageUrlBuilder(client).image(source)
}

const BlogPost = ({ post } : { post:any }) => {

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

return(
  <>
    {post && (
      <section className={styles.postsection} >
        <div className={styles.sectiontitle} >
          <h1>{post.categories[0]}</h1>
        </div>
        <article className={styles.postcontent} >
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.postinfo}>
            <p className={styles.date}>{new Date(post.publishedAt).toLocaleDateString("en-US", options)}</p>
            <div className={styles.author}>
              <span>By</span>
              {post.authorImage && (
                <div className={styles.authorimgcont}>
                  <picture>
                    <img className={styles.authorimg} src={urlFor(post.authorImage).width(50).url()} alt={`${post.name}'s picture`} />
                  </picture>
                </div>
              )}
              <span>{post.name}</span>
            </div>
          </div>
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
      </section>
    )}
  </>
)
}

export default BlogPost