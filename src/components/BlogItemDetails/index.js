import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    console.log(match)
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      topic: data.topic,
      author: data.author,
      content: data.content,
    }
    console.log(updatedData)
    this.setState({blogItemDetails: updatedData, isLoading: false})
  }

  renderTheDetails = () => {
    const {blogItemDetails} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogItemDetails

    return (
      <div className="blog-details-info">
        <h1 className="blog-details-title">{title}</h1>
        <div className="author-details-container">
          <img className="author-image" src={avatarUrl} alt={author} />
          <p>{author}</p>
        </div>
        <img className="blog-image-ele" src={imageUrl} alt={title} />
        <p className="blog-content-ele">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderTheDetails()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
