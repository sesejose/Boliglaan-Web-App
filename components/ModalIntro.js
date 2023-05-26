import Link from "next/link";

export default function ModalIntro() {
  return (
    <>
      <div id="modal-intro" className="grid-center">
        <div className="flex-column-center">
          <h1>Goft at vide inden du går i gang med din ansøgning</h1>
          <p>
            I gennem ansøgning process vi kommer at pørger dig om forskællige ting, bland andet den bolig du/I ønsker at købe, din/jeres boligsituation og hvis du/I har gælder i form og boliglån, realkreditlån, banklån eller SU lån på din/jeres
            nuværende ejersbolig hvis ejer en. Vi kommer også at spørger om husholdindkomster, opsparinger og andre gælder i form i banklån. Så anbefælles at du/I har med dig disse informationer inden du går i gang for at fylde alle fælter ind.
          </p>
          <p>Her en liste med hvad kommer vi at spørger dig:</p>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
          <p>Det er også en god idé at oprette en konto og log ind, så hvis du skal forlade vi gemmer alle informationer du har allerede indstat når du kommer tilbage.</p>
          <div className="btns-container">
            <Link className="btn" href={""}>
              Fortsæt uden logge ind
            </Link>
            <Link className="btn" href={""}>
              Opret en konto
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
