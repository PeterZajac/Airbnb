import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { DataItem } from "../app/store/dataSlice";
import { RootState } from "../app/store/store";
import Header from "../components/Header";
import { SinglePropertyContainer } from "../components/SingleProperty";
import {
  PropertyAmenities,
  PropertyDescription,
  PropertyGuests,
  PropertyHost,
  PropertyImage,
  PropertyLocation,
  PropertyPrice,
  PropertyRating,
  PropertyRooms,
  PropertyTitle,
} from "../propertyDetails";

const Property = () => {
  const { id } = useParams();
  const { data } = useSelector((state: RootState) => state);

  const {
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
  } = data.find((i: DataItem) => i.id === parseInt(id ?? ""));

  return (
    <>
      <Header />
      <SinglePropertyContainer isDetailPage>
        <PropertyTitle title={title} route={`/property/${id}`} />
        <PropertyImage imagesFromApi={images} />
        <PropertyDescription description={description} />
        <PropertyLocation location={location} />
        <PropertyPrice price={price} />
        <PropertyGuests guests={guests} />
        <PropertyRooms rooms={rooms} />
        <PropertyRating rating={rating} />
        <PropertyAmenities amenities={amenities} />
        <PropertyHost host={host} />
      </SinglePropertyContainer>
    </>
  );
};

export default Property;
