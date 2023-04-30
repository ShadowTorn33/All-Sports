import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import Loading from "./Loading";

function HomepageCarousel() {
  const url = "https://sports.api.decathlon.com/sports/?parents_only=true";

  const [images, setImages] = useState(null);

  const fetchImages = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setImages(res.data);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return images ? (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[0].relationships.images.data[0].url}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>All Sports</h3>
          <p>
            Welcome to All Sports!! Where you can learn more about all the
            different sports and activities around the world.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[15].relationships.images.data[0].url}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>All Sports</h3>
          <p>
            Welcome to All Sports!! Where you can learn more about all the
            different sports and activities around the world.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[8].relationships.images.data[0].url}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>All Sports</h3>
          <p>
            Welcome to All Sports!! Where you can learn more about all the
            different sports and activities around the world.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  ) : (
    <Loading />
  );
}

export default HomepageCarousel;