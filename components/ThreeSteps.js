import Image from "next/image";
import Link from "next/link";
import ikonfortael from "public/ikonfortael.svg";
import ikonvaelg from "public/ikonvaelg.svg";
import ikonskift from "public/ikonskift.svg";

export default function ThreeSteps() {
  return (
    <>
      <div id="three-steps" className="grid">
        {/* Ikon Fortæl  */}

        <div className="fortael">
          <Image className="ikonfortael" src={ikonfortael} alt={""} width={"224.14"} height={"109.69"} priority sizes="(max-width: 700px) 100vw, 700px" />
          <div className="pt">
            <h4>Start med at fortælle os dine behov og ønsker</h4>
          </div>
          <div>
            <p>
              Start din rejse ved at udfylde vores enkle formular, hvor du kan give os oplysninger om dine økonomiske situation og dine ønsker til din kommende bolig. Vi bruger disse oplysninger til at finde de bedste lånetilbud, der passer til dine
              behov.
            </p>
          </div>
        </div>

        {/* Ikon Vælg  */}

        <div className="vaelg">
          <Image className="ikonvaelg" src={ikonvaelg} alt={""} width={"224.14"} height={"109.69"} priority sizes="(max-width: 700px) 100vw, 700px" />
          <div className="pt">
            <h4>Vi finder de bedste lånetilbud for dig</h4>
          </div>
          <div>
            <p>
              Vores ekspertteam gennemgår dine oplysninger og finder op til 7 forskellige lånetilbud fra vores samarbejdspartnere, der passer til dine ønsker og økonomi. Vi præsenterer derefter disse lånetilbud for dig, så du kan sammenligne og
              træffe en informeret beslutning.
            </p>
          </div>
        </div>

        {/* Ikon Skift  */}

        <div className="skift">
          <Image className="ikonskift" src={ikonskift} alt={""} width={"224.14"} height={"109.69"} priority sizes="(max-width: 700px) 100vw, 700px" />
          <div className="pt">
            <h4>Vælg det bedste lånetilbud og skift bank let</h4>
          </div>
          <div>
            <p>Når du har valgt det bedste lånetilbud, hjælper vi dig med at skifte bank, hvis det er nødvendigt. Vi sørger for alt det praktiske, så du kan koncentrere dig om at nyde dit nye hjem. Og husk, vores service er helt gratis for dig!</p>
          </div>
        </div>
      </div>
    </>
  );
}
