import styles from "../styles/Skills.module.css";
import Image from "next/image";
export const Skills = () => {
  return (
    <section className={styles.skills}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.boxWrap}>
        <article className={styles.techBox}>
          <h2 className={styles.boxTitle}>Front End</h2>
          <div>
            <Image src="/images/html.png" width={144} height={144} alt="" />
            <Image src="/images/css.png" width={144} height={144} alt="" />
            <Image src="/images/js.png" width={144} height={144} alt="" />
            <Image src="/images/ts.png" width={144} height={144} alt="" />
            <Image src="/images/react.png" width={144} height={144} alt="" />
          </div>
        </article>
        <article className={styles.techBox}>
          <h2 className={styles.boxTitle}>Back End</h2>
          <div>
            <Image src="/images/python.png" width={144} height={144} alt="" />
            <Image src="/images/django.png" width={144} height={144} alt="" />
            <Image src="/images/node.png" width={144} height={144} alt="" />
            <Image src="/images/mysql.png" width={144} height={144} alt="" />
            <Image src="/images/mongodb.png" width={144} height={144} alt="" />
          </div>
        </article>
        <article className={styles.techBox}>
          <h2 className={styles.boxTitle}>Etc</h2>
          <div>
            <Image src="/images/git.png" width={144} height={144} alt="" />
            <Image src="/images/github.png" width={144} height={144} alt="" />
            <Image src="/images/heroku.png" width={144} height={144} alt="" />
          </div>
        </article>
      </div>
    </section>
  );
};
