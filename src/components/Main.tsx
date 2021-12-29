import { NumProps2 } from "../pages";
import { AboutMe } from "./AboutMe";
import { Landing } from "./Landing";
import { Skills } from "./Skills";
import darkThema from "../styles/HD.module.css";
import lightThema from "../styles/HL.module.css";

export interface ThemaProps {
  dark: boolean;
}

export const Main = ({ num, dark }: NumProps2) => {
  const styles = dark ? darkThema : lightThema;
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
