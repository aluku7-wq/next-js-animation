import Data from "../../components/Data";
import { MdKeyboardBackspace } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { carAnimation } from "../../components/Animations";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Car = () => {
  const router = useRouter();
  console.log(router);
  const id = router.query.carId;

  const singlecar = Data.find((item) => item.id === parseInt(id));

  return !singlecar ? (
    <p>loading</p>
  ) : (
    <div className={styles.carcontainer}>
      <motion.div
        className={styles.car}
        variants={carAnimation}
        animate="show"
        exit="hide"
      >
        <Link href="/">
          <div className={styles.navigateBack}>
            <MdKeyboardBackspace />
          </div>
        </Link>
        <div className={styles.imageAndText}>
          <div className={styles.imagecontainer}>
            <Image
              src={`/images/products/${singlecar.image}`}
              alt="image"
              layout="fill"
            />
          </div>
          <div className={styles.carText}>
            <h3>{singlecar.car}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              delectus ea dolore suscipit. Facilis harum dolorem, pariatur ipsa
              in adipisci!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Car;
