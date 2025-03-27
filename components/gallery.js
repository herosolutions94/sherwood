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
import { cmsFileUrl } from "@/helpers/helpers";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
  arrows: false,
  dots: true,


      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
};

const Gallery = ({ gallery }) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      lightGallery(galleryRef.current, {
        plugins: [lgThumbnail, lgZoom],
        speed: 500,
        selector: ".gallery-item",
      });
    }
  }, []);

  if (!gallery || gallery.length === 0) {
    return <p className="text-center text-gray-500">No images available.</p>;
  }

  return (
    <div ref={galleryRef}>
      <Slider {...settings}>
        {gallery.map((image, index) => (
          <a
            href={cmsFileUrl(image.image, 'gallery')} // Dynamic image URL
            key={index}
            data-src={cmsFileUrl(image.image, 'gallery')}
            className="gallery-item"
          >
            <img
              src={cmsFileUrl(image.image, 'gallery')}
              alt={image.title || `Gallery image ${index + 1}`}
              className="w-full h-60 object-cover rounded-lg shadow-md"
            />
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
