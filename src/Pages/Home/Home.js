import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import Profile from "../../Components/Profile/Profile";

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
      <secion className="about section">
        <h2 className="section__title  about__title">À propos</h2>
        <article className="section__container  about__container">
          <div className="section__list">
            <Profile />
            <Profile />
            <Profile />
            <Profile />
          </div>
          <p className="about__text">
            Nous sommes un groupe de développeur web étudiant à Hetic. Vous
            pouvez trouver plus d’info sur nous ci-dessus.
          </p>
          <p className="about__text">
            Ce blog existe pour que vous puissiez retrouver plein d’infos sur le
            developpement web! Si vous avez des questions ou des conseils
            contactez nous.
          </p>
        </article>
      </secion>
      <secion className="section sources ">
        <h2 className="section__title sources__title">Selection de sources</h2>
        <article className=" section__container sources__container">
          <div className=" section__list">
            <Profile title="Bigboss" />
            <Profile title="Bigboss" />
            <Profile title="Bigboss" />
            <Profile title="Bigboss" />
          </div>
        </article>
      </secion>
    </main>
  );
}

export default Home;
