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
      <div className={`${styles.aboutMeContainer} ${styles.fadeInBck}`}>
        <div className={styles.aboutMe}>
          <h2>About Me</h2>
          <p>
            I am a Bristol based junior developer passionate about writing clean
            and functional code. I have recently trained on an intensive 12 week
            front-end software development course with{" "}
            <a
              href="https://www.nology.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              _nology
            </a>
            .
          </p>
          <h2>Experience</h2>
          <p>
            During this course, I worked alongside other developers on project
            based work, gaining experience with the following languages and
            tools:
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
          <p>I also gained exposure to:</p>
          <ul>
            <li>Firebase (Auth, Hosting and Database)</li>
            <li>Requirements gathering</li>
            <li>Jest / Enzyme / TDD</li>
            <li>Agile practices</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutMePage;
