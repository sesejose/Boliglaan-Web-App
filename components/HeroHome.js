import Link from "next/link";

export default function HeroHome() {
  return (
    <>
      <div className="hero-home-container">
        <div className="hero-home-image col-6-13"></div>
        <div className="hero-home-text col-1-5">
          <h1>Få tilbud fra flere banker på én gang</h1>
          <h4>Ansøg om et boliglån uden stress: Vi gør det simpelt og støttende</h4>
          <Link href={"../loan/steps/01-din-nye-bolig/01-din-nye-bolig"} className="btn flex-row">
            Start her
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
