import { useContext, useState } from "react";
import Context from "./Context";
import Image from "next/image";
import Link from "next/link";

export default function Basket() {
  const context = useContext(Context);

  return (
    <>
      <section id="basket">
        <div className="basket-container">
          <h2>Din kurv</h2>
          <div className="card-basket-container">
            <div className="card-basket-image"></div>

            <div className="flex-row-space-around mtb padding">
              <div className="flex-column-left">
                <div className="smaller green">Kategori</div>
                <h4>Kursus Overskrift</h4>
                <p>Lorem ipsim</p>
              </div>
              <div className="flex-column-right">
                <p className="bold">100 DKK</p>
                <div className="smaller">inkl.moms</div>
                <Link className="btn-slet" href={""} onClick={closeBasket}>
                  Slet
                </Link>
              </div>
            </div>
          </div>

          <hr className="divider" />

          <div className="flex-row-space-around mtb">
            <div className="flex-column-left">
              <div className="small">1 kursus</div>
              <h4 className="small bold">Total</h4>
            </div>
            <div className="flex-column-right">
              <p className="">100 kr.</p>
              <h4 className="bold">100 kr.</h4>
            </div>
          </div>

          <hr className="divider" />
          <Link href={"/courses/personlige-oplysninger"} className="btn flex-row">
            Går til kasse
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </Link>
          {/* <Image src={"/herokurser"} width={1920} height={1080} alt="photo of the festival" /> */}
        </div>
      </section>
    </>
  );
}

function closeBasket() {
  const basket = document.querySelector("#basket");
  if (basket.style.display === "none") {
    basket.style.display = "flex";
  } else {
    basket.style.display = "none";
  }
}
