import React from "react";
import styles from "./Card.module.scss";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Card = props => {
  const {
    title,
    description,
    subDomainUrl,
    gitHubUrl,
    imageURL,
    languages
  } = props;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.portfolioCard}>
        <div className={`${styles.portfolioCardText} ${styles.slideInLeft}`}>
          <img src={imageURL} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
          <div>
            <a href={subDomainUrl} target="_blank">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className={styles.fontAwesome}
              />
            </a>
            <a href={gitHubUrl} target="_blank">
              <FontAwesomeIcon icon={faGithub} className={styles.fontAwesome} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
