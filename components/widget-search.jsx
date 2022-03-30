import SearchIcon from '../assets/search-icon.svg'

const WidgetSearch = () => {
  return (
    <div className="widget__search">
      <div className="search">
        <span>
          <SearchIcon />
        </span>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  )
}

export default WidgetSearch
