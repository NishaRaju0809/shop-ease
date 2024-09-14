import CardsList from "../../components/CardsList";
import Carousel from '../../components/Crousel'

function Home() {
  return (
    <div className="App">
      <div className="container">
        <Carousel/>
        <div>
          <CardsList />
        </div>
      </div>
    </div>
  );
}

export default Home;
