import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { sanityClient } from '../sanity'

import HeaderHero from '../components/header-hero'
import ArticleCard from '../components/article-card'
import TrendingCard from '../components/trending-card'

import TrendingIcon from '../assets/trending-icon.svg'
import WidgetTopics from '../components/widget-topics'
import WidgetMenu from '../components/widget-menu'

const Home = ({ posts }) => {
  return (
    <div className="home">
      <Head>
        <title>Medium Clone with NextJs and Sanity</title>
        <meta
          name="description"
          content="Medium Clone with NextJs and Sanity"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={`home__header ${
          isDown ? 'home__header--white' : 'home__header--yellow'
        }`}
      >
        <div className="header__nav">
          <div className="container">
            <div className="inner__nav">
              <Link href="/">
                <Image
                  className="nav__logo"
                  src="/logo-full.svg"
                  alt="Full Logo"
                  width={162}
                  height={25}
                />
              </Link>

              <div className="nav__menu">
                <Link href="#">
                  <span className="menu__option">Our story</span>
                </Link>
                <Link href="#">
                  <span className="menu__option">Membership</span>
                </Link>
                <Link href="#">
                  <span className="menu__option">Write</span>
                </Link>
                <Link href="#">
                  <span className="menu__option signin">Sign In</span>
                </Link>
                <Link href="#">
                  <span className="btn btn--black">Get started</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <HeaderHero />
      </div>

      <div className="home__section">
        <div className="container">
          <div className="section__trendings">
            <div className="trendings__header">
              <TrendingIcon />
              <p>Trending on medium</p>
            </div>
            <div className="trendings__body">
              <TrendingCard position="01" />
              <TrendingCard position="02" />
              <TrendingCard position="03" />
              <TrendingCard position="04" />
              <TrendingCard position="05" />
              <TrendingCard position="06" />
            </div>
          </div>
        </div>
      </div>

      <div className="home__section home__section--bt">
        <div className="container">
          <div className="section__content">
            <div className="content__main">
              {posts.map((post) => (
                <ArticleCard key={post._id} {...post} />
              ))}
            </div>
            <div className="content__sidebar">
              <WidgetTopics />
              <WidgetMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{ _id, title, slug, author -> { name, image }, excerpt, mainImage, premium }`

  const posts = await sanityClient.fetch(query)

  return { props: { posts } }
}
