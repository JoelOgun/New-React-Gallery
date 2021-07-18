import React from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";

const Gallery = (props) => {
  const results = props.data;
  let photos;
  if (results.length > 0) {
    photos = results.map((photo) => {
      const urlSource = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;
      return <Photo url={urlSource} key={photo.id} desc={photo.title} />;
    });
  } else {
    photos = <NotFound />;
  }
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>{photos}</ul>
    </div>
  );
};

export default Gallery;
