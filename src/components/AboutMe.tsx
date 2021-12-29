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
      <div>
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faBirthdayCake} />
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={faMobileAlt} />
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faGraduationCap} />
      </div>
    </section>
  );
};
