import { NumProps } from "../../pages";

import darkThema from "../../styles/HD.module.css";
import lightThema from "../../styles/HL.module.css";

export const Header = ({
  dark,
  handleNumChange,
  handleDarkChange,
}: NumProps) => {
  const styles = dark ? darkThema : lightThema;
  return (
    <header className={styles.header}>
      <section className={styles.navWrap}>
        <h1 className={styles.logo} onClick={() => handleNumChange(0)}>
          hanminsss
        </h1>
        <button onClick={() => handleDarkChange()}>dark </button>

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
