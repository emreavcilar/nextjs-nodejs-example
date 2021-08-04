import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { ROUTE_PATHS } from 'config/constants';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Product page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href={ROUTE_PATHS.PRODUCT_LIST}>
        Navigate to product list
      </Link>

    </div>
  )
}
