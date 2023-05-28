// _app.js Whatever happens in here, happens on every page - perfect place to link stylesheet, or other general stuff
import React from "react";
import "../../styles/globals.css";
import "../../styles/forms.css";
import "../../styles/tablet.css";
import Context from "../../components/Context";
import Layout from "../../components/Layout";
import { useState, useContext } from "react";
import Basket from "../../components/Basket";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const context = useContext(Context);

  // 01. Din nye bolig
  const [nyeBolig, setNyeBolig] = useState({
    id: "",
    type: "",
    adresse: "",
    postnr: "",
    by: "",
    land: "",
    pris: "",
    betaling: "",
    indkomst: "",
    gaeld: "",
  });
  // Nuværende bolig
  const [nuvaerendeBolig, setNuvaerendeBolig] = useState({
    type: "",
    adresse: "",
    postnr: "",
    by: "",
    land: "",
    boligvaerd: "",
    boliglaan: "",
    boliglaanrestgaeld: "",
    boliglaanrente: "",
    boliglaanafdrag: "",
    realkreditlaan: "",
    realkreditlaanbank: "",
    realkreditlaanoprettet: "",
    realkreditlaanhovedstol: "",
    realkreditlaanrestgaeld: "",
    realkreditlaanrente: "",
    realkreditlaanrentetype: "",
    realkreditlaanafdrag: "",
    nylaan: "",
    skalsaelges: "",
  });
  // Anden Nuværende bolig
  const [andenNuvaerendeBolig, setAndenNuvaerendeBolig] = useState({
    type: "",
    adresse: "",
    postnr: "",
    by: "",
    land: "",
    boligVærd: "",
    banklaan: "",
    banklaanrestgaeld: "",
    banklaanrente: "",
    banklaanafdrag: "",
    realkreditlaan: "",
    realkreditlaanbank: "",
    realkreditlaanoprettet: "",
    realkreditlaanhovedstol: "",
    realkreditlaanrestgaeld: "",
    realkreditlaanrente: "",
    realkreditlaanrentetype: "",
    realkreditlaanafdrag: "",
    nylaan: "",
    skalsaelges: "",
  });

  return (
    <>
      <Context.Provider value={{ nyeBolig, setNyeBolig, nuvaerendeBolig, setNuvaerendeBolig, andenNuvaerendeBolig, setAndenNuvaerendeBolig }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Context.Provider>
    </>
  );
}

export default MyApp;
