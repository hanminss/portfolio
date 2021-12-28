import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import MenuImg from "../images/menubar.png";
import { useState } from "react";
const Home: NextPage = () => {
  return (
    <>
      {/* header componets */}
      <header className={styles.header}>
        <section className={styles.navWrap}>
          <h1 className={styles.logo}>hanminsss</h1>
          <nav className={styles.nav}>
            <ul className={styles.linkList}>
              <li>
                <a href="#">About me</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </nav>
        </section>
      </header>
      {/* main compomnet */}
      <main>
        {/* about me component */}
        <section className={styles.aboutMe}></section>
        {/* skills component */}
        <section className={styles.skills}></section>
        {/*  projects component */}
        <section className={styles.projects}></section>
      </main>
      <footer>
        <p>&copy; hanminsss</p>
        <a href="#">github</a>
        <a href="#">blog</a>
      </footer>
    </>
  );
};

export default Home;
