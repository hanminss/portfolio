import type { NextPage } from "next";
import { Header } from "../components/layouts/";
import { useState } from "react";
import { Main } from "../components/Main";

export interface NumProps {
  num: number;
  handleNumChange: Function;
}
export interface NumProps2 {
  num: number;
}

const Home: NextPage = () => {
  const [num, setNum] = useState(1);
  const handleNumChange = (x: number) => {
    setNum(x);
  };
  return (
    <>
      <Header num={num} handleNumChange={handleNumChange}></Header>
      <Main num={num} />
      <footer>
        <p>&copy; hanminsss</p>
        <a href="#">github</a>
        <a href="#">blog</a>
      </footer>
    </>
  );
};

export default Home;
