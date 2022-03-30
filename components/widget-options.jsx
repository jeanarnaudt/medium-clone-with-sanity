import Link from 'next/link'

const WidgetOptions = () => {
  return (
    <div className="widget__options">
      <button className="option__button btn btn--black">
        <Link href="#">
          <span className="">Get started</span>
        </Link>
      </button>
      <button className="option__link">
        <Link href="#">
          <span>Sign In</span>
        </Link>
      </button>
    </div>
  )
}

export default WidgetOptions
