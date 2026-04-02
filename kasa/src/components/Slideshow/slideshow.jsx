import { useState } from "react";
import "./slideshow.scss";

function Slideshow({ pictures }) {
  const [index, setIndex] = useState(0);
  const hasMultiple = pictures.length > 1;

  const prev = () =>
    setIndex((i) => (i === 0 ? pictures.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === pictures.length - 1 ? 0 : i + 1));

  return (
    <div className="slideshow">
      <img
        src={pictures[index]}
        alt={`Photo ${index + 1}`}
        className="slideshow__image"
      />
      {hasMultiple && (
        <>
          <button className="slideshow__btn slideshow__btn--prev" onClick={prev}>
            ❮
          </button>
          <button className="slideshow__btn slideshow__btn--next" onClick={next}>
            ❯
          </button>
          <span className="slideshow__counter">
            {index + 1} / {pictures.length}
          </span>
        </>
      )}
    </div>
  );
}

export default Slideshow;