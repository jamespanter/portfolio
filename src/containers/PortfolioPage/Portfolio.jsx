import React, { useEffect } from "react";
import styles from "./Portfolio.module.scss";
import Card from "../../components/Card";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.portfolioContainer}>
        <h2>Portfolio</h2>
        <div className={styles.portfolio}>
          <Card
            title="To-Do List"
            description="Using firebase to fetch, add and remove data"
            url="https://to-do-list.jamespanter.co.uk/"
            imageURL="../../assets/to-do-list.PNG"
            resources="React, CSS, JavaScript"
          />
          <Card
            title="Follow The Bird"
            description="Working with audio and event listeners"
            url="public\assets\follow-the-sound.PNG"
            imageURL="../../assets/follow-the-sound.PNG"
            languages="HTML, CSS, JavaScript"
          />
          <Card
            title="Space Invaders"
            description="Code challenge focused on dynamically creating content in html"
            url="https://space-invaders.jamespanter.co.uk/"
            imageURL="../../assets/space-invaders.PNG"
            resources="HTML, CSS, JavaScript"
          />
          <Card
            title="Morse Code Translator"
            description="Working with arrays iterators"
            url="https://morse-code-translator.jamespanter.co.uk/"
            imageURL="../../assets/morse-code-translator.PNG"
            resources="HTML, CSS, JavaScript"
          />
          <Card
            title="Snake"
            description="Using html canvas with javascript"
            url="https://snake.jamespanter.co.uk/"
            imageURL="../../assets/snake.PNG"
            resources="HTML, CSS, JavaScript"
          />
          <Card
            title="Hall Of Mirrors"
            description="Using react to pass props into components"
            url="https://hall-of-mirrors.jamespanter.co.uk/"
            imageURL="../../assets/hall-of-mirrors.PNG"
            resources="HTML, CSS, JavaScript"
          />
          <Card
            title="Noughts & Crosses"
            description="Using if statements"
            url="https://noughts-and-crosses.jamespanter.co.uk/"
            imageURL="../../assets/noughts-and-crosses.PNG"
            resources="HTML, CSS, JavaScript"
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
