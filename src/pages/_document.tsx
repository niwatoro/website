import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={""} />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Gulzar&family=Poppins&family=Russo+One&family=Sawarabi+Gothic&family=ZCOOL+QingKe+HuangYou&family=ZCOOL+XiaoWei&family=Zen+Antique&family=Noto+Sans+JP&family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
