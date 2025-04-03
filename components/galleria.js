import React, { useEffect, useRef } from "react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { cmsFileUrl } from "@/helpers/helpers";
const images = [
  "/images/g1.png",
  "/images/g2.png",
  "/images/g3.png",
  "/images/g4.jpg",
  "/images/g5.jpg",
];

const Galleria = ({content}) => {
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

  return (
    
    
    <div ref={galleryRef} className="gallery-grid flex flex-wrap galleria">
       {Array.from({ length: 9 }, (_, i) => {
        

        return (
          <a href={cmsFileUrl(content?.[`image${i + 4}`])}  key={i} data-src={cmsFileUrl(content?.[`image${i + 4}`])}  className="col gallery-item">
          <div className="inner">
            <div className="image">
              <img src={cmsFileUrl(content?.[`image${i + 4}`])}  alt={`Gallery Image ${i + 1}`} />
            </div>
          </div>
        </a>
        );
      })}
   
    </div>
  );
};

export default Galleria;
