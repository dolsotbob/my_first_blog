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

      <div onClick={() => navigate("/blog/0307")}>0307 파이썬/타입스크립트</div>
      <div onClick={() => navigate("/blog/0311")}>0311 Research1 - Arweave에 대해서</div>
      <div onClick={() => navigate("/blog/0312")}>0312 다양한 개발 도구 1 - Ganache, Infura, Web3.js</div>
      <div onClick={() => navigate("/blog/research2")}>Research2</div>
      <div onClick={() => navigate('/blog/0313')}>0313 Dapp</div>
      <div onClick={() => navigate('/blog/0314')}>0314 Dapp - 지갑</div>
      <div onClick={() => navigate('/blog/0318')}>0318 Explorer 만들기</div>
      <div onClick={() => navigate('/blog/0321')}>0321 다양한 개발 도구 2 - Truffle과 Hardhat</div>

      <div onClick={() => navigate('/blog/0407')}>0407 컨트랙트 호출(ABI)</div>
      <div onClick={() => navigate('/blog/0408')}>0408 ERC-20</div>
      <div onClick={() => navigate('/blog/0410')}>0410 ERC-721</div>
      <div onClick={() => navigate('/blog/0414')}>0414 NFT Storage</div>
      <div onClick={() => navigate('/blog/0421')}>0421 Test-Driven Contract Development</div>
      <div onClick={() => navigate('/blog/0422')}>0422 Gass less - EIP 2612(Permit)</div>
      <div onClick={() => navigate('/blog/0423')}>0423 Gass less - EIP 2771(Meta Transactions)</div>
      <div onClick={() => navigate('/blog/0429')}>0429 Upgradable</div>
      <div onClick={() => navigate('/blog/0430')}>0430 Uniswap</div>
      <div onClick={() => navigate('/blog/0507')}>0507 Oracle</div>
      <div onClick={() => navigate('/blog/0402hw')}>주말 과제 예고</div>
      {/* <div href="/signature">0203</div> */}
    </div>
  )
}

export default Blog;