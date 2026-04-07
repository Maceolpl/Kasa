import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow/slideshow";
import Collapse from "../components/Collapse/collapse";
import "../styles/logement.scss";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((l) => l.id === id);

  // Redirection si ID inconnu
  if (!logement) return <Navigate to="/error" replace />;

  const { title, pictures, description, host, rating, location, equipments, tags } = logement;

  return (
    <main className="logement">
      <Slideshow key={id} pictures={pictures} />

      <div className="logement__header">
        <div className="logement__info">
          <h1 className="logement__title">{title}</h1>
          <p className="logement__location">{location}</p>
          <ul className="logement__tags">
            {tags.map((tag) => (
              <li key={tag} className="logement__tag">{tag}</li>
            ))}
          </ul>
        </div>

        <div className="logement__host-rating">
          <div className="logement__host">
            <span className="logement__host-name">
              {host.name.split(" ")[0]}<br />{host.name.split(" ")[1]}
            </span>
            <img src={host.picture} alt={host.name} className="logement__host-img" />
          </div>
          <div className="logement__rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"
                  fill={star <= Number(rating) ? "#ff6060" : "#e3e3e3"}
                  stroke={star <= Number(rating) ? "#ff6060" : "#e3e3e3"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>
        </div>
      </div>

      <div className="logement__collapses">
        <Collapse title="Description">{description}</Collapse>
        <Collapse title="Équipements">
          <ul className="logement__equipments">
            {equipments.map((eq) => (
              <li key={eq}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </main>
  );
}

export default Logement;