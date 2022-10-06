import type { NextPage } from "next";
import { fetchAPI } from "../../lib/api";
import Link from "next/link";
import styles from "./TechnologyPage.module.css";
import { Layout } from "../../components/Layout";

const Home: NextPage = (technology: any) => {
  return (
    <Layout>
      <div className={styles.container}>
        {JSON.stringify(technology, null, 2)}
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const technologies = await fetchAPI("/technologies?populate=*");
  return {
    paths: technologies.data.map((technology: any) => ({
      params: {
        slug: technology.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  try {
    // Filter by slug
    const { data } = await fetchAPI(
      `/technologies/?filters\[slug\][$eq]=${params.slug}&populate=*`
    );

    // Grab first result
    const [technology] = data;
    return {
      props: { ...technology.attributes },
      revalidate: 1,
    };
  } catch (error) {
    return { error };
  }
}

export default Home;
