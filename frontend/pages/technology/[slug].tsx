import type { NextPage } from 'next'
import { fetchAPI } from "../../lib/api";
import Link from 'next/link';

const Home: NextPage = (technology: any) => {
  return (
    <div>

    <h1><Link href="/"><a style={{textDecoration: 'underline'}}>Home</a></Link></h1>
   
    <pre>
      {JSON.stringify(technology,null,2)}
    </pre>
    </div>
  )
}

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
    const {data} = await fetchAPI(`/technologies/?filters\[slug\][$eq]=${params.slug}&populate=*`);
    
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

export default Home
