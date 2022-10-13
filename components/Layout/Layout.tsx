import React from "react";
import Navbar, { NavItem } from "../Navbar";
import styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
  navItems: NavItem[];
};

const Layout = ({ children, navItems }: Props) => {
  return (
    <>
      <Navbar navItems={navItems} />
      <main className={styles.container}>
        <div className={styles.wrapper}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
