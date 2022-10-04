import type { NextPage } from 'next'
import Link from 'next/link'
import { fetchAPI } from "../lib/api";

const Home: NextPage = (props: any) => {
  return (
    <main>
      {props.technologies.map(({ id, attributes }: any) => {
        const { name, slug, description, milestones } = attributes;
        return <div key={`${id}-${name}`}>
          <h1><Link href={`/technology/${slug}`}><a style={{ textDecoration: 'underline' }}>{name}</a></Link></h1>
          <p>{description}</p>
          <ul>
            {milestones.map(({ year, strategy }: any) => {
              return <li key={`${name}–${year}`}>{`${year} – ${strategy}`}</li>
            })}
          </ul>
        </div>
      })}
    </main>
  )
}

export async function getStaticProps() {
  try {
    const { data: technologies } = await fetchAPI("/technologies?populate=*");

    return {
      props: {
        technologies
      },
    };
  } catch (error) {
    console.error(error);
    return {}
  }
}

export default Home
