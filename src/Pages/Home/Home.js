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
      <secion className="about">
        <h2 className="about__title">À propos</h2>
        <article className="about__container">
          <div className="about__team">
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
      <secion className="about">
        <h2 className="about__title">À propos</h2>
        <article className="about__container">
          <div className="about__team">
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
      <secion className="about">
        <h2 className="about__title">À propos</h2>
        <article className="about__container">
          <div className="about__team">
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
      <secion className="about">
        <h2 className="about__title">À propos</h2>
        <article className="about__container">
          <div className="about__team">
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
    </main>
  );
}

export default Home;
