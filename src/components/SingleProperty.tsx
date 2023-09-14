import React from "react";
import { DataItem } from "../app/store/dataSlice";
import {
  PropertyAmenities,
  PropertyDescription,
  PropertyGuests,
  PropertyHost,
  PropertyLocation,
  PropertyImage,
  PropertyPrice,
  PropertyRating,
  PropertyRooms,
  PropertyTitle,
} from "../propertyDetails";
import "react-image-gallery/styles/css/image-gallery.css";

const SingleProperty: React.FC<DataItem> = ({
  title,
  description,
  location,
  price,
  guests,
  rooms,
  rating,
  amenities,
  host,
  images,
}) => {
  const imagesFromApi = images.map((image) => image);

  return (
    <div>
      <PropertyTitle title={title} />
      <PropertyDescription description={description} />
      <PropertyLocation location={location} />
      <PropertyPrice price={price} />
      <PropertyImage imagesFromApi={imagesFromApi} />
      <PropertyGuests guests={guests} />
      <PropertyRooms rooms={rooms} />
      <PropertyRating rating={rating} />
      <PropertyAmenities amenities={amenities} />
      <PropertyHost host={host} />
    </div>
  );
};

export default SingleProperty;
