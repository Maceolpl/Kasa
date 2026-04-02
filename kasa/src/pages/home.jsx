import Banner from "../components/Banner/banner.jsx";
import Card from "../components/Card/card.jsx";
import logements from "../data/logements.json";

function Home() {
  return (
    <main className="home">
      <Banner text="Chez vous, partout et ailleurs" />

      <section className="cards">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;