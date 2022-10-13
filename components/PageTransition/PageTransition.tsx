import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import styles from "./PageTransition.module.css";

export type PageTransitionProps = { children: React.ReactNode };

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const { asPath } = useRouter();
  return (
    <div className={styles.wrapper}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={asPath}
          variants={variants}
          initial="in"
          animate={["center", "scaleUp"]}
          exit={["scaleDown", "out"]}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const variants = {
  scaleDown: {
    scale: 0.8,
    y: 100,
    transition: {
      duration: 0.4,
    },
  },
  out: {
    x: "-100%",
    transition: {
      duration: 0.4,
      delay: 0.5,
    },
  },
  in: {
    scale: 0.8,
    y: 100,
    x: "100%",
    transition: {
      duration: 0.4,
    },
  },
  center: {
    x: 0,
    scale: 0.8,
    transformOrigin: "top",
    transition: {
      duration: 0.4,
    },
  },
  scaleUp: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.5,
    },
  },
};

const variants1 = {
  origin: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.75,
    },
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const variants2 = {
  in: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.7,
      ease: "anticipate",
    },
  },
  out: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.7,
      ease: "anticipate",
    },
  },
  inactive: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "anticipate",
    },
  },
};

export default PageTransition;
