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
