import Image from "next/image";
import Context from "./Context";
import { useContext } from "react";
import Link from "next/link";
import logo from "public/logo.svg";
import Basket from "./Basket";

export default function Nav() {
  const context = useContext(Context);
  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">
            {/* Logo  */}
            <Link href={"/"} onClick={closeAll}>
              <Image className="logo" src={logo} alt={""} width={"188.71"} height={"90"} priority sizes="(max-width: 700px) 100vw, 700px" />
            </Link>
          </div>
          <div id="menu-desk">
            <ul>
              <li>
                <Link href={"/loan/steps/01-din-nye-bolig/01-din-nye-bolig"} onClick={closeMenu}>
                  <p>Ansøg om lån</p>
                </Link>
              </li>
              <li>
                <Link href={"/courses/courses"} onClick={closeMenu}>
                  <p>Kurser</p>
                </Link>
              </li>
              <li>
                <Link href={"/faq"} onClick={closeMenu}>
                  <p>FAQ</p>
                </Link>
              </li>
              <li>
                <Link href={"/about"} onClick={closeMenu}>
                  <p>Om os</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="icons-nav-container">
            <Link href={""} className="phone">
              <div className="flex-row-space-around">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
                <p className="smaller">12 34 56 78</p>
              </div>
            </Link>

            {/* <Link href={""} className="basket-icon" onClick={openBasket}>
              <div className="flex-column">
                <div className="how-many">
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
                <p className="smaller">Kurv</p>
              </div>
            </Link> */}

            <Link href={""} className="open" onClick={openMenu}>
              <div className="flex-row-space-around">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                <p className="smaller bold">Menu</p>
              </div>
            </Link>

            {/* <Link href={""} className="person">
              <div className="flex-column">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
                <p className="smaller">Log ind</p>
              </div>
            </Link> */}
          </div>
        </div>
        <div id="menu">
          <ul>
            <li>
              <Link className="" href={"/loan/steps/01-din-nye-bolig/01-din-nye-bolig"} onClick={closeMenu}>
                <p>Ansøg om lån</p>
              </Link>
            </li>
            <li>
              <Link className="" href={"/courses/courses"} onClick={closeMenu}>
                <p>Kurser</p>
              </Link>
            </li>
            <li>
              <Link className="" href={"/faq"} onClick={closeMenu}>
                <p>FAQ</p>
              </Link>
            </li>
            <li>
              <Link className="" href={"/about"} onClick={closeMenu}>
                <p>Om os</p>
              </Link>
            </li>
            <li>
              <Link href={""} className="basket-icon" onClick={openBasket}>
                <p>Kurv</p>
              </Link>
            </li>
            <li>
              <Link href={""} className="person">
                <p className="smaller">Log ind</p>
              </Link>
            </li>
          </ul>
        </div>

        <Basket></Basket>
      </nav>
    </>
  );
}

function closeAll() {
  closeBasket();
  closeMenu();
}

function openMenu() {
  const menu = document.querySelector("#menu");
  const basket = document.querySelector("#basket");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
  if (basket.style.display === "flex") {
    closeBasket();
  }
}

function openBasket() {
  const basket = document.querySelector("#basket");
  const menu = document.querySelector("#menu");
  if (basket.style.display === "flex") {
    basket.style.display = "none";
  } else {
    basket.style.display = "flex";
  }
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  }
}

function closeMenu() {
  const menu = document.querySelector("#menu");
  const basket = document.querySelector("#basket");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  }
}

function closeBasket() {
  const basket = document.querySelector("#basket");
  if (basket.style.display === "flex") {
    basket.style.display = "none";
  }
}
