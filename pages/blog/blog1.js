import Image from 'next/image';
import style from './blog.module.css';
import Head from 'next/head';

function blog1() {
  return (
    <div>
      <Head>
        <title>
          blog1 Page
        </title>
      </Head>
      <h1 className={style.heading}>This is blog1 Pages</h1>
      <Image src="/dummy.jfif" alt="Dummy Image" width={500} height={300} />
    </div>
  );
}

export default blog1;
