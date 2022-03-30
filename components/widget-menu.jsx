import Link from 'next/link'

const WidgetMenu = () => {
  return (
    <div className="widget__menu">
      <div className="menu__item">
        <Link href="#">
          <span>Help</span>
        </Link>
      </div>
      <div className="menu__item">
        <Link href="#">
          <span>Status</span>
        </Link>
      </div>
      <div className="menu__item">
        <Link href="#">
          <span>Writers</span>
        </Link>
      </div>
      <div className="menu__item">
        <Link href="#">
          <span>Blog</span>
        </Link>
      </div>
      <div className="menu__item">
        <Link href="#">
          <span>Careers</span>
        </Link>
      </div>
      <div className="menu__item">
        <Link href="#">
          <span>Privacy</span>
        </Link>
      </div>
      <div className="menu__item">
        <Link href="#">
          <span>Terms</span>
        </Link>
      </div>
      <div className="menu__item">
        <Link href="#">
          <span>About</span>
        </Link>
      </div>
      <div className="menu__item">
        <Link href="#">
          <span>Knowable</span>
        </Link>
      </div>
    </div>
  )
}

export default WidgetMenu
