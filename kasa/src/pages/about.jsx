import Collapse from "../components/Collapse/collapse";
import "../styles/about.scss";
import bannerImage from "../assets/images/imgbanner2.jpg";

function About() {
  return (
    <main className="about">

      <div className="about__banner">
        <img src={bannerImage} alt="Paysage montagne" />
      </div>

      <div className="about__collapses">
        <Collapse title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale.
          Les photos sont conformes aux logements, et toutes les informations
          sont régulièrement vérifiées par nos équipes.
        </Collapse>

        <Collapse title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa.
          Tout comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Collapse>

        <Collapse title="Service">
          Nos équipes se tiennent à votre disposition pour vous offrir
          une expérience parfaite. N'hésitez pas à nous contacter si vous
          avez la moindre question.
        </Collapse>

        <Collapse title="Sécurité">
          La sécurité est la priorité de Kasa pour ses hôtes et voyageurs.
          Chaque logement correspond aux critères de sécurité établis
          par nos services.
        </Collapse>
      </div>

    </main>
  );
}

export default About;