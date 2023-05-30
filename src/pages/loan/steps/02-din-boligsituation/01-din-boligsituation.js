import Context from "../../../../../components/Context";
import { useState, useContext } from "react";
import Link from "next/link";
import StepsMobile from "../../../../../components/StepsMobile";
import { useRouter } from "next/router";
import { patchNuvaerendeBolig } from "../../../../../components/PatchNuvaerende";

export default function DinBoligsituation() {
  const context = useContext(Context);
  const router = useRouter();

  function errorMessage(e) {}
  // Function Submit Nye Bolig 1
  function submit(e) {
    e.preventDefault();
    patchBolig();
    router.push(`/loan/steps/02-din-boligsituation/02-din-boligsituation`);
  }

  // // Patch Nye Bolig in Supabase
  async function patchBolig() {
    const response = await patchNuvaerendeBolig({
      // id: 1,
      type: context.nuvaerendeBolig.type,
      adresse: context.nuvaerendeBolig.adresse,
      postnr: context.nuvaerendeBolig.postnr,
      by: context.nuvaerendeBolig.by,
      land: context.nuvaerendeBolig.land,
      boligvaerd: context.nuvaerendeBolig.boligvaerd,
      // boliglaan: "",
      // boliglaanrestgaeld: "",
      // boliglaanrente: "",
      // boliglaanafdrag: "",
      // realkreditlaan: "",
      // realkreditlaanbank: "",
      // realkreditlaanoprettet: "",
      // realkreditlaanhovedstol: "",
      // realkreditlaanrestgaeld: "",
      // realkreditlaanrente: "",
      // realkreditlaanrentetype: "",
      // realkreditlaanafdrag: "",
      // nylaan: "",
      skalsaelges: context.nuvaerendeBolig.skalsaelges,
    });
    // console.log(response);
    if (response && response.length) {
      setPaymentCompleted(true);
      console.log("Works!");
    }
  }

  // NuvaerendeBolig type
  function setNuvaerendeBoligType(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, type: e.target.value }));
    console.log(e.target.value);
  }
  //Nuvaerende Bolig Adresse
  function setNuvaerendeBoligAdresse(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, adresse: e.target.value }));
    console.log(context.nuvaerendeBolig.adresse);
    console.log(e.target.value);
  }
  //Nuvaerende Bolig Postnr
  function setNuvaerendeBoligPostnr(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, postnr: e.target.value }));
    console.log(e.target.value);
  }
  //Nuvaerende Bolig By
  function setNuvaerendeBoligBy(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, by: e.target.value }));
    console.log(e.target.value);
  }
  //Nuvaerende Bolig Land
  function setNuvaerendeBoligLand(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, land: e.target.value }));
    console.log(e.target.value);
  }
  //Nuvaerende Bolig Værd
  function setNuvaerendeBoligVaerd(e) {
    context.setNuvaerendeBolig((prevNuvaerendeBolig) => ({ ...prevNuvaerendeBolig, boligvaerd: e.target.value }));
    console.log(e.target.value);
  }

  ////////////  Anden Nuvaerende Bolig  ///////////////

  // NuvaerendeBolig type
  function setAndenNuvaerendeBoligType(e) {
    context.setAndenNuvaerendeBolig((prevAndenNuvaerendeBolig) => ({ ...prevAndenNuvaerendeBolig, type: e.target.value }));
    console.log(e.target.value);
  }
  //Nuvaerende Bolig Adresse
  function setAndenNuvaerendeBoligAdresse(e) {
    context.setAndenNuvaerendeBolig((prevAndenNuvaerendeBolig) => ({ ...prevAndenNuvaerendeBolig, adresse: e.target.value }));
    console.log(e.target.value);
  }
  //Nuvaerende Bolig Postnr
  function setAndenNuvaerendeBoligPostnr(e) {
    context.setAndenNuvaerendeBolig((prevAndenNuvaerendeBolig) => ({ ...prevAndenNuvaerendeBolig, postnr: e.target.value }));
    console.log(e.target.value);
  }
  //Nuvaerende Bolig By
  function setAndenNuvaerendeBoligBy(e) {
    context.setAndenNuvaerendeBolig((prevAndenNuvaerendeBolig) => ({ ...prevAndenNuvaerendeBolig, by: e.target.value }));
    console.log(e.target.value);
  }
  //Nuvaerende Bolig Land
  function setAndenNuvaerendeBoligLand(e) {
    context.setAndenNuvaerendeBolig((prevAndenNuvaerendeBolig) => ({ ...prevAndenNuvaerendeBolig, land: e.target.value }));
    console.log(e.target.value);
  }
  //Nuvaerende Bolig Værd
  function setAndenNuvaerendeBoligVaerd(e) {
    context.setAndenNuvaerendeBolig((prevAndenNuvaerendeBolig) => ({ ...prevAndenNuvaerendeBolig, boligvaerd: e.target.value }));
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
        <form id="boligSituationOne" onSubmit={submit}>
          <h2>Din DinBoligsituation</h2>
          <p>For at bankerne kan komme med et tilbud på din økonomi, er de nødt til at vide noget omkring din boligsituation.</p>
          <fieldset className="flex-column-left">
            <div className="flex-row-left">
              <legend>Har du en nuværende ejerbolig?</legend>
            </div>
            <div className="radio-toolbar">
              <input type="radio" id="har_bolig" name="har_bolig" value="Har en bolig" required onClick={openNuvaerendeBolig} />
              <label htmlFor="har_bolig">Ja</label>

              <input type="radio" id="har_ikke_bolig" name="har_bolig" value="Har ikke en bolig" required onClick={closeNuvaerendeBolig} />
              <label htmlFor="har_ikke_bolig">Nej</label>
            </div>
          </fieldset>

          {/* Nuværende Bolig */}
          <div className="flex-column-left" id="nuvaerende-bolig">
            <fieldset className="flex-column-left">
              <div className="flex-row-left">
                <legend>Hvilke type bolig ejer du?</legend>
              </div>
              {/* Ejer eller Andel  */}
              <div className="radio-toolbar">
                <input type="radio" id="bolig_ejersbolig" name="bolig_andel_eller_ejerbolig" value="Ejersbolig" required onClick={setNuvaerendeBoligType} />
                <label htmlFor="bolig_ejersbolig">Ejer</label>

                <input type="radio" id="bolig_andelsbolig" name="bolig_andel_eller_ejerbolig" value="Andelsbolig" required onClick={setNuvaerendeBoligType} />
                <label htmlFor="bolig_andelsbolig">Andel</label>
              </div>
            </fieldset>
            <p>Hvad er adressen på din nuvaerende ejerbolig? (valgfrit)</p>
            {/* Nuværende Bolig Adresse  */}
            <div className="flex-column-left field">
              <label htmlFor="adresse_nuvaerende_bolig">Adresse</label>
              <input type="text" name="adresse_nuvaerende_bolig" id="adresse_nuvaerende_bolig" placeholder="Adresse" minLength="2" required onChange={setNuvaerendeBoligAdresse} />
              <span className="error-message">Enter a valid value</span>
            </div>
            <div className="two-inputs-row">
              {/* Nuværende Bolig Postnr.  */}
              <div className="flex-column-left field">
                <label htmlFor="postnr_nuvaerende_bolig">Postnr.</label>
                <input type="text" name="postnr_nuvaerende_bolig" id="postnr_nuvaerende_bolig" placeholder="Postnr." minLength="4" required onChange={setNuvaerendeBoligPostnr} />
                <span className="error-message">Enter a valid value</span>
              </div>
              {/*Nuværende Bolig By  */}
              <div className="flex-column-left field">
                <label htmlFor="by_nuvaerende_bolig">By</label>
                <input type="text" name="by_nuvaerende_bolig" id="by_nuvaerende_bolig" placeholder="By" minLength="2" required onChange={setNuvaerendeBoligBy} />
                <span className="error-message">Enter a valid value</span>
              </div>
            </div>
            {/* Nuværende Bolig Land */}
            <div className="flex-column-left field">
              <label htmlFor="nuvaerende_bolig_land">Land</label>
              <input type="text" name="nuvaerende_bolig_land" id="nuvaerende_bolig_land" placeholder="Land" minLength="2" required onChange={setNuvaerendeBoligLand} />
              <span className="error-message">Enter a valid value</span>
            </div>

            {/* Nuværende Bolig Værd */}
            <div className="flex-column-left field">
              <label htmlFor="nuvaerende_bolig_vaerd">Hvor meget er boligen værd?</label>
              <div className="input-group">
                <div className="kr">kr.</div>
                <input type="number" name="nuvaerende_bolig_vaerd" id="nuvaerende_bolig_vaerd" placeholder="" minLength="2" required onChange={setNuvaerendeBoligVaerd} />
                <span className="error-message">Enter a valid value</span>
              </div>
            </div>

            {/* Har du andet bolig? Ja / Nej  */}
            <fieldset className="flex-column-left">
              <div>
                <legend>Har du andre ejerbolig?</legend>
              </div>

              <div className="radio-toolbar">
                <input type="radio" id="har_anden_bolig" name="har_anden_bolig" value="Har en bolig" required onClick={openAndenNuvaerendeBolig} />
                <label htmlFor="har_anden_bolig">Ja</label>

                <input type="radio" id="har_ikke_anden_bolig" name="har_anden_bolig" value="Har ikke en anden bolig" required onClick={closeAndenNuvaerendeBolig} />
                <label htmlFor="har_ikke_anden_bolig">Nej</label>
              </div>
            </fieldset>
          </div>

          {/* Andet Nuværende Bolig  */}
          <div className="flex-column-left" id="anden-nuvaerende-bolig">
            <fieldset className="flex-column-left">
              <div className="flex-row-space-around">
                <h3>Din anden ejerbolig</h3>
                <button className="btn-slet" onClick={closeAndenNuvaerendeBolig}>
                  Slet
                </button>
              </div>
              <div className="flex-row-left">
                <legend>Hvilke type bolig ejer du?</legend>
              </div>
              {/* Ejer eller Andel  */}
              <div className="radio-toolbar">
                <input type="radio" id="nuvaerende_ejersbolig" name="nuvaerende_andel_eller_ejerbolig" value="Ejersbolig" required onClick={setAndenNuvaerendeBoligType} />
                <label htmlFor="nuvaerende_ejersbolig">Ejer</label>

                <input type="radio" id="nuvaerende_andelsbolig" name="nuvaerende_andel_eller_ejerbolig" value="Andelsbolig" required onClick={setAndenNuvaerendeBoligType} />
                <label htmlFor="nuvaerende_andelsbolig">Andel</label>
              </div>
            </fieldset>

            {/* Nuværende Bolig (Location) */}
            <div className="flex-column-left">
              <p>Hvad er adressen på din nuværende ejerbolig? (valgfrit)</p>

              {/* Nuværende Bolig Adresse  */}
              <div className="flex-column-left field">
                <label htmlFor="adresse_nuvaerende_bolig">Adresse</label>
                <input type="text" name="adresse_nuvaerende_bolig" id="adresse_nuvaerende_bolig" placeholder="Adresse" minLength="2" required onChange={setAndenNuvaerendeBoligAdresse} />
                <span className="error-message">Enter a valid value</span>
              </div>

              <div className="two-inputs-row">
                {/* Nuværende Bolig Postnr.  */}
                <div className="flex-column-left field">
                  <label htmlFor="postnr_nuvaerende_bolig">Postnr.</label>
                  <input type="text" name="postnr_nuvaerende_bolig" id="postnr_nuvaerende_bolig" placeholder="Postnr." minLength="4" required onChange={setAndenNuvaerendeBoligPostnr} />
                  <span className="error-message">Enter a valid value</span>
                </div>

                {/* Nuværende Bolig By  */}
                <div className="flex-column-left field">
                  <label htmlFor="by_nuvaerende_bolig">By</label>
                  <input type="text" name="by_nuvaerende_bolig" id="by_nuvaerende_bolig" placeholder="By" minLength="2" required onChange={setAndenNuvaerendeBoligBy} />
                  <span className="error-message">Enter a valid value</span>
                </div>
              </div>

              {/* Nuværende Bolig Land */}
              <div className="flex-column-left field">
                <label htmlFor="nuvaerende_bolig_land">Land</label>
                <input type="text" name="nuvaerende_bolig_land" id="nuvaerende_bolig_land" placeholder="Land" minLength="2" required onChange={setAndenNuvaerendeBoligLand} />
                <span className="error-message">Enter a valid value</span>
              </div>

              {/* Andet Bolig  - Værd */}
              <div className="flex-column-left field">
                <label htmlFor="anden_bolig_vaerd">Hvor meget er boligen værd?</label>
                <div className="input-group">
                  <div className="kr">kr.</div>
                  <input type="number" name="anden_bolig_vaerd" id="anden_bolig_vaerd" placeholder="" minLength="2" required onChange={setAndenNuvaerendeBoligVaerd} />
                  <span className="error-message">Enter a valid value</span>
                </div>
              </div>
            </div>
          </div>

          {/* Next  */}
          <div className="flex-row-center">
            <Link id="btn-next-ejendele-one" className="btn-form" href="/loan/steps/03-ejendele/01-ejendele">
              Fortsæt
            </Link>
            <button id="btn-next-boligsituation-one-two" className="btn-form" type="submit" onClick={errorMessage}>
              Fortsæt
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

function showNextEjendele() {
  const btn = document.getElementById("btn-next-ejendele-one");
  if (btn.style.display === "none") {
    btn.style.display = "flex";
    btn.style.justifyContent = "center";
  } else {
    btn.style.display = "flex";
    btn.style.justifyContent = "center";
  }
}

function showNextBoligSituation() {
  const btn = document.getElementById("btn-next-boligsituation-one-two");
  if (btn.style.display === "none") {
    btn.style.display = "flex";
    btn.style.justifyContent = "center";
  } else {
    btn.style.display = "flex";
    btn.style.justifyContent = "center";
  }
}

function openSteps() {
  const steps = document.querySelector("#steps");
  if (steps.style.display === "flex") {
    steps.style.display = "none";
  } else {
    steps.style.display = "flex";
  }
}

function openNuvaerendeBolig() {
  const nuvaerendeBolig = document.querySelector("#nuvaerende-bolig");
  if (nuvaerendeBolig.style.display === "none") {
    nuvaerendeBolig.style.display = "flex";
  } else {
    nuvaerendeBolig.style.display = "flex";
  }
  showNextBoligSituation();
}

function closeNuvaerendeBolig() {
  const nuvaerendeBolig = document.querySelector("#nuvaerende-bolig");
  if (nuvaerendeBolig.style.display === "flex") {
    nuvaerendeBolig.style.display = "none";
  } else {
    nuvaerendeBolig.style.display = "none";
  }
  showNextEjendele();
}

function openAndenNuvaerendeBolig() {
  const andenNuvaerendeBolig = document.querySelector("#anden-nuvaerende-bolig");
  if (andenNuvaerendeBolig.style.display === "none") {
    andenNuvaerendeBolig.style.display = "flex";
  } else {
    andenNuvaerendeBolig.style.display = "flex";
  }
}

function closeAndenNuvaerendeBolig() {
  const andenNuvaerendeBolig = document.querySelector("#anden-nuvaerende-bolig");
  if (andenNuvaerendeBolig.style.display === "flex") {
    andenNuvaerendeBolig.style.display = "none";
  } else {
    andenNuvaerendeBolig.style.display = "none";
  }
}
