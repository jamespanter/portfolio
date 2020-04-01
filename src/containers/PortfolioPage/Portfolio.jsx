import React, { useEffect } from "react";
import styles from "./Portfolio.module.scss";
import Card from "../../components/Card";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={`${styles.portfolioContainer} ${styles.slideInLeft}`}>
        <h2>Portfolio</h2>
        <div className={styles.portfolio}>
          <Card
            title="Vojo"
            description="Group based client project built in react"
            subDomainUrl="https://vojo-bbe4f.web.app/"
            gitHubUrl="https://github.com/nology-tech/vojo"
            imageURL="../../assets/vojo.PNG"
            languages="React JS"
          />
          <Card
            title="To-Do List"
            description="Challenge using CRUD integration and authentication with firebase"
            subDomainUrl="https://to-do-list.jamespanter.co.uk/"
            gitHubUrl="https://github.com/jamespanter/to-do-list"
            imageURL="../../assets/to-do-list.PNG"
            languages="React JS"
          />
          <Card
            title="Follow The Sound"
            description="Game working with JS maths and HTML audio playback"
            subDomainUrl="https://follow-the-sound.jamespanter.co.uk/"
            gitHubUrl="https://github.com/jamespanter/follow-the-sound"
            imageURL="../../assets/follow-the-sound.PNG"
            languages="HTML, JavaScript"
          />
          <Card
            title="Space Invaders"
            description="Code challenge focused on OOP using JavaScript to dynamically creating content in html"
            subDomainUrl="https://space-invaders.jamespanter.co.uk/"
            gitHubUrl="https://github.com/jamespanter/space-invaders"
            imageURL="../../assets/space-invaders.PNG"
            languages="HTML, CSS, JavaScript"
          />
          <Card
            title="Morse Code Translator"
            description="Working with arrays iterators"
            subDomainUrl="https://morse-code-translator.jamespanter.co.uk/"
            gitHubUrl="https://github.com/jamespanter/morse-code-translator"
            imageURL="../../assets/morse-code-translator.PNG"
            languages="HTML, CSS, JavaScript"
          />
          <Card
            title="Snake"
            description="Using html canvas with javascript"
            subDomainUrl="https://snake.jamespanter.co.uk/"
            gitHubUrl="https://github.com/jamespanter/snake"
            imageURL="../../assets/snake.PNG"
            languages="HTML, JavaScript"
          />
          <Card
            title="Hall Of Mirrors"
            description="Using react to pass props into components"
            subDomainUrl="https://hall-of-mirrors.jamespanter.co.uk/"
            gitHubUrl="https://github.com/jamespanter/hall-of-mirrors"
            imageURL="../../assets/hall-of-mirrors.PNG"
            languages="React JS"
          />
          <Card
            title="Noughts & Crosses"
            description="Using if statements"
            subDomainUrl="https://noughts-and-crosses.jamespanter.co.uk/"
            gitHubUrl="https://github.com/jamespanter/noughts-and-crosses"
            imageURL="../../assets/noughts-and-crosses.PNG"
            languages="HTML, CSS, JavaScript"
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
