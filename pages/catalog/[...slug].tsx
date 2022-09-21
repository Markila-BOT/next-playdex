import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../styles/Common.module.css';
import { SideMenu } from '../../components/SideMenu';

const Catalog = () => {
  const router = useRouter();
  const slug = (router.query.slug as string[]) || [];

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.mainGrid}>
        <aside className={styles.aside}>
          <SideMenu />
        </aside>
        <main className={styles.main}>
          <h1>Breadcrumbs: {slug.join(' > ')}</h1>
          <p>
            Nulla nihil, obcaecati adipisci illo, molestiae earum, veritatis soluta ipsum porro repellendus! Recusandae
            facere esse alias!
          </p>
        </main>
      </section>
    </div>
  );
};

export default Catalog;
