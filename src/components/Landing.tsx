import { ThemaProps } from "./Main";
import { useCallback, useEffect, useState } from "react";
import lightThema from "../styles/HL.module.css";
import darkThema from "../styles/HD.module.css";

export const Landing = ({ dark }: ThemaProps) => {
  let styles = dark ? darkThema : lightThema;

  return (
    <section className={styles.landing}>
      <h1 className={styles.title}>Lorem, ipsum dolor.</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, qui?
      </p>
    </section>
  );
};
