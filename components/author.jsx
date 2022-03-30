import Link from 'next/link'
import Moment from 'react-moment'
import StarIcon from '../assets/star-icon.svg'

const Author = ({ image, name, createdAt, readingTime, premium }) => {
  return (
    <div className="author">
      <Link href="#">
        <img src={image} alt={name} className="author__image" />
      </Link>
      <div>
        <h6 className="author__name">{name}</h6>
        <div className="meta">
          <Moment format="MMM D" date={createdAt} className="meta__time" />
          <span className="meta__dot">·</span>
          <span>{readingTime} min read</span>
          {premium && (
            <span className="meta__icon">
              <StarIcon />
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Author
