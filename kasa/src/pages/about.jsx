import Collapse from "../components/Collapse/collapse";
import "../styles/about.scss";

function About() {
  return (
    <main>
      <Collapse title="Fiabilité">
        Les annonces postées sur Kasa garantissent une fiabilité totale.
      </Collapse>

      <Collapse title="Respect">
        La bienveillance fait partie des valeurs fondatrices de Kasa.
      </Collapse>

      <Collapse title="Service">
        Nos équipes se tiennent à votre disposition pour vous offrir
        une expérience parfaite.
      </Collapse>

      <Collapse title="Sécurité">
        La sécurité est la priorité de Kasa pour ses hôtes et voyageurs.
      </Collapse>
    </main>
  );
}

export default About;