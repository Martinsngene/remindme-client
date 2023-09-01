import { Button } from "../buttons";
import { CardPropsI } from "../interface";
import styles from "./styles.module.css";

const Card = ({ name, description, onClick, className }: CardPropsI) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div>
        <div className={styles.counter_container}>{100}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.cardDescriptionContainer}>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.cardLinkContainer}>
        <Button fill='fill' onClick={onClick}>
          view
        </Button>
      </div>
    </div>
  );
};

export default Card;
