import { Search, Switcher } from "@carbon/icons-react";
import {
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  HeaderName,
} from "@carbon/react";
import Link from "next/link";
import logo from "./logo.png";

import styles from "./Header.module.scss";

const AtlasHeader = () => (
  <Header className={styles.headerWrapper} aria-label="IBM Technology Atlas">
    <Link className={styles.logoWrapper} href="/">
      <img className={styles.logo} src={logo.src} alt="IBM 8 Bar Logo" />
    </Link>
    <div className={styles.headerName}>
      <HeaderName href="/" prefix="IBM">
        Research Technology Atlas
      </HeaderName>
    </div>
    <HeaderNavigation aria-label="IBM Technology Atlas">
      {/* <Link passHref href="https://research.ibm.com" legacyBehavior>
        <HeaderMenuItem>10 Year Vision</HeaderMenuItem>
      </Link> */}
      <HeaderMenu aria-label="Link 4" menuLinkName="Roadmaps">
        <Link href="/ai" passHref legacyBehavior>
          <HeaderMenuItem>AI</HeaderMenuItem>
        </Link>
        <Link href="/automation" passHref legacyBehavior>
          <HeaderMenuItem>Automation</HeaderMenuItem>
        </Link>
        <Link href="/data" passHref legacyBehavior>
          <HeaderMenuItem>Data</HeaderMenuItem>
        </Link>
        <Link href="/hybrid-cloud" passHref legacyBehavior>
          <HeaderMenuItem>Hybrid Cloud</HeaderMenuItem>
        </Link>
        <Link href="/quantum" passHref legacyBehavior>
          <HeaderMenuItem>Quantum</HeaderMenuItem>
        </Link>
        <Link href="/security" passHref legacyBehavior>
          <HeaderMenuItem>Security</HeaderMenuItem>
        </Link>
      </HeaderMenu>
    </HeaderNavigation>
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
        <Search />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
        <Switcher />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
);

export default AtlasHeader;
