import { Search, Switcher } from "@carbon/icons-react";
import {
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
} from "@carbon/react";
import Link from "next/link";
import logo from "./logo.png";

import styles from "./Header.module.scss";

const AtlasHeader = () => (
  <Header aria-label="IBM Technology Atlas">
    <div className={styles.logoWrapper}>
      <img className={styles.logo} src={logo.src} alt="IBM 8 Bar Logo" />
    </div>
    <HeaderNavigation>
      <Link passHref href="https://research.ibm.com">
        <HeaderMenuItem>10 Year Vision</HeaderMenuItem>
      </Link>
      <HeaderMenu aria-label="Link 4" menuLinkName="Roadmaps">
        <Link href="/ai" passHref>
          <HeaderMenuItem>AI</HeaderMenuItem>
        </Link>
        <Link href="/automation" passHref>
          <HeaderMenuItem>Automation</HeaderMenuItem>
        </Link>
        <Link href="/data" passHref>
          <HeaderMenuItem>Data</HeaderMenuItem>
        </Link>
        <Link href="/hybrid-cloud" passHref>
          <HeaderMenuItem>Hybrid Cloud</HeaderMenuItem>
        </Link>
        <Link href="/quantum" passHref>
          <HeaderMenuItem>Quantum</HeaderMenuItem>
        </Link>
        <Link href="/security" passHref>
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
