import Image from "next/image";
import nordea from "../public/nordea.svg";
import jyskebank from "../public/jyskebank.svg";
import danskebank from "../public/nordea.svg";
import nykredit from "../public/nykredit.svg";
import sydbank from "../public/sydbank.svg";

export default function OurPartners() {
  return (
    <>
      <div id="our-partners" className="grid">
        {/* Om os  */}
        <div className="col-12 partners-container">
          <h2>Our partner</h2>
          <div className="partners">
            <Image className="partner" src={nordea} alt={""} width={"224.14"} height={"109.69"} priority sizes="(max-width: 700px) 100vw, 700px" />
            <Image className="partner" src={jyskebank} alt={""} width={"224.14"} height={"109.69"} priority sizes="(max-width: 700px) 100vw, 700px" />
            <Image className="partner" src={danskebank} alt={""} width={"224.14"} height={"109.69"} priority sizes="(max-width: 700px) 100vw, 700px" />
            <Image className="partner" src={nykredit} alt={""} width={"224.14"} height={"109.69"} priority sizes="(max-width: 700px) 100vw, 700px" />
            <Image className="partner" src={sydbank} alt={""} width={"224.14"} height={"109.69"} priority sizes="(max-width: 700px) 100vw, 700px" />
          </div>
        </div>
      </div>
    </>
  );
}
