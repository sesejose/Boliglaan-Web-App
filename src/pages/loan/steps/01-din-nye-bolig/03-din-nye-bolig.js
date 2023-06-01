import Link from "next/link";
import StepsMobile from "../../../../../components/StepsMobile";
import Context from "../../../../../components/Context";
import { useContext } from "react";
import { useRouter } from "next/router";

export default function Vurdering() {
  const context = useContext(Context);
  const router = useRouter();

  function submit(e) {
    router.push(`/loan/steps/02-din-boligsituation/01-din-boligsituation`);
  }

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
          <h2>Vurdering af dit boligkøb</h2>
          <p>Din gældsfaktor og udbetaling til ny bolig er afgørende for, hvorvidt bankerne vil låne dig pengene. Hvis begge faktorer er inden for grænserne, forventer vi, at bankerne vil byde ind på din økonomi.</p>
          <div>
            <hr className="divider" />
            <p className="bold">Egenbetaling af boligen</p>
            {/* 25,00% */}
            <h3>{(context.nyeBolig.betaling * 100) / context.nyeBolig.pris}%</h3>
            <hr className="divider" />
            <div>Som hovedregel skal man have minimum 5% i udbetaling til et boligkøb. Har man det, vil de fleste banker låne penge til en ny bolig.</div>
          </div>
          <div>
            <hr className="divider" />
            <p className="bold">Din gældsfaktor efter boligkøb</p>
            {/* <h3>4,16</h3> */}
            <h3>{context.laanebehov / (context.nyeBolig.indkomst * 12)}</h3>
            <hr className="divider" />
            <div>Gældsfaktoren beregnes ved at dividere gæld med årlig indkomst før skat. Er tallet under 5, vil de fleste banker kunne tilbyde et boliglån.</div>
          </div>
          <div className="flex-row-center">
            <button className="btn-form" onClick={submit}>
              Videre til næste trin
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
