import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogLists: [], isLoading: true}

  componentDidMount() {
    this.getBlogLists()
  }

  getBlogLists = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogLists: updatedData, isLoading: false})
  }

  render() {
    const {blogLists, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogLists.map(eachItem => (
            <BlogItem key={eachItem.id} blogItemDetails={eachItem} />
          ))
        )}
      </div>
    )
  }
}
export default BlogList
