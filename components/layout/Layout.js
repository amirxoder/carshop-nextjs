import React from "react";

import styles from "./Layout.module.css";
import { AiFillCar } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "../../data/motion";
import Link from "next/link";
import Categories from "../module/Categories";
import { useRouter } from "next/router";

const Layout = ({ children }) => {


  return (
    <>
      <motion.header
        initial={fadeIn.hidden}
        whileInView={fadeIn.show}
        className={styles.header}
      >
        <Link href="/">
          <h1 className={styles.logo}>
            BotoCar <AiFillCar />
          </h1>
        </Link>
      </motion.header>
      <div className={styles.container}>
        
        {children}
      </div>
      <footer className={styles.footer}>
        <p>Botostart Nextjs course | All rights resereved &copy;</p>
      </footer>
    </>
  );
};

export default Layout;
``;
