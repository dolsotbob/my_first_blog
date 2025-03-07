import { useEffect, useState } from "react";

import "./styles.css";

import { getProverbs } from "./storageUtil"; // Server 요청



export default function App() {

  const [proverbs, setProverbs] = useState([]);

  const [filter, setFilter] = useState("");

  const [count, setCount] = useState(0);



  useEffect(() => {

    console.log("언제 effect 함수가 불릴까요?");

    const result = getProverbs(filter);

    setProverbs(result);

  }, [filter]);



  const handleChange = (e) => {

    setFilter(e.target.value);

  };



  const handleCounterClick = () => {

    setCount(count + 1);

  };



  return (

    <div className="App">

      필터

      <input type="text" value={filter} onChange={handleChange} />

      <ul>

        {proverbs.map((prvb, i) => (

          <Proverb saying={prvb} key={i} />

        ))}

      </ul>

      <button onClick={handleCounterClick}>카운터 값: {count}</button>

    </div>

  );

}



function Proverb({ saying }) {

  return <li>{saying}</li>;

}