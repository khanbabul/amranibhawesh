import React, { useState } from "react";
import MyUniversity from "../assets/ned.jpg";
import Friends from "../assets/friends.jpg"
import Developer from "../assets/developer.jpg"
import "./Gallery.css";

const images = [
  MyUniversity, // ✅ local image
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpri_LLuT8GVQM8gb6FfL14VdfEmFcq4roag&s",
  "https://i.dawn.com/primary/2021/03/60603a0f06c0b.jpg",
  "https://www.qschina.cn/themes/custom/tu_d8/images/default_profile_pic.jpg",
  "https://market-resized.envatousercontent.com/videohive.net/40ae8050-2eac-4b29-907f-6eac0bdf5c90/video_preview/video_preview_0000.jpg?auto=format&q=85&cf_fit=crop&gravity=top&h=8000&w=590&s=18a65f640feb77f27ea4b40552728f2375ba9190f45fabbe4fabec3e7896e19b",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPa8gar1Q-euCPME_v0agk2MF-qbdZTGhjFg&s",
  "https://ilm.com.pk/wp-content/uploads/2014/10/NED-University-Engineering-Entry-Test-Result-2014.jpg",
  Developer,
  Friends,
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const prevImage = () => {
    setSelectedIndex(
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
    );
  };

  const nextImage = () => {
    setSelectedIndex(
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
    );
  };

  return (
    <>
      <div className="gallery-heading">
        <h1>Gallery</h1>
      </div>
      <div className="gallery-container">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt="gallery" onClick={() => openImage(index)} />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="modal">
          <span className="close" onClick={closeImage}>
            &times;
          </span>

          <span className="arrow left" onClick={prevImage}>
            &#10094;
          </span>

          <img
            src={images[selectedIndex]}
            alt="full view"
            className="modal-img"
          />

          <span className="arrow right" onClick={nextImage}>
            &#10095;
          </span>
        </div>
      )}
    </>
  );
};

export default Gallery;
