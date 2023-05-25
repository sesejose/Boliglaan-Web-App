import Link from "next/link";
import StepsCheckout from "../../../components/StepsCheckout";

export default function Personlige() {
  return (
    <>
      {/* Steps Checkout */}
      <StepsCheckout></StepsCheckout>

      {/**** FORM ****/}
      <div className="form-wrapper">
        <form>
          <h2>Personlige oplysninger</h2>

          {/* Fornavn  */}
          <div className="flex-column-left field">
            <label htmlFor="per_op_fornavn">Fornavn</label>
            <input type="text" name="per_op_fornavn" id="per_op_fornavn" placeholder="Fornavn" minLength="2" required />
            <span className="error-message">Enter a valid value</span>
          </div>

          {/* Efternavn  */}
          <div className="flex-column-left field">
            <label htmlFor="per_op_efternavn">Efternavn</label>
            <input type="text" name="per_op_efternavn" id="per_op_efternavn" placeholder="Efternavn" minLength="2" required />
            <span className="error-message">Enter a valid value</span>
          </div>

          {/* Nye Bolig Adresse */}
          <div className="flex-column-left">
            {/* <p>Hvad er adressen på den bolig, du ønsker at købe? (valgfrit)</p> */}

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

          {/* Email  */}
          <div className="flex-column-left field">
            <label htmlFor="per_op_email">E-mail</label>
            <input type="text" name="per_op_email" id="per_op_email" placeholder="E-mail" minLength="7" required />
            <span className="error-message">Enter a valid value</span>
          </div>

          {/* Telefonnummer  */}
          <div className="flex-column-left field">
            <label htmlFor="per_op_tel">Telefonnummer</label>
            <input type="text" name="per_op_tel" id="per_op_tel" placeholder="Telefonnummer" minLength="7" required />
            <span className="error-message">Enter a valid value</span>
          </div>

          {/* Submit  */}
          <div className="flex-row-center">
            <Link className="btn-form" href="/courses/betaling">
              Gå til betaling
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
