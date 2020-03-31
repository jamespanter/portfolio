import React, { useEffect } from "react";
import styles from "./AboutMePage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faGithub,
  faSass,
  faReact,
  faBootstrap,
  faYarn
} from "@fortawesome/free-brands-svg-icons";

const AboutMePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.aboutMeContainer}>
        <div className={styles.aboutMe}>
          <h2>About Me</h2>
          <p>
            Bristol based junior developer. I have recently taken a 12 week
            intensive front-end software development course in Bristol – from
            January to April 2020. During this course, I have learnt to use:
          </p>
          <h2>Experience</h2>
          <FontAwesomeIcon icon={faHtml5} className={styles.fontAwesome} />
          <FontAwesomeIcon icon={faCss3Alt} className={styles.fontAwesome} />
          <FontAwesomeIcon icon={faJsSquare} className={styles.fontAwesome} />
          <FontAwesomeIcon icon={faGithub} className={styles.fontAwesome} />
          <FontAwesomeIcon icon={faSass} className={styles.fontAwesome} />
          <FontAwesomeIcon icon={faReact} className={styles.fontAwesome} />
          <FontAwesomeIcon icon={faBootstrap} className={styles.fontAwesome} />
          <FontAwesomeIcon icon={faYarn} className={styles.fontAwesome} />
          <p>
            <li>Firebase (Auth, Hosting and Database)</li>
            <li>Jest / Enzyme</li>
            <li>Agile practices</li>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMePage;
