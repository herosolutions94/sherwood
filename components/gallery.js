import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const images = [
  "/images/g1.png",
  "/images/g2.png",
  "/images/g3.png",
  "/images/g4.jpg",
  "/images/g5.jpg",
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
};

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      lightGallery(galleryRef.current, {
        plugins: [lgThumbnail, lgZoom],
        speed: 500,
        selector: ".gallery-item", // Ye ensure karega ke sirf correct images open ho
      });
    }
  }, []);

  return (
    <div ref={galleryRef}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <a href={src} key={index} data-src={src} className="gallery-item">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-60 object-cover rounded-lg shadow-md"
            />
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
