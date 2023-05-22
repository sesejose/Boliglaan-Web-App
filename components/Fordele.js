import Image from "next/image";
import Link from "next/link";
import ikonfortael from "public/ikonfortael.svg";
import ikonvaelg from "public/ikonvaelg.svg";
import ikonskift from "public/ikonskift.svg";

export default function Fordele() {
  return (
    <>
      <div id="fordele" className="grid">
        {/* Ikon Fortæl  */}

        <div className="fortael">
          <Image className="ikonfortael" src={ikonfortael} alt={""} width={"224.14"} height={"109.69"} priority sizes="(max-width: 700px) 100vw, 700px" />
          <div className="pt">
            <h4>Få det bedste tilbud med vores enkle proces</h4>
          </div>
          <div className="pt">
            <p>
              Hos Boliglån.dk tror vi på, at processen med at finde den rette boligfinansiering ikke behøver at være besværlig. Vi har udviklet en enkel og effektiv proces, der hjælper dig med at finde den bedste finansieringsløsning til dine behov.
              Uanset om du er på udkig efter en boligkøberfinansiering, et realkreditlån eller en refinansiering, kan du nemt og hurtigt komme i gang ved at følge vores trin-for-trin-proces.
            </p>
          </div>
        </div>

        {/* Ikon Vælg  */}

        <div className="vaelg">
          <Image className="ikonvaelg" src={ikonvaelg} alt={""} width={"224.14"} height={"109.69"} priority sizes="(max-width: 700px) 100vw, 700px" />
          <div className="pt">
            <h4>Få det bedste tilbud med vores enkle proces</h4>
          </div>
          <div className="pt">
            <p>
              Hos Boliglån.dk tror vi på, at processen med at finde den rette boligfinansiering ikke behøver at være besværlig. Vi har udviklet en enkel og effektiv proces, der hjælper dig med at finde den bedste finansieringsløsning til dine behov.
              Uanset om du er på udkig efter en boligkøberfinansiering, et realkreditlån eller en refinansiering, kan du nemt og hurtigt komme i gang ved at følge vores trin-for-trin-proces.
            </p>
          </div>
        </div>

        {/* Ikon Skift  */}

        <div className="skift">
          <Image className="ikonskift" src={ikonskift} alt={""} width={"224.14"} height={"109.69"} priority sizes="(max-width: 700px) 100vw, 700px" />
          <div className="pt">
            <h4>Få det bedste tilbud med vores enkle proces</h4>
          </div>
          <div className="pt">
            <p>
              Hos Boliglån.dk tror vi på, at processen med at finde den rette boligfinansiering ikke behøver at være besværlig. Vi har udviklet en enkel og effektiv proces, der hjælper dig med at finde den bedste finansieringsløsning til dine behov.
              Uanset om du er på udkig efter en boligkøberfinansiering, et realkreditlån eller en refinansiering, kan du nemt og hurtigt komme i gang ved at følge vores trin-for-trin-proces.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
