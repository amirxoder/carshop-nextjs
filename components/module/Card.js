import Image from "next/image";
import styles from "./Card.module.css";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from './../../data/motion';

const Card = ({
  id,
  name,
  model,
  year,
  location,
  price,
  image,
  category,
  distance,
}) => {
  return (
    <Link href={`/cars/${id}`}>
      <motion.div variants={fadeIn} initial='hidden' whileInView={'show'} className={styles.card}>
        <div className={styles.imgContainer}>
          <Image
            src={image}
            className={styles.cardImage}
            alt="car"
            width={130}
            height={130}
          />
        </div>
        <div className={styles.desc}>
          <h3 className={styles.name}>
            {name} - {model}
          </h3>
          <p className={styles.distance}>
            {year} - {distance}km
          </p>
        </div>
        <div className={styles.price}>
          <span>$ {price}</span>
          <span>
            {location} <MdLocationOn />
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
