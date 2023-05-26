import StepsMobile from "../../../../../components/StepsMobile";
import Link from "next/link";
import Context from "../../../../../components/Context";
import { useState, useContext } from "react";

export default function DinNyeBolig(props) {
  const context = useContext(Context);

  // Nye Bolig type
  function setNyeBoligType(e) {
    context.setNyeBolig((previous) => ({ ...previous, type: e.target.value }));
    console.log(e.target.value);
  }
  // Nye Bolig Adresse
  function setNyeBoligAdresse(e) {
    context.setNyeBolig((previous) => ({ ...previous, adresse: e.target.value }));
    console.log(e.target.value);
  }
  // Nye Bolig Postnr
  function setNyeBoligPostnr(e) {
    context.setNyeBolig((previous) => ({ ...previous, postnr: e.target.value }));
    console.log(e.target.value);
  }
  // Nye Bolig By
  function setNyeBoligBy(e) {
    context.setNyeBolig((previous) => ({ ...previous, by: e.target.value }));
    console.log(e.target.value);
  }
  // Nye Bolig Land
  function setNyeBoligLand(e) {
    context.setNyeBolig((previous) => ({ ...previous, land: e.target.value }));
    console.log(e.target.value);
  }

  return (
    <>
      {/* Modal intro  */}
      <div id="modal-intro" className="grid-center">
        <div className="modal-container flex-column-center col-2-12">
          <h2>Goft at vide inden du går i gang med din ansøgning</h2>
          <p className="small">
            I gennem ansøgning process vi kommer at pørger dig om forskællige ting, bland andet den bolig du/I ønsker at købe, din/jeres boligsituation og hvis du/I har gælder i form af boliglån, realkreditlån, banklån eller SU lån på din/jeres
            nuværende ejersbolig hvis der er en. Vi kommer også at spørger om husholdindkomster, opsparinger og andre gæld som kassekredit og banklån. Så anbefælles at have disse informationer inden du går i gang for at fylde fælterne ind.
          </p>
          <br></br>
          <p className="small">Her en liste med hvad kommer vi at spørger dig:</p>

          <div className="flex-row-modal">
            <ul className="bullet">
              <li>
                <strong>Boligsituation</strong>
              </li>
              <li>Boligen type</li>
              <li>Boligen adresse</li>
              <li>Boligen værd</li>
              <li>Boliglån type (hvis der er)</li>
              <li>Boliglån restgæld, rente og rente type (hvis der er)</li>
            </ul>
            <ul className="bullet">
              <li>
                <strong>Ejendele</strong>
              </li>
              <li>Køretøj mærke, model, årgang og ejerforholdene</li>
              <li>Køretøj lån (hvis der er)</li>
              <li>Køretøj låneudbyder, skylder og månedlige ydelse</li>
            </ul>
            <ul className="bullet">
              <li>
                <strong>Indtægter</strong>
              </li>
              <li>Månedlig husstandsindkomst (før skat)</li>
              <li>Arbejdsform og månedlige indkomst</li>
              <li>Fagforening (hvis der er)</li>
              <li>A-kasse (hvis der er)</li>
            </ul>
            <ul className="bullet">
              <li>
                <strong>Gæld</strong>
              </li>
              <li>SU lån (hvis der er)</li>
              <li>Banklån (hvis der er)</li>
              <li>Banklån udbyder</li>
              <li>Restgæld på lån</li>
              <li>Rentesats på lån</li>
              <li>Rentetype og månedlige ydelse</li>
            </ul>
            <ul className="bullet">
              <li>
                <strong>Opsparing</strong>
              </li>
              <li>Din bank</li>
              <li>Husstanden stående på opsparings og lønkonti</li>
              <li>Renten på opsparingskontoen</li>
              <li>Kassekredit (hvis der er)</li>
              <li>Kassekreditten maksimale beløb, penge på den og rente</li>
              <li>Aktier (hvis der er) og penge i den</li>
              <li>Penge i private pensionsopsparing (hvis der er)</li>
            </ul>
          </div>

          <p className="small">Det er også en god idé at oprette en konto og log ind, så hvis du skal forlade vi gemmer alle informationer du har allerede indstat for når du kommer tilbage.</p>
          <p>God fornjølse</p>
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
        <form id="nyeBoligFormOne">
          <h2>Din nye bolig</h2>
          <p>For at bankerne kan komme med et tilbud på din økonomi, er de nødt til at vide noget omkring dine ønsker og behov.</p>
          <fieldset className="flex-column-left">
            <div className="flex-row-left">
              <legend>Hvilke type bolig vil du købe?</legend>
            </div>
            {/* Ejer eller Andel  */}
            <div className="radio-toolbar">
              <input type="radio" id="nye_bolig_ejersbolig" name="nye_bolig_andel_eller_ejerbolig" value="Ejersbolig" required onClick={setNyeBoligType} />
              <label htmlFor="nye_bolig_ejersbolig">Ejersbolig</label>

              <input type="radio" id="nye_bolig_andelsbolig" name="nye_bolig_andel_eller_ejerbolig" value="Andelsbolig" required onClick={setNyeBoligType} />
              <label htmlFor="nye_bolig_andelsbolig">Andelsbolig</label>
            </div>
          </fieldset>
          {/* Nye Bolig Adresse */}
          <div className="flex-column-left">
            <p>Hvad er adressen på den bolig, du ønsker at købe? (valgfrit)</p>

            {/* Adresse  */}
            <div className="flex-column-left field">
              <label htmlFor="adresse_nye_bolig">Adresse</label>
              <input type="text" name="adresse_nye_bolig" id="adresse_nye_bolig" placeholder="Adresse" minLength="2" required onChange={setNyeBoligAdresse} />
              <span className="error-message">Enter a valid value</span>
            </div>

            <div className="two-inputs-row">
              {/* Postnr.  */}
              <div className="flex-column-left field">
                <label htmlFor="postnr_nye_bolig">Postnr.</label>
                <input type="text" name="postnr_nye_bolig" id="postnr_nye_bolig" placeholder="Postnr." minLength="4" required onChange={setNyeBoligPostnr} />
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
            <Link className="btn-form" href={"/loan/steps/01-din-nye-bolig/02-din-nye-bolig"}>
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

function hideModalIntro() {
  document.querySelector("#modal-intro").classList.add("hiden");
}

// function submit(e) {
//   // e.preventDefault();
//   window.location.href = "/loan/steps/01-din-nye-bolig/02-din-nye-bolig";
//   document.getElementById("nyeBoligFormOne").submit();
// }
