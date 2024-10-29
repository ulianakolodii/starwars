import fetchPeople from "./api/fetchPeople";
import HeroesTable from "./components/HeroesTable";

const Home = async () => {
  const response = await fetchPeople(
    `https://sw-api.starnavi.io/people/?page=1`
  );
  return <HeroesTable heroes={response.results} next={response.next} />;
};

export default Home;
