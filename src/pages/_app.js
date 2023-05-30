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

  // Input chat
  const [chatInput, setChatInput] = useState();

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
  // Lånebehov
  const [laanebehov, setLaanebehov] = useState({});
  // What is in the table of Nye Bolig
  const [orders, setOrders] = useState([]);
  // Nye Bolig ID
  const [orderId, setOrderId] = useState();
  // Steps
  const [dinNyeBolig, setDinNyeBolig] = useState();
  const [dinBoligSituation, setDinBoligSituation] = useState();
  const [ejendele, setEjendele] = useState();
  const [lidtOmDig, setLidtOmDig] = useState();
  const [indtaegter, setIntaegter] = useState();
  const [opsparing, setOpsparing] = useState();

  // Fetch Orders from Supabase (Nye Bolig table)
  useEffect(() => {
    async function getOrders() {
      const url = "https://wimczkvwnsepkvefdtzp.supabase.co/rest/v1/nyeBolig";
      const headers = {
        "Content-Type": "application/json",
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpbWN6a3Z3bnNlcGt2ZWZkdHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNjY5NTYsImV4cCI6MjAwMDg0Mjk1Nn0.wKsEPjpUvAZEzzuau6t0gW8X5-F3kmoIvaAcoUV-BK4",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpbWN6a3Z3bnNlcGt2ZWZkdHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNjY5NTYsImV4cCI6MjAwMDg0Mjk1Nn0.wKsEPjpUvAZEzzuau6t0gW8X5-F3kmoIvaAcoUV-BK4",
        Prefer: "return=minimal",
      };
      const options = {
        method: "GET",
        headers: headers,
      };
      const body = {
        body: "false",
      };
      // Await then execute the code.
      const res = await fetch(url, options, body); // Fetchs the data (await)
      const orders = await res.json(); //When it's done getting it
      setOrders(orders);
      console.log(orders);
      generateNewId(orders);
    }
    getOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function generateNewId(arr) {
    setOrderId(arr[arr.length - 1].id + 3);
    console.log(orderId);
    console.log(typeof orderId);
  }

  //Gældsfaktor

  return (
    <>
      <Context.Provider
        value={{ orderId, setOrderId, orders, setOrders, nyeBolig, setNyeBolig, nuvaerendeBolig, setNuvaerendeBolig, andenNuvaerendeBolig, setAndenNuvaerendeBolig, laanebehov, setLaanebehov, chatInput, setChatInput, dinNyeBolig, setDinNyeBolig }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Context.Provider>
    </>
  );
}

export default MyApp;
