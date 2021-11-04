import "../styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
