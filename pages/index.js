import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import Data from "../components/Data";
import { motion } from "framer-motion";
import {
  gridAnimation,
  cardAnimation,
  h3Animation,
} from "../components/Animations";

const Home = () => {
  return (
    <div className={styles.carsContainer}>
      <motion.h3 variants={h3Animation} animate="show" exit="hide">
        choose your car
      </motion.h3>
      <motion.div
        className={styles.cars}
        variants={gridAnimation}
        animate="show"
        exit="hide"
      >
        {Data.map((item) => {
          return (
            <Link href={`/car/${item.id}`} key={item.id}>
              <motion.div className={styles.card} variants={cardAnimation}>
                <Image
                  src={`/images/products/${item.image}`}
                  alt="image"
                  layout="fill"
                />
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Home;
