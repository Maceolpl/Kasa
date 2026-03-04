import "./banner.scss";
import bannerImage from "./imgbanner.jpg";

function Banner({ image, text }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      {text && <h1 className="banner__title">{text}</h1>}
    </div>
  );
}

export default Banner;