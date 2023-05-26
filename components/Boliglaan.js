import Context from "/components/Context";
import { useState, useContext } from "react";

export default function Boliglaan() {
  const context = useContext(Context);

  return (
    <>
      <div className="flex-column-left" id="boliglaan-form-group">
        <div className="flex-row-space-around">
          <h3>Boliglån på {context.nuvaerendeBolig.adresse}</h3>
          <button className="btn-slet" onClick={closeAndSetBoligLaan}>
            Slet
          </button>
        </div>
        {/* boliglaanrestgaeld: "", */}
        <div className="flex-column-left field">
          <label htmlFor="boliglaanrestgaeld">Hvad er restgælden på banklånet?</label>
          <div className="input-group">
            <div className="kr">kr.</div>
            <input type="number" name="boliglaanrestgaeld" id="boliglaanrestgaeld" placeholder="" minLength="" required onChange={setNuvaerendeBoligBoligLaanrestGaeld} />
            <span className="error-message">Enter a valid value</span>
          </div>
          <p className="smaller">Restgælden kan du finde på din mobilbank, betalingsoversigt PBS eller i din E-boks</p>
        </div>
        {/* boliglaanrente: "", */}
        <div className="flex-column-left field">
          <label htmlFor="bolig_laan_rente">Hvad betaler du i rente?</label>
          <div className="input-group">
            <div className="kr">%</div>
            <input type="number" name="bolig_laan_rente" id="bolig_laan_rente" placeholder="" minLength="" required onChange={setNuvaerendeBoligBoligLaanRente} />
            <span className="error-message">Enter a valid value</span>
          </div>
        </div>
        {/* boliglaanafdrag: "", */}
        <fieldset className="flex-column-left">
          <div className="flex-row-left">
            <legend>Afdrager du på dit lån?</legend>
          </div>
          {/* Afdrager du på dit lån? Ja / Nej  */}
          <div className="radio-toolbar">
            <input type="radio" id="boliglaanafdrag_ja" name="boliglaanafdrag" value="Ja" required onClick={setNuvaerendeBoligBoligLaanAfdrag} />
            <label htmlFor="boliglaanafdrag_ja">Ja</label>

            <input type="radio" id="boliglaanafdrag_nej" name="boliglaanafdrag" value="Nej" required onClick={setNuvaerendeBoligBoligLaanAfdrag} />
            <label htmlFor="boliglaanafdrag_nej">Nej</label>
          </div>
        </fieldset>
      </div>
    </>
  );
}
