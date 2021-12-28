import { NumProps } from "../../pages";
import styles from "../../styles/Header.module.css";

export const Header = ({ num, handleNumChange }: NumProps) => {
  return (
    <header className={styles.header}>
      <section className={styles.navWrap}>
        <h1 className={styles.logo} onClick={() => handleNumChange(0)}>
          hanminsss
        </h1>
        <nav className={styles.nav}>
          <ul className={styles.linkList}>
            <li>
              <a href="#" onClick={() => handleNumChange(1)}>
                About me
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleNumChange(2)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleNumChange(3)}>
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};
