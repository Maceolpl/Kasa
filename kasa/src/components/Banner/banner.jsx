import "./banner.scss";
import bannerImage from "../../assets/images/imgbanner.jpg";

function Banner({ image, text }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image || bannerImage})` }}>
      {text && <h1 className="banner__title">{text}</h1>}
    </div>
  );
}

export default Banner;