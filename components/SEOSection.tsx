import Head from "next/head";

export default function SEOSection() {
  return <Head>
    <meta property='og:title' content='Carbontracker: Measure carbon footprint of your ML models with ease.'/>
    <meta property='og:description' content='Integrate Carbontracker into your codebase to predict and measure emissions during training.'/>
    <meta property='og:url' content='//www.carbontracker.github.io/' />
    {/* TODO: Insert plot as og:image */}
  </Head>
}
