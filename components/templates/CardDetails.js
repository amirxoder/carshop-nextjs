import Image from "next/image";
import React from "react";
import styles from "./CarDetails.module.css";

import { GiFactory } from "react-icons/gi";
import { IoLogoModelS } from "react-icons/io";
import { FaFirstOrderAlt } from "react-icons/fa";
import { TbRoad } from "react-icons/tb";
import { MdOutlineAttachMoney } from "react-icons/md";
import Link from "next/link";

const CardDetails = ({
  name,
  model,
  year,
  distance,
  location,
  price,
  image,
  category,
  description,
}) => {
  return (
    <div className={styles.container}>
      <Image
        src={image}
        width={500}
        height={500}
        alt="car"
        className={styles.img}
      />

      <p className={styles.name}>
        {name} {model}
      </p>

      <div className={styles.details}>
        <div className={styles.detail}>
          <p>
            <GiFactory /> Company
          </p>
          <p>{name}</p>
        </div>

        <div className={styles.detail}>
          <p>
            <IoLogoModelS /> Model
          </p>
          <p>{model}</p>
        </div>

        <div className={styles.detail}>
          <p>
            <FaFirstOrderAlt /> First Registration
          </p>
          <p>{year}</p>
        </div>

        <div className={styles.detail}>
          <p>
            <TbRoad /> Kms driven
          </p>
          <p>{distance}km</p>
        </div>
      </div>

      <div className={styles.desc}>
        <h4>Extra Information</h4>
        <p>{description}</p>
      </div>

      <div className={styles.price}>
        <p>
          <MdOutlineAttachMoney className={styles.priceIcon} /> Price:
        </p>
        <p>{price}</p>
      </div>
      <div className={styles.btns}>
        <Link href='/cars'>Back</Link>
        <button>Buy</button>
        </div>
    </div>
  );
};

export default CardDetails;
