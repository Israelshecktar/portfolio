import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import GlobalStyles from '../styles/GlobalStyles';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="description" content="Shecktar's portfolio showcasing projects and achievements." />
        <title>Shecktar Portfolio - Showcasing Projects and Achievements</title>
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
