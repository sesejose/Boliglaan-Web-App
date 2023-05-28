import Link from "next/link";

export default function ContactUs() {
  return (
    <>
      <div id="contact-us" className="grid">
        {/* Om os  */}
        <div className="col-3-11">
          <h2>Kontakt os for personlig og professionel rådgivning</h2>

          <p>
            Vi er her for at hjælpe dig med at finde den bedste boliglånsløsning til dine behov. Vores team af eksperter inden for økonomi og boligfinansiering er klar til at besvare eventuelle spørgsmål, du måtte have, og give dig den rådgivning, du
            har brug for, for at kunne realisere dine boligdrømme. Vi vil meget gerne høre fra dig! Uanset om du har spørgsmål eller feedback, er vores dør altid åben. Du kan besøge os på vores kontor i Nyhavn eller kontakte os via telefon, e-mail
            eller kontaktformularen her på siden. Vi ser frem til at høre fra dig!
          </p>
          <div className="btns-container">
            <Link href={""} className="btn-contact">
              <div className="flex-row-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
                <p className="">12 34 56 78</p>
              </div>
            </Link>
            <Link href={""} className="btn-contact">
              <div className="flex-row-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>
                <p className="">info@boliglån.dk</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
