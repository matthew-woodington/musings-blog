import { PortableText } from "@portabletext/react"
import imageUrlBuilder from "@sanity/image-url"
import client from "../client"
import { useEffect, useState } from 'react'
import styles from '../styles/BlogPost.module.css'
import { BsArrowBarLeft } from 'react-icons/bs'
import { useRouter } from 'next/router'


function urlFor (source:any) {
  return imageUrlBuilder(client).image(source)
}

const BlogPost = ({ post } : { post:any }) => {
  const [postPage, setPostPage] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router.pathname.includes('/post')) {
      setPostPage(true)
    } else {
      setPostPage(false)
    }
  }, [])

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  } as const;

return(
  <>
    {postPage && (
      <div className={styles.backbtn}>
        <a href="/#postlist" className={styles.navbutton}><BsArrowBarLeft className={styles.arrow} />Back</a>
      </div>
    )}
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
            <div className={styles.ptag}>
              <PortableText 
                value={post.body[0]}
              />
            </div>
          {post.mainImage && (
            <div className={styles.mainimgcont}>
              <picture>
                <img className={styles.mainimg} src={urlFor(post.mainImage).url()} alt={`${post.title} picture`} />
              </picture>
            </div>
          )}
          {post.body.slice(1).map((paragraph:any) => (
            <div key={paragraph._key} className={styles.ptag}>
              <PortableText 
                value={paragraph}
              />
            </div>
          ))}
        </article>
      </section>
    )}
  </>
)
}

export default BlogPost