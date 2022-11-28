import type { NextPage } from "next";
import styles from "./TechnologyPage.module.scss";
import { Layout } from "../components/Layout";
import { getTechnologies } from "../lib/api";
import { ChevronDown, ChevronUp } from "@carbon/icons-react";
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
        <div className={styles.header}>
          <h1 className={styles.mobileTechnologyTitle}>
            IBM {technology.name} Roadmap
          </h1>
          <p className={styles.description}>{technology.description}</p>
        </div>

        <div className={styles.sticky}>
          <h1 className={styles.technologyTitle}>
            {technology.name}
            <br />
            Roadmap
          </h1>
          <p className={styles.strategicMilestones}>Strategic milestones</p>
        </div>
        <div className={styles.scrolling}>
          {year ? (
            <SingleMilestone
              technology={technology}
              milestones={milestones}
              year={year}
            />
          ) : (
            <AllMilestones technology={technology} milestones={milestones} />
          )}
        </div>
      </div>
    </Layout>
  );
};

const SingleMilestone = ({ milestones, year, technology }: any) => {
  const milestone = milestones.find(
    (milestone: any) => milestone.year === year
  );

  return (
    <div className={cx(styles.milestone, styles.single)} key={milestone.year}>
      <div className={styles.yearWrapper}>
        <h2 className={cx(styles.year)}>{milestone.year}</h2>
      </div>
      <div className={styles.milestoneStatement}>
        <p className={styles.milestoneSummary}>{milestone.milestone}</p>
        <p className={styles.milestoneDescription}>{milestone.strategy}</p>
      </div>
      <div className={styles.milestoneStatement}>
        <p className={styles.milestoneSummary}>
          Why this matters for our clients and the world
        </p>
        <p className={styles.milestoneDescription}>{milestone.significance}</p>
      </div>
      <div className={styles.milestoneStatement}>
        <p className={styles.milestoneSummary}>
          The technologies and innovations that will make this possible
        </p>
        <p className={styles.milestoneDescription}>{milestone.innovations}</p>
      </div>
      <div className={styles.milestoneStatement}>
        <p className={styles.milestoneSummary}>
          What platform or infrastructure will these advancements be delivered
          on
        </p>
        <p className={styles.milestoneDescription}>{milestone.platforms}</p>
      </div>
      <Link href={`/${technology.slug}`} className={styles.howWillWeDoThis}>
        <ChevronUp height="16" width="16" />
        {`${technology.name} roadmap`}
      </Link>
    </div>
  );
};

const AllMilestones = ({ milestones, technology }: any) => {
  return milestones.map((milestone: any) => {
    return (
      <div className={styles.milestone} key={milestone.year}>
        <div className={styles.yearWrapper}>
          <h2 className={cx(styles.year)}>{milestone.year}</h2>
        </div>
        <p className={styles.milestoneSummary}>{milestone.milestone}</p>
        <p className={styles.milestoneDescription}>{milestone.strategy}</p>
        <Link
          href={`/${technology.slug}/${milestone.year}`}
          className={styles.howWillWeDoThis}
        >
          <ChevronDown height="16" width="16" />
          Learn more
        </Link>
      </div>
    );
  });
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
