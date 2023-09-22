import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, title, imageUrl, author, avatarUrl, topic} = blogItemDetails

  return (
    <Link to={`/blogs/${id}`}>
      <div className="item-container">
        <img className="item-image" src={imageUrl} alt={`item${id}`} />
        <div>
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="author-info">
            <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
