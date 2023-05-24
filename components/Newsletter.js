import Link from "next/link";

export default function Newsletter() {
  return (
    <>
      <div id="newsletter" className="grid">
        <form className="col-3-11">
          <h3>Vil du have værdifulde tips og spændende nyheder?</h3>
          <p>Tilmeld dig vores nyhedsbrev og få adgang til værdifulde tips, ekspertrådgivning og spændende nyheder direkte i din indbakke.</p>
          {/* Nye Bolig Prisen  */}
          <div className="flex-column-left field">
            <label htmlFor="newsletter"></label>
            <div className="input-group">
              <div className="tilmeld">
                <Link href={"/"} className="btn-newsletter">
                  Tilmeld
                </Link>
              </div>
              <input type="text" name="newsletter" id="subscribe" placeholder="Indtast din e-mail adresse" minLength="7" required />
              <span className="error-message">Enter a valid value</span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
