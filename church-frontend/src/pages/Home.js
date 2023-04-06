import { useEffect, useState } from "react"
//import EM from "../assets/EM.jpg"
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
    <div id="home-backdrop" className="home">
      <div className="posts">
        {/* <img id="landing-photo" src={require("../assets/EM.jpg")} alt="group EM" /> */}
        {/* 
        {posts && posts.map((ffpc) => (
          <PostDetails key={ffpc._id} ffpc={ffpc}/>
        ))}
        */}
      </div>
      <div></div>
      <h1> Home</h1>
    </div>
  )

}