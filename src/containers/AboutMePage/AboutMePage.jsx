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
            Bristol based junior developer passionate about writing clean and
            functional code. I have recently taken a 12 week intensive front-end
            software development course with{" "}
            <a href="https://www.nology.io/" target="_blank">
              _nology
            </a>{" "}
            from January to April 2020.
          </p>
          <h2>Experience</h2>

          <p>
            During this course, I worked alongside other developers on project
            based work, developing the following skills:
          </p>
          <div>
            <FontAwesomeIcon icon={faHtml5} className={styles.fontAwesome} />
            <FontAwesomeIcon icon={faCss3Alt} className={styles.fontAwesome} />
            <FontAwesomeIcon icon={faJsSquare} className={styles.fontAwesome} />
            <FontAwesomeIcon icon={faGithub} className={styles.fontAwesome} />
            <FontAwesomeIcon icon={faSass} className={styles.fontAwesome} />
            <FontAwesomeIcon icon={faReact} className={styles.fontAwesome} />
            <FontAwesomeIcon
              icon={faBootstrap}
              className={styles.fontAwesome}
            />
            <FontAwesomeIcon icon={faYarn} className={styles.fontAwesome} />
          </div>
          <p>
            Alongside exposure to:
            <ul>
              <li>Firebase (Auth, Hosting and Database)</li>
              <li>Jest / Enzyme</li>
              <li>Agile practices</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMePage;
