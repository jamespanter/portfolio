import React from "react";
import styles from "./Card.module.scss";
import Button from "../Button";

const Card = props => {
  const { title, description, url, imageURL } = props;

  return (
    <div className={styles.cardContainer}>
      <div class="portfolio-card">
        <img src="../../assets/follow-the-sound.PNG" alt="Follow the sound" />
        <div class="portfolio-card-text slide-in-left-two">
          <h3>Follow the sound</h3>
          <p>Working with audio and event listeners</p>
          <a href="https://follow-the-sound.jamespanter.co.uk/" target="_blank">
            <Button />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
