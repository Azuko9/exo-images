import React from "react";
import Photo from "./photo";

function Photos({ images }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {images.map((images) => (
        <Photo
          id={images.id}
          url={images.url}
          title={images.title}
          category={images.category}
          description={images.description}
          dateAdded={images.dateAdded}
        />
      ))}
    </div>
  );
}
export default Photos;
