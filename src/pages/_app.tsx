import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { MainNav } from "../components/MainNav";

export const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>NIWATORO</title>
        <meta name="description" content="こんにちは、俺はにわとろ 起業家です 未来の開拓者です" />
        <meta property="og:image" content="https://www.niwatoro.com/_next/image?url=%2Fimages%2Fpenguin.png&w=3840&q=75" />
        <meta property="og:title" content="Niwatoro" />
        <meta property="og:description" content="こんにちは、俺はにわとろ 起業家です 未来の開拓者です" />
        <meta property="og:url" content="https://www.niwatoro.com/" />
        <meta property="og:site_name" content="Niwatoro" />
        <meta property="og:type" content="website" />
        <meta name="google-site-verification" content="5N6EjrwFm-4Ff3ZdKdVb2Ntsy-8RLdtCjAkJemzgeNE" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-016Y4N32ME" />
      <Script>
        {`window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		
		gtag('config', 'G-016Y4N32ME');`}
      </Script>
      <MainNav />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
