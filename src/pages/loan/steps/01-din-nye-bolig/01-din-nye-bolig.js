import StepsMobile from "../../../../../components/StepsMobile";
import Link from "next/link";
import Context from "../../../../../components/Context";
import { useState, useContext } from "react";
import { useEffect } from "react";
import { postNyeBolig } from "../../../../../components/Post";
import { patchNyeBolig } from "../../../../../components/Patch";

export default function DinNyeBolig(props) {
  const context = useContext(Context);

  function errorMessage() {
    // setOrderId(orders[orders.length - 1].id + 1);
  }
  // Function Submit Nye Bolig 1
  function submit(e) {
    e.preventDefault();
    postBolig();
    context.setLaanebehov(context.nyeBolig.pris - context.nyeBolig.betaling);
    console.log(context.laanebehov);
    // window.location.href = "/loan/steps/01-din-nye-bolig/02-din-nye-bolig";
  }

  // Patch Nye Bolig in Supabase
  async function postBolig() {
    const response = await patchNyeBolig({
      id: 1,
      type: context.nyeBolig.type,
      adresse: context.nyeBolig.adresse,
      postnr: context.nyeBolig.postnr,
      by: context.nyeBolig.by,
      land: context.nyeBolig.land,
      pris: "",
      betaling: "",
      indkomst: "",
      gaeld: "",
    });
    // console.log(response);
    if (response && response.length) {
      setPaymentCompleted(true);
      console.log("Works!");
    }
  }

  // Nye Bolig type
  function setNyeBoligType(e) {
    context.setNyeBolig((previous) => ({ ...previous, type: e.target.value }));
    console.log(e.target.value);
    console.log(typeof context.nyeBolig.type);
  }
  // Nye Bolig Adresse
  function setNyeBoligAdresse(e) {
    context.setNyeBolig((previous) => ({ ...previous, adresse: e.target.value }));
    console.log(e.target.value);
    console.log(typeof context.nyeBolig.adresse);
  }
  // Nye Bolig Postnr
  function setNyeBoligPostnr(e) {
    context.setNyeBolig((previous) => ({ ...previous, postnr: e.target.value }));
    // context.setNyeBolig((previous) => ({ ...previous, postnr: parseInt(e.target.value) }));
    console.log(context.nyeBolig.postnr);
    console.log(typeof context.nyeBolig.postnr);
  }
  // Nye Bolig By
  function setNyeBoligBy(e) {
    context.setNyeBolig((previous) => ({ ...previous, by: e.target.value }));
    console.log(e.target.value);
    console.log(typeof context.nyeBolig.by);
  }
  // Nye Bolig Land
  function setNyeBoligLand(e) {
    context.setNyeBolig((previous) => ({ ...previous, land: e.target.value }));
    console.log(e.target.value);
    console.log(typeof context.nyeBolig.land);
  }

  return (
    <>
      {/* Modal intro  */}
      <div id="modal-intro" className="grid-center">
        <div className="modal-container flex-column-center col-3-11">
          {/* <div className="close-modal" onClick={hideModalIntro}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div> */}
          <h2>Godt at vide inden du går i gang med din ansøgning.</h2>
          <p className="small">
            I gennem ansøgning process vi kommer at spørger dig om forskællige ting, så anbefælles at have disse informationer med dig inden du går i gang med din ansøgning. <strong>Her en liste med hvad kommer vi at spørger dig om:</strong>
          </p>

          <div className="flex-row-modal">
            <p>
              <strong>Boligsituation:</strong> Addresse og værd på af ejerbolig.(*) Boliglån type, restgæld, rente og rente type.(*)
            </p>

            <p>
              <strong>Ejendele:</strong> Køretøj mærke, model, årgang og ejerforholdene.(*) Køretøj lån, låneudbyder, skylder og månedlige ydelse.(*)
            </p>

            <p>
              <strong>Indtægter:</strong> Månedlig husstandsindkomst(før skat). Arbejdsform og månedlige indkomst. Fagforening.(*) A-kasse.(*)
            </p>

            <p>
              <strong>Gæld: </strong> SU lån.(*) Banklån.(*) Banklån udbyder, restgæld, rentesats, rentetype og månedlige ydelse.
            </p>

            <p>
              <strong>Opsparing:</strong> Din bank. Husstanden stående på opsparings og lønkonti. Renten på opsparingskontoen. Kassekredit.(*) Kassekreditten maksimale beløb, penge på den og rente. Aktier (*) og penge i den. Penge i private
              pensionsopsparing.(*)
            </p>
          </div>
          <div>
            <p className="small">Det er også en god idé at oprette en konto og log ind, så hvis du skal forlade vi gemmer alle informationer du har allerede indstat for når du kommer tilbage.</p>
          </div>
          {/* <p>God fornjølse</p> */}
          <div className="flex-row-center">
            <button className="btn-contact" onClick={hideModalIntro}>
              Fortsæt uden logge ind
            </button>
            <Link className="btn-contact" href={""}>
              Opret en konto
            </Link>
          </div>
        </div>
      </div>

      {/* Back and Steps Bar */}
      <div className="step-back-wrapper">
        <div className="flex-row-space-around step-back-container">
          <div className="flex-row-left">
            <Link href="/" className="flex-row-left back">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
              Forside
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
        <form id="nyeBoligFormOne" onSubmit={submit}>
          <h2>Din nye bolig</h2>
          <p>For at bankerne kan komme med et tilbud på din økonomi, er de nødt til at vide noget omkring dine ønsker og behov.</p>
          <fieldset className="flex-column-left">
            <div className="flex-row-left">
              <legend>Hvilke type bolig vil du købe?</legend>
            </div>
            {/* Ejer eller Andel  */}
            <div className="radio-toolbar">
              <input type="radio" id="nye_bolig_ejersbolig" name="nye_bolig_andel_eller_ejerbolig" value="Ejersbolig" required onClick={setNyeBoligType} />
              <label htmlFor="nye_bolig_ejersbolig">Ejer</label>

              <input type="radio" id="nye_bolig_andelsbolig" name="nye_bolig_andel_eller_ejerbolig" value="Andelsbolig" required onClick={setNyeBoligType} />
              <label htmlFor="nye_bolig_andelsbolig">Andel</label>
            </div>
          </fieldset>
          {/* Nye Bolig Adresse */}
          <div className="flex-column-left">
            <p>Hvad er adressen på den bolig, du ønsker at købe? (valgfrit)</p>

            {/* Adresse  */}
            <div className="flex-column-left field">
              <label htmlFor="adresse_nye_bolig">Adresse</label>
              <input type="text" name="adresse_nye_bolig" id="adresse_nye_bolig" placeholder="Adresse" minLength="2" required onChange={setNyeBoligAdresse} />
              <span className="nyebolig-error-msg">Enter a valid value</span>
            </div>

            <div className="two-inputs-row">
              {/* Postnr.  */}
              <div className="flex-column-left field">
                <label htmlFor="postnr_nye_bolig">Postnr.</label>
                <input type="number" name="postnr_nye_bolig" id="postnr_nye_bolig" placeholder="Postnr." minLength="4" required onChange={setNyeBoligPostnr} />
                <span className="error-message">Enter a valid value</span>
              </div>
              {/* By  */}
              <div className="flex-column-left field">
                <label htmlFor="by_nye_bolig">By</label>
                <input type="text" name="by_nye_bolig" id="by_nye_bolig" placeholder="By" minLength="2" required onChange={setNyeBoligBy} />
                <span className="error-message">Enter a valid value</span>
              </div>
            </div>
            {/* Nye Bolig Land */}
            <div className="flex-column-left field">
              <label htmlFor="land_nye_bolig">Land</label>
              <input type="text" name="land_nye_bolig" id="land_nye_bolig" placeholder="Land" minLength="2" required onChange={setNyeBoligLand} />
              <span className="error-message">Enter a valid value</span>
            </div>
          </div>
          {/* Submit  */}
          <div className="flex-row-center">
            <button className="btn-form" type="submit" onClick={errorMessage}>
              Fortsæt
            </button>
          </div>
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

function hideModalIntro() {
  document.querySelector("#modal-intro").classList.add("hiden");
}

// function submit(e) {
//   // e.preventDefault();
//   window.location.href = "/loan/steps/01-din-nye-bolig/02-din-nye-bolig";
//   document.getElementById("nyeBoligFormOne").submit();
// }
