import type { NextPage } from "next";
import { Header } from "../components/layouts/";
import { useEffect, useState } from "react";
import { Main } from "../components/Main";

export interface NumProps {
  dark: boolean;
  handleNumChange: Function;
  handleDarkChange: Function;
}
export interface NumProps2 {
  num: number;
}

const Home: NextPage = () => {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const handleNumChange = (x: number) => {
    setNum(x);
  };
  const handleDarkChange = () => {
    setDark(!dark);
    console.log(dark);
  };

  return (
    <>
      <Header
        dark={dark}
        handleNumChange={handleNumChange}
        handleDarkChange={handleDarkChange}
      ></Header>
      <Main num={num} />
      {/* <footer id="xx" className="abc">
        <p>&copy; hanminsss</p>
        <a href="#">github</a>
        <a href="#">blog</a>
      </footer> */}
    </>
  );
};

export default Home;
