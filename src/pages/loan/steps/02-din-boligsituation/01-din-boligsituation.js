import Context from "../../../../../components/Context";
import { useState, useContext } from "react";
import Link from "next/link";
import StepsMobile from "../../../../../components/StepsMobile";

export default function DinBoligsituation() {
  const context = useContext(Context);

  function setEjerEllerAndelAndet(e) {
    context.setAndetNuværendeBolig((prevNyeBolig) => ({ ...prevNyeBolig, type: e.target.value }));
    console.log(e.target.value);
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
        <form id="boligsituationForm">
          <h2>Din DinBoligsituation</h2>
          <p>For at bankerne kan komme med et tilbud på din økonomi, er de nødt til at vide noget omkring din boligsituation.</p>
          <fieldset className="flex-column-left">
            <div className="flex-row-left">
              <legend>Har du en nuværende ejerbolig?</legend>
            </div>
            {/* Har du andet bolig? Ja / Nej  */}
            <div className="radio-toolbar">
              <input type="radio" id="har_bolig" name="har_bolig" value="Har en bolig" onClick={openNuværendeBolig} />
              <label htmlFor="har_bolig">Ja</label>

              <input type="radio" id="har_ikke_bolig" name="har_bolig" value="Har ikke en bolig" onClick={closeNuværendeBolig} />
              <label htmlFor="har_ikke_bolig">Nej</label>
            </div>
          </fieldset>

          {/* Nuværende Bolig */}
          <div className="flex-column-left" id="nuværende-bolig">
            <p>Hvad er adressen på din nuværende ejerbolig? (valgfrit)</p>

            {/* Nuværende Bolig Adresse  */}
            <div className="flex-column-left field">
              <label htmlFor="adresse_nuværende_bolig">Adresse</label>
              <input type="text" name="adresse_nuværende_bolig" id="adresse_nuværende_bolig" placeholder="Adresse" minLength="2" required />
              <span className="error-message">Enter a valid value</span>
            </div>
            <div className="two-inputs-row">
              {/* Nuværende Bolig Postnr.  */}
              <div className="flex-column-left field">
                <label htmlFor="postnr_nuværende_bolig">Postnr.</label>
                <input type="text" name="postnr_nuværende_bolig" id="postnr_nuværende_bolig" placeholder="Postnr." minLength="4" required />
                <span className="error-message">Enter a valid value</span>
              </div>
              {/*Nuværende Bolig By  */}
              <div className="flex-column-left field">
                <label htmlFor="by_nuværende_bolig">By</label>
                <input type="text" name="by_nuværende_bolig" id="by_nuværende_bolig" placeholder="By" minLength="2" required />
                <span className="error-message">Enter a valid value</span>
              </div>
            </div>
            {/* Nuværende Bolig Land */}
            <div className="flex-column-left field">
              <label htmlFor="nuværende_bolig_land">Land</label>
              <input type="text" name="nuværende_bolig_land" id="nuværende_bolig_land" placeholder="Land" minLength="2" required />
              <span className="error-message">Enter a valid value</span>
            </div>

            {/* Nuværende Bolig Værd */}
            <div className="flex-column-left field">
              <label htmlFor="nuværende_bolig_værd">Hvor meget er boligen værd?</label>
              <div className="input-group">
                <div className="kr">kr.</div>
                <input type="number" name="nuværende_bolig_værd" id="nuværende_bolig_værd" placeholder="" minLength="2" required />
                <span className="error-message">Enter a valid value</span>
              </div>
            </div>

            {/* Har du andet bolig? Ja / Nej  */}
            <fieldset className="flex-column-left">
              <div>
                <legend>Har du andre ejerbolig?</legend>
              </div>

              <div className="radio-toolbar">
                <input type="radio" id="har_andet_bolig" name="har_andet_bolig" value="Har en bolig" onClick={openAndetNuværendeBolig} />
                <label htmlFor="har_andet_bolig">Ja</label>

                <input type="radio" id="har_ikke_andet_bolig" name="har_andet_bolig" value="Har ikke en andet bolig" onClick={closeAndetNuværendeBolig} />
                <label htmlFor="har_ikke_andet_bolig">Nej</label>
              </div>
            </fieldset>
          </div>

          {/* Andet Nuværende Bolig  */}
          <div className="flex-column-left" id="andet-nuværende-bolig">
            <fieldset className="flex-column-left">
              <div className="flex-row-space-around">
                <h3>Dit andet ejerbolig</h3>
                <button className="btn-slet" onClick={closeAndetNuværendeBolig}>
                  Slet
                </button>
              </div>
              <div className="flex-row-left">
                <legend>Hvilke type bolig ejer du?</legend>
              </div>
              {/* Ejer eller Andel  */}
              <div className="radio-toolbar">
                <input type="radio" id="nuværende_ejersbolig" name="nuværende_andel_eller_ejerbolig" value="Ejersbolig" onClick={setEjerEllerAndelAndet} />
                <label htmlFor="nuværende_ejersbolig">Ejersbolig</label>

                <input type="radio" id="nuværende_andelsbolig" name="nuværende_andel_eller_ejerbolig" value="Andelsbolig" />
                <label htmlFor="nuværende_andelsbolig">Andelsbolig</label>
              </div>
            </fieldset>

            {/* Nuværende Bolig (Location) */}
            <div className="flex-column-left">
              <p>Hvad er adressen på din nuværende ejerbolig? (valgfrit)</p>

              {/* Nuværende Bolig Adresse  */}
              <div className="flex-column-left field">
                <label htmlFor="adresse_nuværende_bolig">Adresse</label>
                <input type="text" name="adresse_nuværende_bolig" id="adresse_nuværende_bolig" placeholder="Adresse" minLength="2" required />
                <span className="error-message">Enter a valid value</span>
              </div>

              <div className="two-inputs-row">
                {/* Nuværende Bolig Postnr.  */}
                <div className="flex-column-left field">
                  <label htmlFor="postnr_nuværende_bolig">Postnr.</label>
                  <input type="text" name="postnr_nuværende_bolig" id="postnr_nuværende_bolig" placeholder="Postnr." minLength="4" required />
                  <span className="error-message">Enter a valid value</span>
                </div>

                {/* Nuværende Bolig By  */}
                <div className="flex-column-left field">
                  <label htmlFor="by_nuværende_bolig">By</label>
                  <input type="text" name="by_nuværende_bolig" id="by_nuværende_bolig" placeholder="By" minLength="2" required />
                  <span className="error-message">Enter a valid value</span>
                </div>
              </div>

              {/* Nuværende Bolig Land */}
              <div className="flex-column-left field">
                <label htmlFor="nuværende_bolig_land">Land</label>
                <input type="text" name="nuværende_bolig_land" id="nuværende_bolig_land" placeholder="Land" minLength="2" required />
                <span className="error-message">Enter a valid value</span>
              </div>

              {/* Andet Bolig  - Værd */}
              <div className="flex-column-left field">
                <label htmlFor="andet_bolig_værd">Hvor meget er boligen værd?</label>
                <div className="input-group">
                  <div className="kr">kr.</div>
                  <input type="number" name="andet_bolig_værd" id="andet_bolig_værd" placeholder="" minLength="2" required />
                  <span className="error-message">Enter a valid value</span>
                </div>
              </div>
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

function openNuværendeBolig() {
  const nuværendeBolig = document.querySelector("#nuværende-bolig");
  if (nuværendeBolig.style.display === "none") {
    nuværendeBolig.style.display = "flex";
  } else {
    nuværendeBolig.style.display = "flex";
  }
}

function closeNuværendeBolig() {
  const nuværendeBolig = document.querySelector("#nuværende-bolig");
  if (nuværendeBolig.style.display === "flex") {
    nuværendeBolig.style.display = "none";
  } else {
    nuværendeBolig.style.display = "none";
  }
}

function openAndetNuværendeBolig() {
  const andetNuværendeBolig = document.querySelector("#andet-nuværende-bolig");
  if (andetNuværendeBolig.style.display === "none") {
    andetNuværendeBolig.style.display = "flex";
  } else {
    andetNuværendeBolig.style.display = "flex";
  }
}

function closeAndetNuværendeBolig() {
  const andetNuværendeBolig = document.querySelector("#andet-nuværende-bolig");
  if (andetNuværendeBolig.style.display === "flex") {
    andetNuværendeBolig.style.display = "none";
  } else {
    andetNuværendeBolig.style.display = "none";
  }
}
