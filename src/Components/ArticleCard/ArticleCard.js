import { Link } from "react-router-dom";

function ArticleCard() {
  return (
    <Link className="ArticleCard" to="/article">
      <aside className="ArticleCard__aside">
        <p className="ArticleCard__category">Frameworks</p>
        <div className="ArticleCard__img"></div>
      </aside>
      <main className="ArticleCard__main">
        <h3>Apprendre les bases du HTML et le JavaScript tranquillou</h3>
        <div className="ArticleCard__author">
          <div className="ArticleCard__pp"></div>
          <p className="ArticleCard__authorName">Berlingo</p>
        </div>
      </main>
    </Link>
  );
}

export default ArticleCard;
