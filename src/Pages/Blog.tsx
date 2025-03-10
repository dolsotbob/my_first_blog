import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Signature from './BlogDaily/Signature'
import Introduction from './BlogDaily/Introduction'

const Blog = () => {
    const navigate = useNavigate();


    return (
    <div className="Daily">
        <div onClick={() => navigate("/blog/0202")}>0202</div>
        <div onClick={() => navigate("/blog/0204")}>0204</div>
        {/* <div href="/signature">0203</div> */}
    </div>
  )
}

export default Blog;