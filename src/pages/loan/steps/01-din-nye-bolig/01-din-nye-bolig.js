import StepsMobile from "../../../../../components/StepsMobile";
import Link from "next/link";
import Context from "../../../../../components/Context";
import { useState, useContext } from "react";

export default function DinNyeBolig(props) {
  const context = useContext(Context);

  function setEjerEllerAndel(e) {
    context.setNyeBolig((prevNyeBolig) => ({ ...prevNyeBolig, type: e.target.value }));
    console.log(e.target.value);
  }

  return (
    <>
      <div className="container-page">
        <div className="forms-container">
          {/* Back and Steps Bar */}
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
              <button className="btn-second" onClick={openSteps}>
                1/8
              </button>
            </div>
          </div>
          <StepsMobile></StepsMobile>
          {/**** FORM ****/}
          <form id="nyeBoligForm">
            <h2>Din nye bolig</h2>
            <p>For at bankerne kan komme med et tilbud på din økonomi, er de nødt til at vide noget omkring dine ønsker og behov.</p>
            <fieldset className="flex-column-left">
              <div className="flex-row-left">
                <legend>Hvilke type bolig vil du købe?</legend>
              </div>
              {/* Ejer eller Andel  */}
              <div className="radio-toolbar">
                <input type="radio" id="nye_bolig_ejersbolig" name="nye_bolig_andel_eller_ejerbolig" value="Ejersbolig" onClick={setEjerEllerAndel} />
                <label htmlFor="nye_bolig_ejersbolig">Ejersbolig</label>

                <input type="radio" id="nye_bolig_andelsbolig" name="nye_bolig_andel_eller_ejerbolig" value="Andelsbolig" />
                <label htmlFor="nye_bolig_andelsbolig">Andelsbolig</label>
              </div>
            </fieldset>
            {/* Nye Bolig Adresse */}
            <div className="flex-column-left">
              <p>Hvad er adressen på den bolig, du ønsker at købe? (valgfrit)</p>

              {/* Adresse  */}
              <div className="flex-column-left field">
                <label htmlFor="adresse_ny_bolig">Adresse</label>
                <input type="text" name="adresse_nye_bolig" id="adresse_nye_bolig" placeholder="Adresse" minLength="2" required />
                <span className="error-message">Enter a valid value</span>
              </div>

              <div className="two-inputs-row">
                {/* Postnr.  */}
                <div className="flex-column-left field">
                  <label htmlFor="postnr_nye_bolig">Postnr.</label>
                  <input type="text" name="postnr_nye_bolig" id="postnr_nye_bolig" placeholder="Postnr." minLength="4" required />
                  <span className="error-message">Enter a valid value</span>
                </div>
                {/* By  */}
                <div className="flex-column-left field">
                  <label htmlFor="by_nye_bolig">By</label>
                  <input type="text" name="by_nye_bolig" id="by_nye_bolig" placeholder="By" minLength="2" required />
                  <span className="error-message">Enter a valid value</span>
                </div>
              </div>
              {/* Nye Bolig Land */}
              <div className="flex-column-left field">
                <label htmlFor="nye_bolig_land">Land</label>
                <input type="text" name="nye_bolig_land" id="nye_bolig_land" placeholder="Land" minLength="2" required />
                <span className="error-message">Enter a valid value</span>
              </div>
            </div>
            {/* Submit  */}
            <div className="flex-row-center">
              <Link className="btn-form" href="/loan/steps/01-din-nye-bolig/02-din-nye-bolig">
                Fortsæt
              </Link>
            </div>
          </form>
        </div>
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

// onClick={submit}

// function submit() {
//   const form = document.getElementById("nyeBoligForm");
//   form.submit;
//   // document.getElementById("nyeBoligForm").submit()
// }
