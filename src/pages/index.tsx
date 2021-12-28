import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      {/* header componets */}
      <header className={styles.header}>
        <section className={styles.nav_wrap}>
          <a href="#">hanminss</a>
          <nav>
            <ul>
              <li>
                <a href="#AboutMe">about me</a>
              </li>
              <li>
                <a href="#TechSkills">tech skills</a>
              </li>
              <li>
                <a href="#Projects">projects</a>
              </li>
            </ul>
          </nav>
        </section>
      </header>
      {/* section component */}
      <section>
        <div></div>
      </section>
      {/* main compomnet */}
      <main>
        {/* about me component */}
        <section id="AboutMe"></section>
        {/* skills component */}
        <section id="TechSkills"></section>
        {/*  projects component */}
        <section id="Projects"></section>
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
