import type { NextPage } from "next";
import styles from "./TechnologyPage.module.scss";
import { Layout } from "../components/Layout";
import { getTechnologies } from "../lib/api";
import { ChevronDown } from "@carbon/icons-react";
import cx from "classnames";
import Link from "next/link";

const TechnologyPage: NextPage = ({ technology, year }: any) => {
  let milestones = technology.milestones.sort(
    (a: any, b: any) => a.year - b.year
  );
  return (
    <Layout>
      <div className={styles.container}>
        <p className={styles.atlasTitle}>
          IBM
          <br />
          Technology
          <br />
          Atlas
        </p>
        <p className={styles.description}>{technology.description}</p>
        <div className={styles.sticky}>
          <h1>
            {technology.name}
            <br />
            Roadmap
          </h1>
          <p>Strategic milestones</p>
        </div>
        <div className={styles.scrolling}>
          {milestones.map((milestone: any) => {
            return (
              <div className={styles.milestone} key={milestone.year}>
                <div className={styles.yearWrapper}>
                  <h2 className={cx(styles.year)}>{milestone.year}</h2>
                </div>
                <p className={styles.milestoneSummary}>{milestone.milestone}</p>
                <p className={styles.milestoneDescription}>
                  {milestone.strategy}
                </p>
                <Link href="/" className={styles.howWillWeDoThis}>
                  <ChevronDown height="16" width="16" />
                  Learn more
                </Link>
              </div>
            );
          })}
          {/* Dummy milestone for scroll snapping */}
        </div>
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
