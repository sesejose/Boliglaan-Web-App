import StepsMobile from "../../../../../components/StepsMobile";
import Link from "next/link";

export default function LidtOmDig() {
  return (
    <>
      <div className="grid">
        <div className="forms-container">
          {/* Back and Steps Bar */}
          <div className="flex-row-space-around step-back-container">
            <div className="flex-row-left">
              <Link href="/index" className="flex-row-left back">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
                Ejendele
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
          <form>
            <h2>Lidt om dig</h2>
            <div className="flex-column-left field">
              <label htmlFor="name">Fornavn</label>
              <input type="text" name="fornavn" id="fornavn" placeholder="Fornavn" minLength="2" required />
              <span className="error-message">Enter a valid value</span>
            </div>
            <div className="flex-column-left field">
              <label htmlFor="efternavn">Efternavn</label>
              <input type="text" name="efternavn" id="efternavn" placeholder="Efternavn" minLength="2" required />
              <span className="error-message">Enter a valid value</span>
            </div>
            <div className="flex-column-left field">
              <label htmlFor="adress">Adress</label>
              <input type="text" name="adress" id="adress" placeholder="Adress" minLength="2" required />
              <span className="error-message">Enter a valid value</span>
            </div>
            <fieldset className="flex-column-left">
              <div className="flex-row-left">
                <legend>Er du registreret i RKI?</legend>
                <div title="This is a mouseover text!">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                  </svg>
                </div>
              </div>
              <div className="radio-toolbar">
                <input type="radio" id="yes" name="radioYesNo" value="yes" checked />
                <label htmlFor="yes">Yes</label>

                <input type="radio" id="no" name="radioYesNo" value="orange" />
                <label htmlFor="no">No</label>
              </div>
              {/* <span className="hint">Is the show still being recorded?</span> */}
            </fieldset>
            <div className="flex-row-center">
              <button className="btn-form" type="button" value="submit" id="button" disabled>
                Videre til næste trin
              </button>
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
