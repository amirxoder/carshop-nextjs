import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const route = useRouter()

  const searchHandler = () => {
    if (minPrice && maxPrice) {
      route.push(`/filter/${minPrice}/${maxPrice}`)
    } else {
      alert("Please insert minimum and maximum currecty!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <div className={styles.inputs}>
          <input
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            type={"text"}
            placeholder="Enter min-pirce"
          />
          <input
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            type={"text"}
            placeholder="Enter max-pirce"
          />
        </div>
        <button onClick={searchHandler}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
