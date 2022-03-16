import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner: React.FC = () => {
  return (
    <div className="relative ">
      <div
        className="absolute bottom-0 z-20 h-32 w-full bg-gradient-to-t 
      from-gray-200 to-transparent"
      />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
