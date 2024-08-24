import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import GlobalStyles from '../styles/GlobalStyles';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Shecktar's Portfolio - This is the portfolio website for shecktar</title>
      </Head>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
