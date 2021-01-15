function Article() {
  return (
    <div className="Article">
      <div className="Article__bg-img"></div>
      <section className="Article__content">
        <h1 className="Article__title">Introduction au HTML</h1>
        <p>
          HTML signifie "HyperText Markup Language". C’est un langage qui permet
          de composer des pages web. On parle de langage de balisage et non de
          langage de programmation, car le but du HTML est d’encadrer les
          différents éléments présents dans une page (images, titres,
          paragraphes ...) par des balises pour leur permettre d’être mis en
          forme secondairement (via une feuille de style) et pour leur donner du
          sens.
        </p>
        <h2 className="Article__subtitle">Le HTML c'est quoi ?</h2>
        <p>
          HTML (HyperText Markup Language) est un langage de description (dit de
          marquage) de pages Web. Il permet de présenter les documents
          hypertextes destinés à être affichés sur le navigateur. Il s'agit d'un
          langage coté client (tout comme CSS et Javascript). Il est supporté et
          développé par W3C.
        </p>
        <p>
          L'origine du HTML remonte au début du Web. En effet, il a été inventé
          vers les années 1989 afin qu'il puisse présenter les documents qui
          circulent sur la toile et établir des liens entre eux à travers les
          liens hypertextes (ou hyperliens).
        </p>
      </section>
    </div>
  );
}

export default Article;
