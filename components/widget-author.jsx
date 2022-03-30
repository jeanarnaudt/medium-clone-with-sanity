import Link from 'next/link'

import { urlFor } from '../sanity'

import EmailAddIcon from '../assets/email-add-icon.svg'

const WidgetAuthor = ({ image, name }) => {
  return (
    <div className="widget__author">
      <img className="author__image" src={image} alt={name} />
      <Link href="#">
        <h2 className="author__name">{name}</h2>
      </Link>
      <p className="author__follower_count">35K Followers</p>
      <p className="author__bio">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, error eos
        perspiciatis quis officia rem? Quod expedita sunt, possimus saepe quasi
        repellat similique excepturi amet illo veritatis totam odit nisi!
      </p>
      <div className="buttons">
        <button className="button__follow btn btn--blue">
          <Link href="#">
            <span>Follow</span>
          </Link>
        </button>
        <button className="button__newsletter btn btn--blue">
          <Link href="#">
            <span>
              <EmailAddIcon />
            </span>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default WidgetAuthor
