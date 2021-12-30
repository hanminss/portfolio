import Image from "next/image";
import lightThema from "../styles/HL.module.css";
import darkThema from "../styles/HD.module.css";
import { ThemaProps } from "./Main";

export const Skills = ({ dark }: ThemaProps) => {
  const styles = dark ? darkThema : lightThema;
  return (
    <section className={styles.skills}>
      <h1 className={styles.skillsTitle}>Skills</h1>
      <div className={styles.boxWrap}>
        <article className={styles.techBox}>
          <h2 className={styles.boxTitle}>Front End</h2>
          <div className={styles.ImgWrap}>
            <Image src="/images/html.png" width={100} height={100} alt="" />
            <Image src="/images/css.png" width={100} height={100} alt="" />
            <Image src="/images/js.png" width={100} height={100} alt="" />
            <Image src="/images/ts.png" width={100} height={100} alt="" />
            <Image src="/images/react.png" width={100} height={100} alt="" />
          </div>
        </article>
        <article className={styles.techBox}>
          <h2 className={styles.boxTitle}>Back End</h2>
          <div className={styles.ImgWrap}>
            <Image src="/images/python.png" width={100} height={100} alt="" />
            <Image src="/images/django.png" width={100} height={100} alt="" />
            <Image src="/images/node.png" width={100} height={100} alt="" />
            <Image src="/images/mysql.png" width={100} height={100} alt="" />
            <Image src="/images/mongodb.png" width={100} height={100} alt="" />
          </div>
        </article>
        <article className={styles.techBox}>
          <h2 className={styles.boxTitle}>Etc</h2>
          <div className={styles.ImgWrap}>
            <Image src="/images/git.png" width={100} height={100} alt="" />
            <Image src="/images/github.png" width={100} height={100} alt="" />
            <Image src="/images/heroku.png" width={100} height={100} alt="" />
          </div>
        </article>
      </div>
    </section>
  );
};
