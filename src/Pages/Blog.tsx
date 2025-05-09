import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import TILmain from './TILmain'

const Blog = () => {
  const navigate = useNavigate();


  return (
    <div className="Daily">
      <TILmain />
      <div onClick={() => navigate("/blog/0214")}>0214 Javascript 1</div>
      <div onClick={() => navigate("/blog/0217")}>0217 Javascript 2</div>
      <div onClick={() => navigate("/blog/0218")}>0218 계산기 만들기</div>
      <div onClick={() => navigate("/blog/0219")}>0219 Javascript 3</div>
      <div onClick={() => navigate("/blog/0220")}>0220 Javascript 4</div>
      <div onClick={() => navigate("/blog/0221")}>0221 DOM</div>
      <div onClick={() => navigate("/blog/0224")}>0224 Javascript 5</div>
      <div onClick={() => navigate("/blog/0225")}>0225 객체 지향 프로그래밍(OOP)</div>
      <div onClick={() => navigate("/blog/0226")}>0226 심화 - 비동기</div>
      <div onClick={() => navigate("/blog/0227")}>0227 심화 - React 기초</div>
      <div onClick={() => navigate("/blog/0228")}>0228 심화 - ReactSPA</div>
      <div onClick={() => navigate("/blog/0304")}>0304 심화 - React State & Props</div>
      <div onClick={() => navigate("/blog/0305")}>0305 HTT/네트워크</div>
      <div onClick={() => navigate("/blog/0306")}>0306 React 클라이언트 Ajax 요청</div>
      <div onClick={() => navigate("/blog/0307")}>0307 파이썬/타입스크립트</div>
      <div onClick={() => navigate("/blog/0311")}>0311 Research1 - Arweave에 대해서</div>
      <div onClick={() => navigate("/blog/0312")}>0312 다양한 개발 도구 1 - Ganache, Infura, Web3.js</div>
      <div onClick={() => navigate("/blog/research2")}>Research2</div>
      <div onClick={() => navigate('/blog/0313')}>0313 Dapp</div>
      <div onClick={() => navigate('/blog/0314')}>0314 Dapp - 지갑</div>
      <div onClick={() => navigate('/blog/0318')}>0318 Explorer 만들기</div>
      <div onClick={() => navigate('/blog/0321')}>0321 다양한 개발 도구 2 - Truffle과 Hardhat</div>
      <div onClick={() => navigate('/blog/0324')}>0324 Solidity - 기본 문법 1 - 원시 타입</div>
      <div onClick={() => navigate('/blog/0325')}>0325 Solidity - 기본 문법 2 - 참조 타입</div>
      <div onClick={() => navigate('/blog/0326')}>0326 Solidity - 기본 문법 3 - 변수와 함수</div>
      <div onClick={() => navigate('/blog/0327')}>0327 Solidity 기본 문법 4 - 주요 전역 변수와 전역 함수</div>
      <div onClick={() => navigate('/blog/0328')}>0328 Solidity 기본 문법 5 - 데이터 타입 심화</div>
      <div onClick={() => navigate('/blog/0331')}>0331 Solidity 실습 1 - Getter & Setter</div>
      <div onClick={() => navigate('/blog/0401')}>0401 Solidity 실습 2 - 구조체의 Getter & Setter</div>
      <div onClick={() => navigate('/blog/0402')}>0402 Solidity 실습 3 - 테스트의 중요성</div>
      <div onClick={() => navigate('/blog/0403')}>0403 Solidity 실습 4 - Vault & Bank 컨트랙트</div>
      <div onClick={() => navigate('/blog/0404')}>0404 Solidity 실습 5 - Interface, Library, Abstract Contract</div>
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
      <div onClick={() => navigate('/blog/0509')}>0509 Server Intro</div>
      <div onClick={() => navigate('/blog/0402hw')}>주말 과제 예고</div>
      {/* <div href="/signature">0203</div> */}
    </div>
  )
}

export default Blog;