import Link from "next/link";
import StepsMobile from "../../../../../components/StepsMobile";

Link;
export default function Finansiering() {
  return (
    <>
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
        <form>
          <h2>Finansiering af nye bolig</h2>
          {/* Nye Bolig Prisen  */}
          <div className="flex-column-left field">
            <label htmlFor="ny_bolig_prisen">Hvad ønsker du at købe bolig for?</label>
            <div className="input-group">
              <div className="kr">kr.</div>
              <input type="number" name="ny_bolig_prisen" id="ny_bolig_prisen" placeholder="" minLength="2" required />
              <span className="error-message">Enter a valid value</span>
            </div>
          </div>
          {/* Din udbetaling  */}
          <div className="flex-column-left field">
            <label htmlFor="ny_bolig_udbetaling">Hvor meget kan du selv lægge til udbetaling i boligen? Inkludér evt. overskud fra salg af din nuværende bolig.</label>
            <div className="input-group">
              <div className="kr">kr.</div>
              <input type="number" name="ny_bolig_udbetaling" id="ny_bolig_udbetaling" placeholder="" minLength="2" required />
              <span className="error-message">Enter a valid value</span>
            </div>
          </div>
          {/* Din Lånbehov Calculate it with a function and Update */}
          <div className="amount-expected">
            <h4>Lånebehov til boligkøb: 2.200.000 kr.</h4>
          </div>
          <h2>Indkomst og gæld</h2>
          {/* Husstandsindkomst  */}
          <div className="flex-column-left field">
            <label htmlFor="husstandsindkomst">Månedlig husstandsindkomst (før skat)</label>
            <div className="input-group">
              <div className="kr">kr.</div>
              <input type="number" name="husstandsindkomst" id="husstandsindkomst" placeholder="" minLength="2" required />
              <span className="error-message">Enter a valid value</span>
            </div>
            <span className="smaller">(Inkludér eks. løn, folkepension, SU, sociale ydelser og lignende)</span>
          </div>
          {/* Gæld first   */}
          <div className="flex-column-left field">
            <label htmlFor="anden_gæld_first">Hvor meget anden gæld har du/I efter boligkøbet?</label>
            <div className="input-group">
              <div className="kr">kr.</div>
              <input type="number" name="anden_gæld_first" id="anden_gæld_first" placeholder="" minLength="2" required />
              <span className="error-message">Enter a valid value</span>
            </div>
            <span className="smaller">(Inkludér eks. billån, forbrugslån, lån i andre boliger der ikke sælges og lignende)</span>
          </div>
          {/* Submit  */}
          <div className="flex-row-center">
            <Link className="btn-form" onClick={openSteps} href="/loan/steps/01-din-nye-bolig/03-din-nye-bolig">
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
