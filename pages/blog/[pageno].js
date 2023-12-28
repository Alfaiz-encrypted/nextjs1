import React from 'react';
import Navbar from '../navbar';

export const getStaticPaths = async () => {
  // Fetch the list of post IDs from the API
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // Create paths with the post IDs
  const paths = posts.map((post) => ({
    params: { pageno: post.id.toString() },
  }));

  return {
    paths,
    fallback: false, // Set to true if you want to enable incremental static regeneration for unknown paths
  };
};

export const getStaticProps = async ({ params }) => {
    const { pageno } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${pageno}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const BlogPost = ({ data }) => {
  return (
    <>
      <Navbar />
      <h5>My Blog Details</h5>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </>
  );
};

export default BlogPost;
