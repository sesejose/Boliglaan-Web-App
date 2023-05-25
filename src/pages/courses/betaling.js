import Link from "next/link";
import StepsCheckout from "../../../components/StepsCheckout";

export default function Betaling() {
  return (
    <>
      {/* Steps Checkout */}
      <StepsCheckout></StepsCheckout>

      {/**** FORM ****/}
      <div className="form-wrapper">
        <form>
          <h2>Betaling</h2>

          {/* Betal Fuldenavn  */}
          <div className="flex-column-left field">
            <label htmlFor="betal_navn">Fulde navn</label>
            <input type="text" name="betal_navn" id="betal_navn" placeholder="Fuldenavn" minLength="2" required />
            <span className="error-message">Enter a valid value</span>
          </div>

          {/* Betal Kortnummer  */}
          <div className="flex-column-left field">
            <label htmlFor="kortnavn">Kortnavn</label>
            <input type="text" name="kortnavn" id="kortnavn" placeholder="Kortnavn" minLength="16" required />
            <span className="error-message">Enter a valid value</span>
          </div>

          {/* Udløbsdato og CVV */}
          <div className="flex-column-left">
            {/* <p>Hvad er adressen på den bolig, du ønsker at købe? (valgfrit)</p> */}

            <div className="two-inputs-row">
              {/* Udløbsdato.  */}
              <fieldset className="flex-column-left">
                <div className="flex-row-left">
                  <legend>Udløbsdato</legend>
                </div>
                {/* Ejer eller Andel  */}
                <div className="fieldset-2-container field">
                  <input type="text" id="betal-card-month" name="betal-card-month" placeholder="mm" />
                  <label htmlFor="betal-card-month"></label>

                  <input type="text" id="betal-card-year" name="betal-card-year" placeholder="yy" />
                  <label htmlFor="betal-card-year"></label>
                </div>
              </fieldset>

              {/* CVV2  */}
              <div className="flex-column-left field">
                <label htmlFor="betal_cvv">
                  CVV2
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                  </svg>
                </label>
                <input type="text" name="betal_cvv" id="betal_cvv" placeholder="CVV2" minLength="3" required />
                <span className="error-message">Enter a valid value</span>
              </div>
            </div>

            {/* Submit  */}
            <div className="flex-row-center">
              <Link className="btn-form" href="/">
                Betal
              </Link>
            </div>
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
