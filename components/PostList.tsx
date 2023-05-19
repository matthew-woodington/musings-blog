import Link from "next/link"
import styles from '../styles/PostList.module.css'
import imageUrlBuilder from "@sanity/image-url"
import client from "../client"
import { BsArrowUpRight } from 'react-icons/bs'


function urlFor (source:any) {
  return imageUrlBuilder(client).image(source)
}

function PostList({ currentPosts } : { currentPosts:any }) {

  const sliceParagraph = (text:any) => {
    const preview = (text.children[0].text.slice(0,200))
    return preview
  }

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  console.log(currentPosts)

  return (
    <section id="postlist" className={styles.postlist}>
      <div className={styles.cont}>
        <ul className={styles.listcont}>
          {currentPosts.length > 0 && currentPosts.map(
            (post:any) =>
            post.slug && (
              <li key={post._id} className={styles.listitem}>
                <Link className={styles.title} href={`/post/${encodeURIComponent(post.slug.current)}`}>
                  {post.title}
                </Link>{' '}
                <div className={styles.bodysection}>
                  <p className={styles.date}>{new Date(post.publishedAt).toLocaleDateString("en-US", options)}</p>
                  <p className={styles.preview}>{sliceParagraph(post.body[0])} ...</p>
                  <Link className={styles.linkbtn} href={`/post/${encodeURIComponent(post.slug.current)}`}>
                    Read more <BsArrowUpRight className={styles.arrow} />
                  </Link>{' '}
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  )
}

export default PostList
