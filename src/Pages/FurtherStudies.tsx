import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

const FurtherStudies = () => {
  const navigate = useNavigate();

  return (
    <div className="furtherStudies">
      <div onClick={() => navigate("/furtherstudies/0311")}>0311 Arweave</div>
      <div onClick={() => navigate("/furtherstudies/0313")}>0313 Satoshi Airlines</div>
      <div onClick={() => navigate("/furtherstudies/0530")}>0530 consensus</div>
      <div onClick={() => navigate("/furtherstudies/0602")}>0602 Contract Security</div>
      <div onClick={() => navigate("/furtherstudies/0604")}>0604 프로젝트 준비</div>
    </div>
  )
}

export default FurtherStudies
