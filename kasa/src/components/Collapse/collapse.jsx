import { useState } from "react";
import "./collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button
        className="collapse__header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className={`collapse__arrow ${isOpen ? "open" : ""}`}>
          ▼
        </span>
      </button>

      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        <div className="collapse__inner">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;