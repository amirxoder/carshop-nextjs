import Link from "next/link";
import React from "react";
import Card from "./../module/Card";

import styles from "./CarsList.module.css";

const CarsList = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}

      {/* <Link href="/cars">
        <div className={styles.back}>Back</div>
      </Link> */}
    </div>
  );
};

export default CarsList;
