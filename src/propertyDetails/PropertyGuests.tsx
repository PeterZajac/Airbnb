import React from "react";

type PropertyGuestsProps = {
  guests?: number;
};

const PropertyGuests: React.FC<PropertyGuestsProps> = ({ guests }) => {
  return guests ? <h3> Počet hostí: {guests}</h3> : null;
};

export default PropertyGuests;
