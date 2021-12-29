import { useEffect } from "react";
import styles from "../styles/Landing.module.css";
export const Landing = () => {
  return (
    <section className={styles.landing}>
      <h1 className={styles.title}>Lorem, ipsum dolor.</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, qui?
      </p>
    </section>
  );
};
