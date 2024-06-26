import Head from "next/head";
import SocialIMG from "../public/social-img.png";

export default function SEOSection() {
  return (
    <Head>
      <meta
        property="og:title"
        content="Measure carbon footprint of your ML models with ease."
      />
      <meta
        property="og:title"
        content="Carbontracker: Measure carbon footprint of your ML models with ease."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Integrate Carbontracker into your codebase to predict and measure emissions during training."
      />
      <meta property="og:url" content="https://carbontracker.info/" />
      <meta
        property="og:image"
        content={`https://snailed.github.io${SocialIMG.src}`}
      />
    </Head>
  );
}
