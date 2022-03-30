import React from 'react'

const WidgetTopics = () => {
  return (
    <div className="widget__topics">
      <h4 className="topics__title">Discover more of what matters to you</h4>
      <div className="topics__content">
        <button className="topic">
          <span>Self</span>
        </button>
        <button className="topic">
          <span>Relationships</span>
        </button>
        <button className="topic">
          <span>Data Science</span>
        </button>
        <button className="topic">
          <span>Programming</span>
        </button>
        <button className="topic">
          <span>Productivity</span>
        </button>
        <button className="topic">
          <span>Javascript</span>
        </button>
        <button className="topic">
          <span>Machine Learning</span>
        </button>
        <button className="topic">
          <span>Politics</span>
        </button>
        <button className="topic">
          <span>Health</span>
        </button>
      </div>
    </div>
  )
}

export default WidgetTopics
