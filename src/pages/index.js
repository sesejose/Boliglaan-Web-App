import Image from "next/image";
import Head from "next/head";
import Context from "../../components/Context";
import { useContext, useState } from "react";
import HeroHome from "../../components/HeroHome";
import StepsMobile from "../../components/StepsMobile";
import SaadanIntro from "../../components/SaadanIntro";
import Advantages from "../../components/Advantages";
import ThreeSteps from "../../components/ThreeSteps";
import CoursesHome from "../../components/CoursesHome";
import Newsletter from "../../components/Newsletter";
import Quotes from "../../components/Quotes";

// After ** Head ** I can include all the components for the homepage
export default function Home() {
  const context = useContext(Context);

  return (
    <>
      <Head>
        <title>Boliglån</title>
        <meta name="description" content="This is my KEA fourth semester Final Exam Project" />
        <meta name="keywords" content="NextJS - Crafted by José Francisco Sesé"></meta>
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */}
      </Head>
      <HeroHome></HeroHome>
      <ThreeSteps className="col-12"></ThreeSteps>
      <SaadanIntro className="col-12"></SaadanIntro>
      {/* <StepsMobile className="col-1-6"></StepsMobile> */}
      <Advantages className="col-12"></Advantages>
      <CoursesHome className="col-12"></CoursesHome>
      <Quotes className="col-12"></Quotes>
      <Newsletter className="col-12"></Newsletter>
    </>
  );
}
