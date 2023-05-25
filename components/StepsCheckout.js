export default function StepsMobile() {
  return (
    <>
      <div className="flex-row-space-around" id="stepsCheckout">
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

        <button className="step">
          <div>Personlige oplysninger</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </div>
        </button>
        <button className="step" disabled>
          <div>Betaling</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </div>
        </button>
      </div>
    </>
  );
}
