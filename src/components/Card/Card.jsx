import React from "react";
import styles from "./Card.module.scss";
import Button from "../Button";

const Card = props => {
  const { title, description, url, imageURL, resources } = props;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.portfolioCard}>
        <img src={imageURL} alt="Follow the sound" />
        <div className={styles.portfolioCardText}>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={url} target="_blank">
            <Button text="Visit" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
