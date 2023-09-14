import React from "react";
import ImageGallery from "react-image-gallery";

type PropertyImageProps = {
  imagesFromApi?: string[];
};

const PropertyImage: React.FC<PropertyImageProps> = ({ imagesFromApi }) => {
  const images = (imagesFromApi || []).map((image) => ({
    original: "https://placehold.co/600x400",
    thumbnail: "https://placehold.co/600x400 ",
  }));
  return (
    <ImageGallery
      items={images}
      showBullets
      showPlayButton={false}
      showFullscreenButton={false}
    />
  );
};

export default PropertyImage;
