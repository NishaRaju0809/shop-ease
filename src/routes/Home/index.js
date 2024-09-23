import CardsList from "../../components/CardsList";
import Carousel from '../../components/Crousel'
import Categories from "./Categories";

function Home() {
  return (
    <div className="App">
      <div className="container">
        <Carousel/>
        <div>
          <CardsList />
        </div>
        <div>
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default Home;
