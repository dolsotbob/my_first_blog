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

    </div>
  )
}

export default Blog;