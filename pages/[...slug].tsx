import type { NextPage } from "next";
import styles from "./TechnologyPage.module.css";
import { Layout } from "../components/Layout";
import { getTechnologies } from "../lib/api";
import cx from "classnames";

const TechnologyPage: NextPage = ({ technology, year }: any) => {
  let milestones = technology.milestones.sort(
    (a: any, b: any) => a.year - b.year
  );

  return (
    <Layout>
      <div className={styles.container}>
        <h1>{technology.name}</h1>
        <p>{technology.description}</p>
        {milestones.map((milestone: any) => {
          return (
            <div key={milestone.year}>
              <h2 className={cx(milestone.year === year && styles.active)}>
                {milestone.year}
              </h2>
              <p>{milestone.milestone}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

const getPathsForTechnology = (technology: any) => {
  const { slug, milestones } = technology;
  return [
    {
      params: {
        slug: [slug],
      },
    },
    ...milestones.map((milestone: any) => {
      return {
        params: {
          slug: [slug, milestone.year],
        },
      };
    }),
  ];
};

export async function getStaticPaths() {
  const technologies = await getTechnologies();
  const paths = technologies.reduce((acc: any, technology: any) => {
    return [...acc, ...getPathsForTechnology(technology)];
  }, []);

  console.log(JSON.stringify(paths, null, 2));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  try {
    // Filter by slug

    const technologies = await getTechnologies();
    const technology = technologies.find(
      (tech: any) => tech.slug === params.slug[0]
    );

    // Grab first result
    return {
      props: { technology, year: params.slug[1] || null },
      revalidate: 1,
    };
  } catch (error) {
    return { error };
  }
}

export default TechnologyPage;
