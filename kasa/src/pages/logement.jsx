import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse/collapse";

function Logement() {
  const { id } = useParams();

  return (
    <main>
      <h1>Logement ID : {id}</h1>

      <Collapse title="Description">
        Description du logement à venir
      </Collapse>

      <Collapse title="Équipements">
        Liste des équipements à venir
      </Collapse>
    </main>
  );
}

export default Logement;