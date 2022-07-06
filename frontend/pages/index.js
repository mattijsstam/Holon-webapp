import { Fragment } from "react";

import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import IntroductionVideo from "../components/Introductionvideo";
import HolonStyle from "./holon-style";
import TextBlock from "../components/TextBlock";
import WelcomePage from "../components/WelcomePage";
import ContentBlock from "../components/ContentBlock";
import HolonButton from '../components/Buttons/HolonButton';

function Card({ children, href }) {
  return (
    <a
      href={href}
      className="align-left m-3 max-w-xs rounded-md border p-5 text-black no-underline transition"
    >
      {children}
    </a>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default function Home() {
  return (
    <div >
      <Head>
        <title>HOLON en de kunst van het Loslaten</title>
        <meta name="description" content="HOLON en de kunst van het Loslaten" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="snap-y snap-mandatory h-screen overflow-y-auto">
        <ContentBlock>
          <WelcomePage></WelcomePage>
        </ContentBlock>
        <ContentBlock colorClass="bg-split-white-blue">
        </ContentBlock>
        <ContentBlock colorClass="bg-holon-blue-900" id="introVideo">
          <IntroductionVideo />
        </ContentBlock>
        <ContentBlock colorClass="bg-split-blue-white">
        </ContentBlock>
        <ContentBlock>
          <TextBlock value="hoeDoen" borderColor="border-holon-slated-blue-300">
          </TextBlock>
        </ContentBlock>
        <ContentBlock>
          <TextBlock value="slimmerSamenwerken" borderColor="border-holon-gold-200" right="true">
          </TextBlock>
        </ContentBlock>
        <ContentBlock>
          <TextBlock value="warmte" borderColor="border-holon-blue-900">
          </TextBlock>
        </ContentBlock>
        <ContentBlock>
          <TextBlock value="tweeKeerSlimmer" borderColor="border-holon-gold-600" right="true">
          </TextBlock>
        </ContentBlock>
        <ContentBlock>
          <TextBlock value="afsluiter" underlineTitle="true" colorUnderline="decoration-holon-slated-blue-300">
            <HolonButton variant="blue">Naar het open model</HolonButton>
            <HolonButton variant="blue">Op de hoogte blijven</HolonButton>
          </TextBlock>
        </ContentBlock>
        <ContentBlock colorClass="bg-split-white-blue">
        </ContentBlock>
      </main>
    </div>
  );
}
