import { useState } from "react";
import "./collapse.scss";

function Collapse({ title, children, bold }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button
        className={`collapse__header ${bold ? "collapse__header--bold" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className={`collapse__arrow ${isOpen ? "open" : ""}`}>
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 11L10 2L19 11" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        <div className="collapse__inner">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;