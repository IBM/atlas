import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

const techs = [
  { name: "Home", slug: "/" },
  { name: "AI", slug: "/technology/ai" },
  { name: "Quantum", slug: "/technology/quantum" },
];

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      {techs.map((tech) => (
        <Navlink {...tech} />
      ))}
    </nav>
  );
};

const Navlink = ({ slug, name }: { slug: string; name: string }) => {
  const { asPath } = useRouter();
  const isActive = asPath === slug;
  return (
    <Link href={slug} key={slug}>
      <a className={isActive ? styles.active : ""}>{name}</a>
    </Link>
  );
};
