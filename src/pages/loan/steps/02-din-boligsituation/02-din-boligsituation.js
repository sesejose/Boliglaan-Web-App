import Context from "../../../../../components/Context";
import { useState, useContext } from "react";
import Link from "next/link";
import StepsMobile from "../../../../../components/StepsMobile";
import Boliglaan from "../../../../../components/Boliglaan";

export default function DinBoligsituationLån() {
  const context = useContext(Context);

  function openAndSetBoligLaan() {
    const laan = document.querySelector("#boliglaan-form-group");
    const radioBolig = document.querySelector('input[id="boliglaan"]');
    const radioReal = document.querySelector('input[id="realkreditlaan"]');
    if (laan.style.display === "none") {
      laan.style.display = "flex";
    } else {
      laan.style.display = "flex";
    }
    // if ((radioReal.checked = true)) {
    //   radioReal.checked = false;
    //   closeAndSetRealkreditLaan();
    //   radioBolig.checked = true;
    // }
  }

  function openAndSetRealkreditLaan() {
    const laan = document.querySelector("#realkreditlaan-form-group");
    const radioReal = document.querySelector('input[id="realkreditlaan"]');
    const radioBolig = document.querySelector('input[id="boliglaan"]');
    if (laan.style.display === "none") {
      laan.style.display = "flex";
    } else {
      laan.style.display = "flex";
    }
    // if ((radioBolig.checked = true)) {
    //   radioBolig.checked = false;
    //   closeAndSetBoligLaan();
    //   radioReal.checked = true;
    // }
  }

  function closeAndSetBoligLaan() {
    const laan = document.querySelector("#boliglaan-form-group");
    const radioBolig = document.querySelector('input[id="boliglaan"]');
    if (laan.style.display === "flex") {
      laan.style.display = "none";
    } else {
      laan.style.display = "none";
    }
    if ((radioBolig.checked = true)) {
      radioBolig.checked = false;
    }
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, boliglaan: "", boliglaanrestgaeld: "", boliglaanrente: "", boliglaanafdrag: "" }));
  }

  function closeAndSetRealkreditLaan() {
    const laan = document.querySelector("#realkreditlaan-form-group");
    const radioReal = document.querySelector('input[id="realkreditlaan"]');

    if (laan.style.display === "flex") {
      laan.style.display = "none";
    } else {
      laan.style.display = "none";
    }
    if ((radioReal.checked = true)) {
      radioReal.checked = false;
    }

    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, realkreditlaan: "" }));
  }

  //   boliglaan: "",
  //   boliglaanrestgaeld: "",
  //   boliglaanrente: "",
  //   boliglaanafdrag: "",

  /////////////////   Banklån    ///////////////////////

  // NuvaerendeBolig BoligLaan
  function setNuvaerendeBoligBoligLaan(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, boliglaan: e.target.value }));
    console.log(e.target.value);
    openAndSetBoligLaan();
  }
  //Nuvaerende Bolig boliglaanrestgaeld
  function setNuvaerendeBoligBoligLaanrestGaeld(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, boliglaanrestgaeld: e.target.value + " kr." }));
  }
  //Nuvaerende Bolig boliglaanrente
  function setNuvaerendeBoligBoligLaanRente(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, boliglaanrente: e.target.value + " %" }));
  }
  //Nuvaerende Bolig boliglaanafdrag
  function setNuvaerendeBoligBoligLaanAfdrag(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, boliglaanafdrag: e.target.value }));
  }

  ////////////////   Realkreditlån   ////////////////////

  //   realkreditlaan: "",
  //   realkreditlaanbank: "",
  //   realkreditlaanoprettet: "",
  //   realkreditlaanhovedstol: "",

  // NuvaerendeBolig Realkreditlaan
  function setNuvaerendeBoligRealkreditlaan(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, realkreditlaan: e.target.value }));
    console.log(e.target.value);
    openAndSetRealkreditLaan();
  }
  //Nuvaerende Bolig realkreditlaan Bank
  function setNuvaerendeBoligRealkreditlaanBank(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, realkreditlaanbank: e.target.value }));
  }
  //Nuvaerende Bolig realkreditlaanoprettet
  function setNuvaerendeBoligRealkreditlaanOprettet(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, realkreditlaanoprettet: e.target.value }));
  }
  //Nuvaerende Bolig realkreditlaanhovedstol
  function setNuvaerendeBoligRealkreditlaanHovedstol(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, realkreditlaanhovedstol: e.target.value + " kr." }));
  }

  /////////////////////////////////

  //   realkreditlaanrestgaeld: "",
  //   realkreditlaanrente: "",
  //   realkreditlaanrentetype: "",
  //   realkreditlaanafdrag: "",

  // NuvaerendeBolig realkreditlaanrestgaeld
  function setNuvaerendeBoligRealkreditlaanRestgaeld(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, realkreditlaanrestgaeld: e.target.value + " kr." }));
    console.log(e.target.value);
  }
  //Nuvaerende Bolig realkreditlaanrente
  function setNuvaerendeBoligRealkreditlaanRente(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, realkreditlaanrente: e.target.value + " %" }));
  }
  //Nuvaerende Bolig realkreditlaanrentetype
  function setNuvaerendeBoligRealkreditlaanRenteType(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, realkreditlaanrentetype: e.target.value }));
  }
  //Nuvaerende Bolig realkreditlaanafdrag
  function setNuvaerendeBoligRealkreditlaanAfdrag(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, realkreditlaanafdrag: e.target.value }));
  }

  ///////////////////////////

  //   nylaan: "",
  //   skalsaelges: "",

  //Nuvaerende Bolig nylaan
  function setNuvaerendeBoligNyLaan(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, nylaan: e.target.value }));
  }
  //Nuvaerende Bolig skalsaelges
  function setNuvaerendeBoligSkalSaelges(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, skalsaelges: e.target.value }));
  }

  return (
    <>
      {/* Back and Steps Bar */}
      <div className="step-back-wrapper">
        <div className="flex-row-space-around step-back-container">
          <div className="flex-row-left">
            <Link href="../../../loan/steps/01-din-nye-bolig/01-din-nye-bolig" className="flex-row-left back">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
              Din nye bolig
            </Link>
          </div>
          <div className="flex-row-right">
            <button className="btn-card-second" onClick={openSteps}>
              1/8
            </button>
          </div>
        </div>
      </div>
      <StepsMobile></StepsMobile>
      {/**** FORM ****/}
      <div className="form-wrapper">
        <form id="boligSituationOne">
          <h2>Din boligsituation / Lån</h2>
          <p>For at bankerne kan komme med et tilbud på din økonomi, er de nødt til at vide noget omkring din boligsituation.</p>
          <fieldset className="flex-column-left">
            <div className="flex-row-left">
              <legend>
                Har du/I lån i boligen på <strong>{context.nuvaerendeBolig.adresse}</strong> ?{" "}
              </legend>
            </div>
            <div className="smaller">Hvis der er lån på adressen, kan du tilføje dem herunder.</div>
            <div className="radio-toolbar">
              <input type="checkbox" name="laan_type" id="boliglaan" value="Boliglån" onClick={setNuvaerendeBoligBoligLaan} />
              <label htmlFor="boliglaan">Boliglån</label>

              <input type="checkbox" name="laan_type" id="realkreditlaan" value="Realkreditlån" onClick={setNuvaerendeBoligRealkreditlaan} />
              <label htmlFor="realkreditlaan">Realkreditlån</label>
            </div>
          </fieldset>

          {/* <Boliglaan></Boliglaan> */}

          {/* Boliglaan  */}
          <div className="flex-column-left" id="boliglaan-form-group">
            <div className="flex-row-space-around">
              <h3>Boliglån på {context.nuvaerendeBolig.adresse}</h3>
              <button className="btn-slet" onClick={closeAndSetBoligLaan}>
                Slet
              </button>
            </div>

            <div className="flex-column-left field">
              <label htmlFor="boliglaanrestgaeld">Hvad er restgælden på banklånet?</label>
              <div className="input-group">
                <div className="kr">kr.</div>
                <input type="number" name="boliglaanrestgaeld" id="boliglaanrestgaeld" placeholder="" minLength="" required onChange={setNuvaerendeBoligBoligLaanrestGaeld} />
                <span className="error-message">Enter a valid value</span>
              </div>
              <p className="smaller">Restgælden kan du finde på din mobilbank, betalingsoversigt PBS eller i din E-boks</p>
            </div>

            <div className="flex-column-left field">
              <label htmlFor="bolig_laan_rente">Hvad betaler du i rente?</label>
              <div className="input-group">
                <div className="kr">%</div>
                <input type="number" name="bolig_laan_rente" id="bolig_laan_rente" placeholder="" minLength="" required onChange={setNuvaerendeBoligBoligLaanRente} />
                <span className="error-message">Enter a valid value</span>
              </div>
            </div>

            <fieldset className="flex-column-left field">
              <div className="flex-row-left">
                <legend>Afdrager du på dit lån?</legend>
              </div>

              <div className="radio-toolbar">
                <input type="radio" id="boliglaanafdrag_ja" name="boliglaanafdrag" value="Ja" required onClick={setNuvaerendeBoligBoligLaanAfdrag} />
                <label htmlFor="boliglaanafdrag_ja">Ja</label>

                <input type="radio" id="boliglaanafdrag_nej" name="boliglaanafdrag" value="Nej" required onClick={setNuvaerendeBoligBoligLaanAfdrag} />
                <label htmlFor="boliglaanafdrag_nej">Nej</label>
              </div>
            </fieldset>
            <hr className="divider" />
          </div>

          {/* Realkreditlaan: "", */}
          <div className="flex-column-left" id="realkreditlaan-form-group">
            <div className="flex-row-space-around">
              <h3>Realkreditlån på {context.nuvaerendeBolig.adresse}</h3>
              <button className="btn-slet" onClick={closeAndSetRealkreditLaan}>
                Slet
              </button>
            </div>

            {/* realkreditlaanbank: "", */}
            <div className="flex-column-left field">
              <label htmlFor="nuvaerende_bolig_land">Hvilket realkreditinstitut har du?</label>
              <input type="text" name="bank" id="bank" placeholder="Institut, der yder lånet" minLength="2" required onClick={setNuvaerendeBoligRealkreditlaanBank} />
              <span className="error-message">Enter a valid value</span>
            </div>

            {/* realkreditlaanrestgaeld: "", */}
            <div className="flex-column-left field">
              <label htmlFor="realkreditlaanrestgaeld">Hvad er restgædlden på realkreditlån?</label>
              <div className="input-group">
                <div className="kr">kr.</div>
                <input type="number" name="realkreditlaanrestgaeld" id="realkreditlaanrestgaeld" placeholder="" minLength="" required onChange={setNuvaerendeBoligRealkreditlaanRestgaeld} />
                <span className="error-message">Enter a valid value</span>
              </div>
            </div>

            {/* realkreditlaanoprettet: "", */}
            <div className="flex-column-left field">
              <label htmlFor="realkreditlaanoprettet">Hvilket realkreditinstitut har du?</label>
              <input type="date" name="realkreditlaanoprettet" id="realkreditlaanoprettet" placeholder="DD/MM/ÅÅÅÅ" minLength="2" required onClick={setNuvaerendeBoligRealkreditlaanOprettet} />
              <span className="error-message">Enter a valid value</span>
            </div>

            {/* realkreditlaanhovedstol: "", */}
            <div className="flex-column-left field">
              <label htmlFor="realkreditlaanhovedstol">Hovedstol på lånet?</label>
              <div className="input-group">
                <div className="kr">kr.</div>
                <input type="number" name="realkreditlaanhovedstol" id="realkreditlaanhovedstol" placeholder="" minLength="" required onChange={setNuvaerendeBoligRealkreditlaanHovedstol} />
                <span className="error-message">Enter a valid value</span>
              </div>
            </div>

            {/* realkreditlaanrente: "", */}
            <div className="flex-column-left field">
              <label htmlFor="realkreditlaanrente">Hvad betaler du i rente?</label>
              <div className="input-group">
                <div className="kr">%</div>
                <input type="number" name="realkreditlaanrente" id="realkreditlaanrente" placeholder="" minLength="" required onChange={setNuvaerendeBoligRealkreditlaanRente} />
                <span className="error-message">Enter a valid value</span>
              </div>
            </div>

            {/* realkreditlaanrentetype: "", */}
            <fieldset className="flex-column-left">
              <div className="flex-row-left">
                <legend>Har du en nuværende ejerbolig?</legend>
              </div>
              {/* Har du fast eller variabel rente? Fast / Variabel  */}
              <div className="radio-toolbar">
                <input type="radio" id="realkredit_laan_rente_fast" name="rente_type" value="Fast" required onClick={setNuvaerendeBoligRealkreditlaanRenteType} />
                <label htmlFor="realkredit_laan_rente_fast">Ja</label>

                <input type="radio" id="realkredit_laan_rente_variabel" name="rente_type" value="Variabel" required onClick={setNuvaerendeBoligRealkreditlaanRenteType} />
                <label htmlFor="realkredit_laan_rente_variabel">Nej</label>
              </div>
            </fieldset>

            {/* realkreditlaanafdrag: "", */}
            <fieldset className="flex-column-left">
              <div className="flex-row-left">
                <legend>Afdrager du på dit lån?</legend>
              </div>
              {/* Afdrager du på dit lån? Ja / Nej  */}
              <div className="radio-toolbar">
                <input type="radio" id="realkreditlaanafdrag_ja" name="realkreditlaanafdrag" value="Ja" required onClick={setNuvaerendeBoligRealkreditlaanAfdrag} />
                <label htmlFor="realkreditlaanafdrag_ja">Ja</label>

                <input type="radio" id="realkreditlaanafdrag_nej" name="realkreditlaanafdrag" value="Nej" required onClick={setNuvaerendeBoligRealkreditlaanAfdrag} />
                <label htmlFor="realkreditlaanafdrag_nej">Nej</label>
              </div>
            </fieldset>
            <hr className="divider" />
          </div>

          {/* nylaan: "", */}
          <fieldset className="flex-column-left">
            <div className="flex-row-left">
              <legend>Skal du låne til boligforbedringer?</legend>
            </div>
            <div className="radio-toolbar">
              <input type="radio" id="nye_laan_ja" name="nye_laan" value="Ja" required onClick={setNuvaerendeBoligNyLaan} />
              <label htmlFor="nye_laan_ja">Ja</label>

              <input type="radio" id="nye_laan_nej" name="nye_laan" value="Nej" required onClick={setNuvaerendeBoligNyLaan} />
              <label htmlFor="nye_laan_nej">Nej</label>
            </div>
          </fieldset>

          {/* skalsaelges: "", */}
          <fieldset className="flex-column-left">
            <div className="flex-row-left">
              <legend>Ønsker du at sælge din bolig?</legend>
            </div>
            <div className="radio-toolbar">
              <input type="radio" id="saelges_ja" name="skalsaelges" value="Ja" required onClick={setNuvaerendeBoligSkalSaelges} />
              <label htmlFor="saelges_ja">Ja</label>

              <input type="radio" id="saelges_nej" name="skalsaelges" value="Nej" required onClick={setNuvaerendeBoligSkalSaelges} />
              <label htmlFor="saelges_nej">Nej</label>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

function openSteps() {
  const steps = document.querySelector("#steps");
  if (steps.style.display === "flex") {
    steps.style.display = "none";
  } else {
    steps.style.display = "flex";
  }
}
