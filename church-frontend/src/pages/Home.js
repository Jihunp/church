import { useEffect, useState } from "react"

//components
import PostDetails from "../components/postDetails"


export default function Home() {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {

      const responseData = await fetch("/api/ffpc")
      
      const json = await responseData.json()
      if(responseData.ok) {
        setPosts(json)
      }
    }
    fetchPosts()
  }, [])

  return (
    <div className="home">
      <div className="posts">
        {/* 
        {posts && posts.map((ffpc) => (
          <PostDetails key={ffpc._id} ffpc={ffpc}/>
        ))}
        */}
      </div>
      <h1> Home</h1>
    </div>
  )

}