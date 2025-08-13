import React, { useState } from "react";
import "./Gallery.css";
import images from "../../images"; // Still an object, but without logo

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Turn object into array
  const galleryImages = Object.values(images);

  return (
    <section id="gallery" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Our Gallery</h2>

        <div className="row g-3">
          {galleryImages.map((img, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div
                className="gallery-item"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`Gallery ${index}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
            <img src={selectedImage} alt="Full View" />
          </div>
        </div>
      )}
    </section>
  );
}
