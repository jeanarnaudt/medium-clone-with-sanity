import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import PortableText from 'react-portable-text'
import { useForm, SubmitHandler } from 'react-hook-form'

import { sanityClient, urlFor } from '../../sanity'
import Toolbar from '../../components/toolbar'
import Author from '../../components/author'
import Nav from '../../components/nav'
import WidgetOptions from '../../components/widget-options'
import WidgetSearch from '../../components/widget-search'
import WidgetAuthor from '../../components/widget-author'

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>Medium Clone with NextJs and Sanity</title>
        <meta
          name="description"
          content="Medium Clone with NextJs and Sanity"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page">
        <div className="container">
          <div className="page__wrap">
            <div className="page__header">
              <Nav />
            </div>
            <main className="page__main">
              <div className="main__content">
                <div className="content__top"></div>
                <div className="content__body">
                  <article className="post">
                    <header>
                      <Author
                        image={urlFor(post.author.image).url()}
                        name={post.author.name}
                        createdAt={post._createdAt}
                        readingTime={13}
                        premium={true}
                      />

                      <Toolbar />
                    </header>

                    <h1 className="text-[32px] font-body font-bold leading-tight tracking-tight">
                      {post.title}
                    </h1>

                    <h2 className="font-body text-neutral-500 mt-5 text-xl font-medium">
                      {post.excerpt}
                    </h2>

                    <figure className="mt-14 clear-both mx-auto">
                      <img
                        src={urlFor(post.mainImage).url()}
                        className="post__image"
                        alt={post.title}
                      />
                      <figcaption className="text-center mt-[10px] max-w-[728px] mx-auto text-sonic text-sm">
                        Image by{' '}
                        <a
                          className="underline"
                          href="https://unsplash.com/@cwmonty"
                        >
                          Chris Montgomery
                        </a>{' '}
                        on{' '}
                        <a className="underline" href="unsplash.com">
                          Unsplash
                        </a>
                        .
                      </figcaption>
                    </figure>

                    <section className="post__body">
                      <PortableText
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        content={post.body}
                        serializers={{
                          h1: (props) => (
                            <h1
                              className="my-5 text-2xl font-bold"
                              {...props}
                            />
                          ),
                          h2: (props) => (
                            <h2 className="my-5 text-xl font-bold" {...props} />
                          ),
                          li: ({ children }) => (
                            <li className="my-5 ml-4 list-disc">{children}</li>
                          ),
                          link: ({ href, children }) => (
                            <Link href={href}>
                              <span className="text-sky-600 hover:underline">
                                {children}
                              </span>
                            </Link>
                          ),
                          normal: ({ children }) => (
                            <p className="mt-7 font-newsreader text-justify text-ellipsis font-roboto text-[21px] leading-8 text-neutral-900">
                              {children}
                            </p>
                          ),
                        }}
                      />
                    </section>
                  </article>
                </div>
                <div className="content__bottom"></div>
              </div>
            </main>
            <div className="page__sidebar">
              <div className="sidebar">
                <div className="sidebar__wrap">
                  <WidgetOptions />
                  <WidgetSearch />
                  <WidgetAuthor
                    image={urlFor(post.author.image).url()}
                    name={post.author.name}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post

export const getStaticPaths = async () => {
  const query = `*[_type == "post"] {_id, slug {current}}`

  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id, _createdAt, title, author-> { name, image }, 'comments': *[_type == "comment" && post._ref == ^._id && approved == true], excerpt, mainImage, slug, body, 'comments': *[_type == "comment" && post._ref == ^._id && approved == true]}`

  const post = await sanityClient.fetch(query, { slug: params?.slug })

  if (!post) {
    return { notFound: true }
  }

  return {
    props: { post },
    // revalidate: 60, // It'll update the old cached version after 60 seconds
  }
}
