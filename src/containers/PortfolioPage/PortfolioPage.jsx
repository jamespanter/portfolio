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
            description="Group based client project built in react"
            subDomainUrl="https://vojo-bbe4f.web.app/"
            gitHubShow="false"
            gitHubUrl="https://github.com/nology-tech/vojo"
            imageURL="../../assets/vojo.PNG"
            languages={["ReactJS"]}
          />
          <Card
            title="Covid-19 stats"
            description="Using an API to get dynamic data and displaying visually"
            subDomainUrl="https://covid-tracker.jamespanter.co.uk/"
            gitHubShow="true"
            gitHubUrl="https://github.com/jamespanter/covid-tracker"
            imageURL="../../assets/covid-checker.PNG"
            languages={["ReactJS"]}
          />
          <Card
            title="Movie Database"
            description="Example tech test fetching from API with lazy loading implemented"
            subDomainUrl="https://movie-database.jamespanter.co.uk/"
            gitHubShow="true"
            gitHubUrl="https://github.com/jamespanter/movie-database"
            imageURL="../../assets/movie-database.PNG"
            languages={["ReactJS"]}
          />
          <Card
            title="To-Do List"
            description="Challenge using CRUD integration and authentication with firebase"
            subDomainUrl="https://to-do-list.jamespanter.co.uk/"
            gitHubShow="true"
            gitHubUrl="https://github.com/jamespanter/to-do-list"
            imageURL="../../assets/to-do-list.PNG"
            languages={["ReactJS"]}
          />
          <Card
            title="Follow The Sound"
            description="Game working with JS maths, arrays and HTML audio playback"
            subDomainUrl="https://follow-the-sound.jamespanter.co.uk/"
            gitHubShow="true"
            gitHubUrl="https://github.com/jamespanter/follow-the-sound"
            imageURL="../../assets/follow-the-sound.PNG"
            languages={["JS", "CSS"]}
          />
          <Card
            title="Snake"
            description="Experimental snake style game using html canvas with javascript"
            subDomainUrl="https://snake.jamespanter.co.uk/"
            gitHubShow="true"
            gitHubUrl="https://github.com/jamespanter/snake"
            imageURL="../../assets/snake.PNG"
            languages={["JS"]}
          />
          <Card
            title="Noughts & Crosses"
            description="Using if statements to add and remove classes"
            subDomainUrl="https://noughts-and-crosses.jamespanter.co.uk/"
            gitHubShow="true"
            gitHubUrl="https://github.com/jamespanter/noughts-and-crosses"
            imageURL="../../assets/noughts-and-crosses.PNG"
            languages={["JS", "HTML", "CSS"]}
          />
          <Card
            title="Space Invaders"
            description="Tech test focused on JS OOP to dynamically create content in html"
            subDomainUrl="https://space-invaders.jamespanter.co.uk/"
            gitHubShow="true"
            gitHubUrl="https://github.com/jamespanter/space-invaders"
            imageURL="../../assets/space-invaders.PNG"
            languages={["JS", "CSS"]}
          />
          <Card
            title="Morse Code Translator"
            description="Challenge using arrays iterators, styled similarly to Google translate"
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
