const PostDetails = ({ ffpc }) => {
  //in this case ffpc acts as props

  return (
    <div className="post-details">
      <h4>title: {ffpc.title}</h4>
      <h4>caption: {ffpc.caption}</h4>
    </div>
  )
}

export default PostDetails