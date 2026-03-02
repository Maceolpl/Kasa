import Banner from "../components/Banner/banner";
import Card from "../components/Card/card";
import logements from "../data/logements.json";

function Home() {
  return (
    <main>
      <Banner
        image="/images/banner-home.jpg"
        text="Chez vous, partout et ailleurs"
      />

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