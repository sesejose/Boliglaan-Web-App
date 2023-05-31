import { useContext, useState } from "react";
import Context from "./Context";
import Image from "next/image";
import Link from "next/link";

export default function Basket() {
  const context = useContext(Context);

  return (
    <>
      <div id="basket">
        <div className="basket-container">
          <div className="flex-row-space-around">
            <h2>Din kurv</h2>
            <div className="close">
              <button className="btn-close" onClick={closeBasket} href={""}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </Link>
          {/* <Image src={"/herokurser"} width={1920} height={1080} alt="photo of the festival" /> */}
        </div>
      </div>
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
