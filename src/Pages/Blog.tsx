import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import TILmain from './TILmain'

const Blog = () => {
  const navigate = useNavigate();

  // const links = [
  //   { path: "/blog/0225", label: "0225 객체 지향 프로그래밍(OOP)" },
  // ]


  return (
    <div className="Daily">
      <TILmain />
      {/* {links.map(({ path, label }) => (
        <div key={path} onClick={() => navigate(path)}>{label}</div>
      ))} */}

      <div onClick={() => navigate("/blog/0311")}>0311 Research1 - Arweave에 대해서</div>

      <div onClick={() => navigate("/blog/research2")}>Research2</div>

      <div onClick={() => navigate('/blog/0402hw')}>주말 과제 예고</div>
      {/* <div href="/signature">0203</div> */}
    </div>
  )
}

export default Blog;