import React, { useEffect } from "react";
import styles from "./PortfolioPage.module.scss";
import Card from "../../components/Card";

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={`${styles.portfolioContainer} ${styles.fadeInBck}`}>
        <h2>Portfolio</h2>
        <div className={styles.portfolio}>
          <Card
            title="Vojo"
            description="Website for a group based client project providing the user a personalized diet plan"
            subDomainUrl="https://vojo-bbe4f.web.app/"
            gitHubShow="false"
            gitHubUrl="https://github.com/nology-tech/vojo"
            imageURL="../../assets/vojo.PNG"
            languages={["ReactJS"]}
          />
          <Card
            title="Covid-19 Statistics"
            description="Website providing COVID statistics from an API and displaying in charts"
            subDomainUrl="https://covid-tracker.jamespanter.co.uk/"
            gitHubShow="true"
            gitHubUrl="https://github.com/jamespanter/covid-tracker"
            imageURL="../../assets/covid-checker.PNG"
            languages={["ReactJS"]}
          />
          <Card
            title="Movie Database"
            description="Movie database fetching from an API with lazy loading implemented"
            subDomainUrl="https://movie-database.jamespanter.co.uk/"
            gitHubShow="true"
            gitHubUrl="https://github.com/jamespanter/movie-database"
            imageURL="../../assets/movie-database.PNG"
            languages={["ReactJS"]}
          />
          <Card
            title="Whats the time?"
            description="World clock application fetching from an API"
            subDomainUrl="https://whats-the-time.jamespanter.co.uk/"
            gitHubShow="true"
            gitHubUrl="https://github.com/jamespanter/whats-the-time"
            imageURL="../../assets/whats-the-time.PNG"
            languages={["ReactJS"]}
          />
          <Card
            title="To-Do List"
            description="To-do list utilizing CRUD and authentication in firebase"
            subDomainUrl="https://to-do-list.jamespanter.co.uk/"
            gitHubShow="true"
            gitHubUrl="https://github.com/jamespanter/to-do-list"
            imageURL="../../assets/to-do-list.PNG"
            languages={["ReactJS"]}
          />
          <Card
            title="Follow The Sound"
            description="Game using JS maths to calculate HTML audio playback rate"
            subDomainUrl="https://follow-the-sound.jamespanter.co.uk/"
            gitHubShow="true"
            gitHubUrl="https://github.com/jamespanter/follow-the-sound"
            imageURL="../../assets/follow-the-sound.PNG"
            languages={["JS", "CSS"]}
          />
          <Card
            title="Bingo Roller"
            description="90 Ball Bingo Roller"
            subDomainUrl="https://bingo.jamespanter.co.uk/"
            gitHubShow="true"
            gitHubUrl="https://github.com/jamespanter/bingo"
            imageURL="../../assets/bingo.PNG"
            languages={["JS", "HTML", "CSS"]}
          />
          <Card
            title="Snake"
            description="Experimental snake style game exploring html animation with javascript"
            subDomainUrl="https://snake.jamespanter.co.uk/"
            gitHubShow="true"
            gitHubUrl="https://github.com/jamespanter/snake"
            imageURL="../../assets/snake.PNG"
            languages={["JS"]}
          />
          <Card
            title="Noughts & Crosses"
            description="Game using if statements to add and remove styles to HTML elements"
            subDomainUrl="https://noughts-and-crosses.jamespanter.co.uk/"
            gitHubShow="true"
            gitHubUrl="https://github.com/jamespanter/noughts-and-crosses"
            imageURL="../../assets/noughts-and-crosses.PNG"
            languages={["JS", "HTML", "CSS"]}
          />
          <Card
            title="Morse Code Translator"
            description="Translator using arrays iterators, styled similarly to Google translate"
            subDomainUrl="https://morse-code-translator.jamespanter.co.uk/"
            gitHubShow="true"
            gitHubUrl="https://github.com/jamespanter/morse-code-translator"
            imageURL="../../assets/morse-code-translator.PNG"
            languages={["JS", "HTML", "CSS"]}
          />
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
