import WidgetAuthor from './widget-author'
import WidgetOptions from './widget-options'
import WidgetSearch from './widget-search'

const Sidebar = ({ post }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrap">
        <WidgetOptions />
        <WidgetSearch />
        <WidgetAuthor post={post} />
      </div>
    </div>
  )
}

export default Sidebar
