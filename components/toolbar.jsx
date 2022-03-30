import TwitterIcon from '../assets/twitter-icon.svg'
import FacebookIcon from '../assets/facebook-icon.svg'
import LinkedinIcon from '../assets/linkedin-icon.svg'
import CopyLinkIcon from '../assets/copy-link-icon.svg'
import BookmarkAddIcon from '../assets/bookmark-add-icon.svg'

const Toolbar = () => {
  return (
    <div className="toolbar">
      <button className="toolbar__btn">
        <span>
          <TwitterIcon />
        </span>
      </button>
      <button className="toolbar__btn">
        <span>
          <FacebookIcon />
        </span>
      </button>
      <button className="toolbar__btn">
        <span>
          <LinkedinIcon />
        </span>
      </button>
      <button className="toolbar__btn">
        <span>
          <CopyLinkIcon />
        </span>
      </button>
      <button className="toolbar__btn btn__addToList">
        <span>
          <BookmarkAddIcon />
        </span>
      </button>
    </div>
  )
}

export default Toolbar
