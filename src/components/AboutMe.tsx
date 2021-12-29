import lightThema from "../styles/HL.module.css";
import darkThema from "../styles/HD.module.css";
import { ThemaProps } from "./Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBirthdayCake,
  faHome,
  faMobileAlt,
  faEnvelope,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

export const AboutMe = ({ dark }: ThemaProps) => {
  const styles = dark ? darkThema : lightThema;
  return (
    <section className={styles.aboutMe}>
      <h1 className={styles.aboutMeTitle}>About Me</h1>
      <div className={styles.infoCards}>
        <div className={styles.infoCard}>
          <FontAwesomeIcon
            className={styles.awesomIcon}
            icon={faUser}
            size="2x"
          />
          <div>
            <p className={styles.cardTitle}>이름</p>
            <p>임한민</p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <FontAwesomeIcon
            className={styles.awesomIcon}
            icon={faBirthdayCake}
            size="2x"
          />
          <div>
            <p className={styles.cardTitle}>생년월일</p>
            <p>96.10.31</p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <FontAwesomeIcon
            className={styles.awesomIcon}
            icon={faHome}
            size="2x"
          />
          <div>
            <p className={styles.cardTitle}>거주지</p>
            <p>경기도 수원시 팔달구</p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <FontAwesomeIcon
            className={styles.awesomIcon}
            icon={faMobileAlt}
            size="2x"
          />
          <div>
            <p className={styles.cardTitle}>연락처</p>
            <p>010-9789-2781</p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <FontAwesomeIcon
            className={styles.awesomIcon}
            icon={faEnvelope}
            size="2x"
          />
          <div>
            <p className={styles.cardTitle}>이메일</p>
            <p>gksals6464@naver.com</p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <FontAwesomeIcon
            className={styles.awesomIcon}
            icon={faGraduationCap}
            size="2x"
          />
          <div>
            <p className={styles.cardTitle}>학력</p>
            <p>경기대학교 컴퓨터 공학</p>
          </div>
        </div>

        {/* <FontAwesomeIcon icon={faBirthdayCake} />
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={faMobileAlt} />
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faGraduationCap} /> */}
      </div>
    </section>
  );
};
