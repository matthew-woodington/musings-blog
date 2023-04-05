import client from "../../client"

const Post = ({ post } : {post:any}) => {

  console.log(post)

  return (
    <article>
      <h1>{post?.title}</h1>
    </article>
  )
}

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
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })

  return {
    props: {
      post
    }
  }
 }

export default Post