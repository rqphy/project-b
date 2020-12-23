import ArticleCard from "../../Components/ArticleCard/ArticleCard";

function Home() {
  return (
    <main className="page">
      <img
        class="Home__image"
        src="../../assets/navbar/home.png"
        alt="Home"
      ></img>
      <h1>Home</h1>
      <ArticleCard />
    </main>
  );
}

export default Home;
