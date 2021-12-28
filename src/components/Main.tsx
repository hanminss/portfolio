import { NumProps2 } from "../pages";
import styles from "../styles/Home.module.css";
export const Main = ({ num }: NumProps2) => {
  return (
    <main>
      {num == 0 ? (
        <section className={styles.landing}>
          <p>랜딩페이지</p>
        </section>
      ) : num == 1 ? (
        <section className={styles.aboutMe}>
          <p>어바웃미 페이지</p>
        </section>
      ) : num == 2 ? (
        <section className={styles.skills}>
          <p>스킬 페이지</p>
        </section>
      ) : (
        <section className={styles.projects}>
          <p>프로젝트 페이지</p>
        </section>
      )}
    </main>
  );
};
