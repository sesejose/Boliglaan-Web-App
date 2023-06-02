import StepsMobile from "../../../../../components/StepsMobile";
import Link from "next/link";
import Context from "../../../../../components/Context";
import { useState, useContext } from "react";
import { useEffect } from "react";
// import { postNyeBolig } from "../../../../../components/Post";
import { patchNyeBolig } from "../../../../../components/Patch";
import { useRouter } from "next/router";

export default function Ejendele() {
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
        <form id="ejendeleForm">
          <h2>Ejendele</h2>
          <p>Lorem ipsum</p>
          <fieldset className="flex-column-left">
            <div className="flex-row-left">
              <legend>Hvilke type bolig vil du købe?</legend>
            </div>
            {/* Ejer eller Andel  */}
            <div className="radio-toolbar">
              <input type="radio" id="nye_bolig_ejersbolig" name="nye_bolig_andel_eller_ejerbolig" value="Ejersbolig" required />
              <label htmlFor="nye_bolig_ejersbolig">Ejer</label>

              <input type="radio" id="nye_bolig_andelsbolig" name="nye_bolig_andel_eller_ejerbolig" value="Andelsbolig" required />
              <label htmlFor="nye_bolig_andelsbolig">Andel</label>
            </div>
          </fieldset>
          {/* Submit  */}
          <div className="flex-row-center">
            <button className="btn-form" type="submit">
              Fortsæt
            </button>
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
