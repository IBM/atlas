import type { NextPage } from "next";
import Link from "next/link";
import { Layout } from "../components/Layout";
import { getTechnologies } from "../lib/api";

const Home: NextPage = ({ technologies, navItems }: any) => {
  return (
    <Layout navItems={navItems}>
      {technologies.map(({ name, slug, description, milestones }: any) => {
        return (
          <div key={description}>
            <h1>
              <Link href={`/technology/${slug}`}>
                <a style={{ textDecoration: "underline" }}>{name}</a>
              </Link>
            </h1>
            <p>{description}</p>
            <ul>
              {milestones.map((milestone: any) => {
                // const { year, strategy } = milestone.fields;
                return null;
              })}
            </ul>
          </div>
        );
      })}
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const technologies = await getTechnologies();
    const navItems = technologies.map((tech: any) => ({
      name: tech.name,
      slug: tech.slug,
    }));

    return {
      props: {
        technologies,
        navItems,
      },
    };
  } catch (error) {
    console.error(error);
    return {};
  }
}

export default Home;
