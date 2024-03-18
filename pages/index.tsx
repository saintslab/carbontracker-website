import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Text, Button, Center, Code, Container, HStack, Heading, VStack, useColorMode, Divider } from "@chakra-ui/react";
import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
import FeatureSection from "@/components/FeatureSection";
import PlotSection from "@/components/PlotSection";
import MaintainedBy from "@/components/MaintainedBy";
import ExampleSection from "@/components/ExampleSection";
import 'highlight.js/styles/github-dark.css';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Carbontracker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <VStack w='full' p={['1rem', '6rem']}>
        <Header />
        <Container maxW='3xl' mt={20}>
            <IntroSection />
            <Divider my={16}/>
            <FeatureSection />
            <Divider my={16} />
            <ExampleSection />
            <Divider my={16} />
            <PlotSection />
            <Divider my={16} />
            <MaintainedBy />
        </Container>
        </VStack>
      </main>
    </>
  );
}