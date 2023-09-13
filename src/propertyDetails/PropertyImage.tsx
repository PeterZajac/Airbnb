import React from "react";
import ImageGallery from "react-image-gallery";

type PropertyImageProps = {
  imagesFromApi?: string[];
};

const PropertyImage: React.FC<PropertyImageProps> = ({ imagesFromApi }) => {
  const images = (imagesFromApi || []).map((image) => ({
    original: image,
    thumbnail: image,
  }));
  return <ImageGallery items={images} />;
};

export default PropertyImage;
