import type { NextPage } from "next";
import styles from "./TechnologyPage.module.css";
import { Layout } from "../components/Layout";
import { getTechnologies } from "../lib/api";

const TechnologyPage: NextPage = ({ technology, navItems }: any) => {
  return (
    <Layout navItems={navItems}>
      <div className={styles.container}>
        {JSON.stringify(technology, null, 2)}
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const technologies = await getTechnologies();
  return {
    paths: technologies.map((technology: any) => ({
      params: {
        slug: technology.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  try {
    // Filter by slug

    const technologies = await getTechnologies();
    const technology = technologies.find(
      (tech: any) => tech.slug === params.slug
    );

    const navItems = technologies.map((tech: any) => ({
      name: tech.name,
      slug: tech.slug,
    }));

    // Grab first result
    return {
      props: { technology, navItems },
      revalidate: 1,
    };
  } catch (error) {
    return { error };
  }
}

export default TechnologyPage;
