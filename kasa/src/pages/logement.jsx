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
      <Slideshow pictures={pictures} />

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
            <span className="logement__host-name">{host.name}</span>
            <img src={host.picture} alt={host.name} className="logement__host-img" />
          </div>
          <div className="logement__rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={`logement__star ${star <= Number(rating) ? "active" : ""}`}>
                ★
              </span>
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