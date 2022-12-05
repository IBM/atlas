import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { getTechnologies } from "../lib/api";
import styles from "../styles/Home.module.css";
import { Atlas } from "../components/Atlas";
import { MobileAtlas } from "../components/MobileAtlas";

const Home: NextPage = ({ technologies }: any) => {
  return (
    <>
      <Head>
        <title>IBM Technology Atlas</title>
      </Head>
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h1 className={styles.heading}>
              IBM
              <br />
              <span>
                Technology
                <br />
                Atlas
              </span>
            </h1>
            <p className={styles.subheading}>
              We are writing the next chapter in Computing with six technology
              roadmaps that will bring a new era of performance and efficiency
              to information technology and business.
            </p>
          </div>
          <Atlas technologies={technologies} />
          <MobileAtlas />
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  try {
    const technologies = await getTechnologies();

    return {
      props: {
        technologies,
      },
    };
  } catch (error) {
    console.error(error);
    return {};
  }
}

export default Home;
