import { useContext, useState } from "react";
import Context from "./Context";
import Image from "next/image";
import Link from "next/link";

export default function ChatSupport() {
  const context = useContext(Context);

  function userChat(e) {
    context.setChatInput(e.target.value);
  }

  return (
    <>
      <div id="chat">
        <div className="chat-container">
          <div className="flex-row-space-around">
            <div className="flex-column-left">
              <h4 className="small bold">Hej! Hvordan kan jeg hjælpe dig?</h4>
            </div>
            <div className="">
              {/* <h4 className="bold">close</h4> */}
              <button className="chat" onClick={closeChat}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="chat-supports-message">{context.chatInput}</div>

          <form>
            {/* Din udbetaling  */}
            <div className="flex-column-left field">
              <label htmlFor="message"></label>
              <div className="input-group">
                <button className="message">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cursor-fill" viewBox="0 0 16 16">
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                  </svg>
                </button>
                <input type="text" name="search" id="search" placeholder="Skriv here !" minLength="2" required onChange={userChat} />
                <span className="error-message">Enter a valid value</span>
              </div>
            </div>
          </form>

          {/* <Image src={"/herokurser"} width={1920} height={1080} alt="photo of the festival" /> */}
        </div>
        <div className="chat-icon-container">
          <button className="chat-icon" onClick={openChat}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

function openChat() {
  const chat = document.querySelector(".chat-container");
  if (chat.style.display === "none") {
    chat.style.display = "flex";
  } else {
    chat.style.display = "none";
  }
}

function closeChat() {
  const chat = document.querySelector(".chat-container");
  if (chat.style.display === "flex") {
    chat.style.display = "none";
  } else {
    chat.style.display = "flex";
  }
}
