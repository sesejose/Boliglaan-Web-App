import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function Quotes() {
  return (
    <>
      <div id="quotes-title" className="grid-center">
        <div className="col-12 flex-row-center">
          <h2>Det siger vores kunder</h2>
        </div>
      </div>
      <div id="quotes" className="grid-center">
        {/* <div id="quotes" className=""> */}
        <AwesomeSlider className="col-12 flex-row-center">
          <div className="quote-container">
            <div className="quotation-marks">“</div>
            <div className="flex-column-center">
              <p>Jeg modtog altid hurtige svar fra långivere og supportteamet på boliglån.dk. De var altid hjælpsomme og besvarede mine spørgsmål på en professionel og venlig måde. Det var virkelig en behagelig oplevelse at kommunikere med dem.</p>
              <p className="bold ptb">Stine Rørbæk</p>
            </div>
            <div className="quotation-marks">”</div>
          </div>
          <div className="quote-container">
            <div className="quotation-marks">“</div>
            <div className="flex-column-center">
              <p>
                Jeg var virkelig imponeret over, hvor lav renten på mit boliglån var, efter jeg brugte boliglån.dk. Jeg var lidt skeptisk i starten, men efter at have modtaget flere tilbud fra forskellige banker, var jeg i stand til at vælge den, der
                tilbød mig den bedste rente. Jeg sparede virkelig mange penge på denne måde. Jeg ville helt sikkert bruge boliglån.dk igen, hvis jeg skulle optage et boliglån.
              </p>
              <p className="bold ptb">Peter Tolstrup Aegesen</p>
            </div>
            <div className="quotation-marks">”</div>
          </div>
          <div className="quote-container">
            <div className="quotation-marks">“</div>
            <div className="flex-column-center">
              <p>
                Jeg sparede virkelig tid og penge ved at bruge boliglån.dk. Normalt ville jeg have brugt dage på at undersøge forskellige låneudbydere og banker og sammenligne renter og betingelser. Men med boliglån.dk blev alt gjort for mig. Jeg
                modtog flere tilbud og kunne vælge den, der passede bedst til mig. Det var virkelig en fantastisk oplevelse.
              </p>
              <p className="bold ptb">Keld Marple</p>
            </div>
            <div className="quotation-marks">”</div>
          </div>
          <div className="quote-container">
            <div className="quotation-marks">“</div>
            <div className="flex-column-center">
              <p>Jeg fandt de rigtige kurser og de var meget hjælpsomme, især dem om: Hvordan er processen og hvordan man ansøger, boliglån og ejendomshandel, de nødvendige dokumenter, renter, gebyrer og vilkår for lånet.</p>
              <p className="bold ptb">Stine Rørbech</p>
            </div>
            <div className="quotation-marks">”</div>
          </div>
        </AwesomeSlider>
        {/* </div> */}
      </div>
    </>
  );
}
