import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Signature from './BlogDaily/Signature'
import Introduction from './BlogDaily/Introduction'
import TIL0206 from './BlogDaily/TIL0206'

const Blog = () => {
    const navigate = useNavigate();


    return (
    <div className="Daily">
        <div onClick={() => navigate("/blog/0203")}>0203</div>
        <div onClick={() => navigate("/blog/0204")}>0204</div>
        <div onClick={() => navigate("/blog/0205")}>0205</div>
        <div onClick={() => navigate("/blog/0206")}>0206</div>
        <div onClick={() => navigate("/blog/0207")}>0207</div>
        <div onClick={() => navigate("/blog/0210")}>0210</div>
        <div onClick={() => navigate("/blog/0211")}>0211</div>
        <div onClick={() => navigate("/blog/0212")}>0212</div>
        <div onClick={() => navigate("/blog/0213")}>0213</div>
        <div onClick={() => navigate("/blog/0214")}>0214</div>
        <div onClick={() => navigate("/blog/0307")}>0307</div>
        <div onClick={() => navigate("/blog/0311")}>0311</div>
        <div onClick={() => navigate("/blog/0312")}>0312</div>
        {/* <div href="/signature">0203</div> */}
    </div>
  )
}

export default Blog;