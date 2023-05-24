import Link from "next/link";

export default function Card() {
  return (
    <>
      {/* <div className="card-container"> */}
      {/* <div className="card-image"></div> */}
      {/* <div className="flex-row-space-around mtb padding"> */}
      {/* <div className="flex-column-left"> */}
      {/* <div className="green">Kategori</div> */}
      {/* <h4>Kursus Overskrift</h4> */}
      {/* <p>Lorem ipsim</p> */}
      {/* </div> */}
      {/* <div className="flex-column-right"> */}
      {/* <p className="bold">100 DKK</p> */}
      {/* <div className="smaller">inkl.moms</div> */}
      {/* <Link className="btn" href={""}> */}
      {/* Tilføj i kurv */}
      {/* </Link> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}

      <div className="card-container">
        <div className="card-image"></div>
        <div className="info-card-container padding">
          <div className="card-description">
            <div className="green">Kategori</div>
            <h4>Boligkøb for begyndere</h4>
            <p>Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.</p>
          </div>
          <div className="card-price">
            <h4 className="bold">100 DKK</h4>
            <div className="">inkl.moms</div>
            <Link className="btn" href={""}>
              Tilføj i kurv
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
