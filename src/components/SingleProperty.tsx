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
import styled from "styled-components";

export const SinglePropertyContainer = styled.div<{ isDetailPage?: boolean }>`
  border: ${({ isDetailPage }) => (isDetailPage ? "none" : "1px solid #ddd")};
  padding: 2%;
  margin: 1% 1%;
  height: 1150px;
  width: ${({ isDetailPage }) => (isDetailPage ? "60%" : "30%")};
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
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
  id,
}) => {
  return (
    // <Container>
    <SinglePropertyContainer>
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
    // </Container>
  );
};

export default SingleProperty;
