import Image from "next/image";
import Head from "next/head";
import Context from "../../components/Context";
import { useContext, useState } from "react";
import HeroForside from "../../components/HeroForside";
import StepsMobile from "../../components/StepsMobile";
import SaadanIntro from "../../components/SaadanIntro";
import Fordele from "../../components/Fordele";

// After ** Head ** I can include all the components for the homepage
export default function Forside() {
  const context = useContext(Context);
  return (
    <>
      <Head>
        <title>Boliglån</title>
        <meta name="description" content="This is my KEA fourth semester Final Exam Project" />
        <meta name="keywords" content="NextJS - Crafted by José Francisco Sesé"></meta>
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */}
      </Head>
      <HeroForside></HeroForside>
      <SaadanIntro className="col-12"></SaadanIntro>
      <StepsMobile className="col-1-6"></StepsMobile>
      <Fordele className="col-12"></Fordele>
    </>
  );
}
