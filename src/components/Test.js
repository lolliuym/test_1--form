import React, { useState, useEffect } from "react"
import useFetching from "../hooks/useFetching";
import axios from 'axios'

const Test = () => {
  const [post, setPost] = useState([])
  const { posts } = useFetching("http://localhost:3000/students")
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault()
    const article = { id: Date.now(), name, email };

    const res = axios.post(`http://localhost:3000/students`, article)
      .then(response => {
        setPost(response.data)
        console.log(response.data)
      });
    return res.data
  }

  useEffect(() => {
    const res = axios.get('http://localhost:3000/students')
      .then(response => {
        setPost(response.data)
        console.log(response.data)
      });
    return res.data
  }, [])


  return (
    <div>
      {posts.map(post =>
        <div className=""><p>{post.name}</p>
          <span>{post.email}</span></div>

      )}
      <h1>This is Axios Get Usage with local Json File</h1>
      <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="text" placeholder="name" value={name} onChange={e => e.target.value} />
      <input type="text" placeholder="email" value={email} onChange={e => e.target.value} />
      <button type="button" onClick={handleSubmit}>Save</button>
    </div>
  )

}

export default Test
