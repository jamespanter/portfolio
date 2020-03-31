import React, { useEffect } from "react";
import styles from "./AboutMePage.module.scss";

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
            <ul>
              <li>HTML</li>
              <li>CSS / SCSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Source Control Firebase (Auth, Hosting and Database)</li>
              <li>Bootstrap</li>
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
