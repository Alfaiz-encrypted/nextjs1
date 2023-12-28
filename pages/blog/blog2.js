import Head from "next/head";
import style from './blog.module.css';
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};


function Blog2({ data }) {
  return (
    <div>
      <Head>
        <title>Blog2 Page</title>
      </Head>
      <h1 style={{ color: 'red' }}>This is Blog2 Pages</h1>
      {data.slice(0,5).map((curelm) => {
        return (
          <div key={curelm.id} className={style.blogcard}>
            <h5 style={{color:"blue"}}>{curelm.id}</h5>
            <Link href={`/blog/${curelm.id}`}>
            <h3>{curelm.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Blog2;
