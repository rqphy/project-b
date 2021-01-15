import ArticleCard from "../ArticleCard/ArticleCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Articles() {
  const selectedArticles = [0, 1, 2, 3, 4, 5];
  return (
    <div className="Articles">
      <div className="sliderContainer">
        <Carousel>
          {selectedArticles.map((article) => (
            <div>
              <ArticleCard />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Articles;
