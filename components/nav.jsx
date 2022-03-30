import Link from 'next/link'
import Image from 'next/image'

import Logo from '../assets/logo.svg'
import HomeIcon from '../assets/home-icon.svg'
import BellIcon from '../assets/bell-icon.svg'
import BookmarksIcon from '../assets/bookmarks-icon.svg'
import ListsIcon from '../assets/lists-icon.svg'
import EditIcon from '../assets/edit-icon.svg'

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="nav__menu">
        <div className="menu__item">
          <Link href="/">
            <span>
              <HomeIcon />
            </span>
          </Link>
        </div>
        <div className="menu__item">
          <Link href="#">
            <span>
              <BellIcon />
            </span>
          </Link>
        </div>
        <div className="menu__item">
          <Link href="#">
            <span>
              <BookmarksIcon />
            </span>
          </Link>
        </div>
        <div className="menu__item">
          <Link href="#">
            <span>
              <ListsIcon />
            </span>
          </Link>
        </div>
        <div className="menu__separator">
          <hr className="separator" />
        </div>
        <div className="menu__item">
          <Link href="#">
            <span>
              <EditIcon />
            </span>
          </Link>
        </div>
      </div>

      <div className="nav__options"></div>
    </nav>
  )
}

export default Nav
