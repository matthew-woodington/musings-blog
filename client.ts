import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '52igmtvo', 
  dataset: 'production', 
  useCdn: true
})