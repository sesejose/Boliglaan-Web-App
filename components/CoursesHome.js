import Link from "next/link";

export default function CoursesHome() {
  return (
    <>
      <div className="grid-center" id="courses-home-container">
        <div className="courses-home-image col-1-6"></div>
        <div className="courses-home-text col-6-13">
          <h2>Lær mere om boliglån og ejendomshandel</h2>
          <p>
            Vil du vide mere om boliglån, ejendomshandel eller processen for at ansøge om et boliglån? Har du brug for rådgivning om dokumentation, gebyrer, rentesatser eller vilkår? Hos boliglån.dk tilbyder vi kurser, der dækker alle disse emner og
            mere til. Vores erfarne rådgivere står klar til at hjælpe dig med at træffe de rigtige valg og tage de nødvendige skridt for at realisere dine drømme om at købe din egen bolig.
          </p>
          <Link href={"../loan/steps/01-din-nye-bolig/01-din-nye-bolig"} className="btn">
            Find kurserne her
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
