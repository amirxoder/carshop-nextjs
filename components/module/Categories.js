import React, { useEffect, useState } from "react";

import Link from "next/link";
import styles from "./Categories.module.css";

// Icons
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Hatchback from "./../icons/Hatchback";
import Sport from "./../icons/Sport";
import { useRouter } from "next/router";

const category = [
  { icon: Sedan, name: "Sedan" },
  { icon: Suv, name: "Suv" },
  { icon: Hatchback, name: "Hatchback" },
  { icon: Sport, name: "Sport" },
];

const Categories = () => {
  const route = useRouter();
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (route.pathname === "/") {
      setActive(null);
    }
  }, [route.pathname]);

  const changeActiveItem = (activeItem) => {
    setActive(activeItem);
  };

  return (
    <div className={styles.container}>
      <div className={styles.categoryBtns}>
        {category.map((item, index) => (
          <Link
            key={index}
            href={`/categories/${item.name.toLowerCase()}`}
            className={`${styles.btn} ${active === item.name && styles.active}`}
            onClick={() => changeActiveItem(item.name)}
          >
            {item.name}
            <item.icon className={styles.carIcon} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
