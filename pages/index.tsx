import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Text,
  Button,
  Center,
  Code,
  Container,
  HStack,
  Heading,
  VStack,
  useColorMode,
  Divider,
} from "@chakra-ui/react";
import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
import FeatureSection from "@/components/FeatureSection";
import PlotSection from "@/components/PlotSection";
import MaintainedBy from "@/components/MaintainedBy";
import ExampleSection from "@/components/ExampleSection";
import "highlight.js/styles/github-dark.css";
import SEOSection from "@/components/SEOSection";
import StatSection from "@/components/StatSection";
import Footer from "@/components/Footer";
import Favicon from "../public/favicon.ico";
import CitationSection from "@/components/CitationSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Carbontracker</title>
        <meta
          name="description"
          content="Seamlessly measure the carbon footprint of your machine learning models."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={Favicon.src} />
      </Head>
      <SEOSection />
      <main className={`${styles.main} ${inter.className}`}>
        <VStack w="full" p={["1rem", "6rem"]}>
          <Header />
          <Container maxW="3xl" mt={20}>
            <IntroSection />
            <Divider my={16} />
            <FeatureSection />
            <Divider my={16} />
            <StatSection />
            <ExampleSection />
            <Divider my={16} />
            <PlotSection />
            <Divider my={16} />
            <CitationSection />
            <Divider my={16} />
            <MaintainedBy />
          </Container>
        </VStack>
      </main>
      <Footer />
    </>
  );
}
