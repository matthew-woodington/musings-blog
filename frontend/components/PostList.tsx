import Link from "next/link"

function PostList({ currentPosts } : { currentPosts:any }) {
  return (
    <div>
      {currentPosts.length > 0 && currentPosts.map(
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

export default PostList
