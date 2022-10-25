import React from "react";
import styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.wrapper}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
