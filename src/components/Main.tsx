import { NumProps2 } from "../pages";
import styles from "../styles/Main.module.css";
import { AboutMe } from "./AboutMe";
import { Landing } from "./Landing";
import { Skills } from "./Skills";
export const Main = ({ num }: NumProps2) => {
  return (
    <main id="main" className={styles.main}>
      {num == 0 ? (
        <Landing />
      ) : num == 1 ? (
        <AboutMe />
      ) : num == 2 ? (
        <Skills />
      ) : (
        <section className={styles.projects}>
          <p>프로젝트 페이지</p>
        </section>
      )}
    </main>
  );
};
