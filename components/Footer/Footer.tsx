import Link from "next/link";
import styles from "./Footer.module.scss";
import logo from "../Header/logo.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link className={styles.logoWrapper} href="/">
        <img className={styles.logo} src={logo.src} alt="IBM 8 Bar Logo" />
      </Link>
    </div>
  );
};

export default Footer;
