import React from "react";
import { DataItem } from "../app/store/dataSlice";
import {
  PropertyAmenities,
  PropertyDescription,
  PropertyGuests,
  PropertyHost,
  PropertyLocation,
  // PropertyImage,
  PropertyPrice,
  PropertyRating,
  PropertyRooms,
  PropertyTitle,
} from "../propertyDetails";

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
}) => {
  return (
    <div>
      <PropertyTitle title={title} />
      <PropertyDescription description={description} />
      <PropertyLocation location={location} />
      <PropertyPrice price={price} />
      <PropertyGuests guests={guests} />
      <PropertyRooms rooms={rooms} />
      <PropertyRating rating={rating} />
      <PropertyAmenities amenities={amenities} />
      <PropertyHost host={host} />
    </div>
  );
};

export default SingleProperty;
