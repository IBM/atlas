import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </main>
  );
};

export default Layout;
