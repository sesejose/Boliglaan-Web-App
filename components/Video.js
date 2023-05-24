import Link from "next/link";

export default function Video() {
  return (
    <>
      <div id="video" className="grid-center">
        <div className="col-3-11">
          <div className="flex-row-center">
            <h2>Kurser i boliglån og ejendomshandel</h2>
            <h4 className="">
              Har du brug for rådgivning eller vejledning i forbindelse med boliglån og ejendomshandel? Vi tilbyder kurser og undervisning, der dækker alt fra ansøgningsprocessen til rentesatser og gebyrer. Vælg mellem følgende kurser:
            </h4>
          </div>

          <div className="card-courses-container-video">
            <div className="card-courses-image"></div>
            <div className="info-video-container padding">
              <div className="video-description">
                <div className="green">Kategori</div>
                <h4>Boligkøb for begyndere</h4>
                <p>Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.</p>
                <Link className="btn-second" href={""}>
                  Læs mere
                </Link>
              </div>
              <div className="video-price">
                <h4 className="bold">100 DKK</h4>
                <div className="">inkl.moms</div>
                <Link className="btn" href={""}>
                  Tilføj i kurv
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="">
            <p>
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
              condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
              Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a
              convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices
              nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis
              nisi, ac posuere leo. Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae
              mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis
              nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat
              maximus. Mauris consequat tellus id tempus aliquet. Vestibulum dictum ultrices elit a luctus. Sed in ante ut leo congue posuere at sit amet ligula. Pellentesque eget augue nec nisl sodales blandit sed et sem. Aenean quis finibus arcu,
              in hendrerit purus. Praesent ac aliquet lorem. Morbi feugiat aliquam ligula, et vestibulum ligula hendrerit vitae. Sed ex lorem, pulvinar sed auctor sit amet, molestie a nibh. Ut euismod nisl arcu, sed placerat nulla volutpat aliquet.
              Ut id convallis nisl. Ut mauris leo, lacinia sed elit id, sagittis rhoncus odio. Pellentesque sapien libero, lobortis a placerat et, malesuada sit amet dui. Nam sem sapien, congue eu rutrum nec, pellentesque eget ligula.
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
}
