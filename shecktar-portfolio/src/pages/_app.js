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
        <title>Shecktar Portfolio - This is the portfolio website for Shecktar</title>
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
