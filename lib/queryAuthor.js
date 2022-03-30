import { sanityClient } from '../sanity'

export const getAutorByName = async (name) => {
  const query = `*[_type == "author" && name==${name}]{
    _id, name, image, bio
  }`

  const author = await sanityClient.fetch(query)

  if (!author) {
    return { notFound: true }
  }

  return { author }
}
