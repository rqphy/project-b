import ArticleCard from "../../Components/ArticleCard/ArticleCard";

function Home() {
  return (
    <div>
      <img
        class="Home__image"
        src="../../assets/navbar/home.png"
        alt="Home"
      ></img>
      <h1>Home</h1>
      <ArticleCard />
    </div>
  );
}

export default Home;
