// _app.js Whatever happens in here, happens on every page - perfect place to link stylesheet, or other general stuff
import React from "react";
import "../../styles/globals.css";
import "../../styles/forms.css";
import "../../styles/tablet.css";
import Context from "../../components/Context";
import Layout from "../../components/Layout";
import { useState, useContext } from "react";
import Basket from "../../components/Basket";

function MyApp({ Component, pageProps }) {
  const context = useContext(Context);
  // Here we define the States --> ([]) if this is an array
  // const [example, setExample] = useState([]);
  // 01. Din nye bolig
  const [nyeBolig, setNyeBolig] = useState({
    type: "",
    adresse: "",
    postnr: "",
    by: "",
    land: "",
    price: "",
    payment: "",
    income: "",
    debt: "",
  });

  return (
    <>
      <Context.Provider value={{ nyeBolig, setNyeBolig }}>
        <Layout>
          <Component {...pageProps} />
          <Basket></Basket>
        </Layout>
      </Context.Provider>
    </>
  );
}

export default MyApp;
