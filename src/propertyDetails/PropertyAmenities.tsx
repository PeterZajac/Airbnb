import React from "react";

type Amenities = string[];

type AmenitiesProps = {
  amenities?: Amenities;
};

const PropertyAmenities: React.FC<AmenitiesProps> = ({ amenities }) => {
  return amenities ? (
    <>
      <p>Vybavenie Ubytovania</p>
      <ul>
        {amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
    </>
  ) : null;
};

export default PropertyAmenities;
