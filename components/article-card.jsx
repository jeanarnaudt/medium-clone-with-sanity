import Link from 'next/link'
import Image from 'next/image'
import Moment from 'react-moment'

import { urlFor } from '../sanity'

import StarIcon from '../assets/star-icon.svg'
import BookmarkAddIcon from '../assets/bookmark-add-icon.svg'

const ArticleCard = ({
  _id,
  slug,
  title,
  author,
  excerpt,
  premium,
  mainImage,
  _createdAt,
}) => {
  return (
    <article className="article">
      <div className="article__content">
        <div className="author">
          <Link href="#">
            <img
              className="author__image"
              src={urlFor(author.image).url()}
              alt={author.name}
            />
          </Link>

          <h4 className="author__name">
            <Link href="#">
              <span>{author.name}</span>
            </Link>
          </h4>
        </div>

        <Link href={`/post/${slug.current}`}>
          <h2 className="content__title">{title}</h2>
        </Link>

        <Link href={`/post/${slug.current}`}>
          <h3 className="content__excerpt">{excerpt}</h3>
        </Link>

        <div className="content__bottom">
          <div className="meta">
            <Moment format="MMM D" date={_createdAt} />
            <span className="meta__dot">·</span>
            <span>7 min read</span>
            <span className="meta__dot">·</span>
            <a href="#">
              <span className="meta__tag">Work From Home</span>
            </a>
            {premium && (
              <span className="meta__icon">
                <StarIcon />
              </span>
            )}
          </div>
          <a href="#">
            <BookmarkAddIcon />
          </a>
        </div>
      </div>

      <a href="#">
        <Image
          src={urlFor(mainImage).url()}
          alt={title}
          width={200}
          height={134}
        />
      </a>
    </article>
  )
}

export default ArticleCard
