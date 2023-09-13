import React from "react";

type PropertyLocationProps = {
  location?: string;
};

const PropertyLocation: React.FC<PropertyLocationProps> = ({ location }) => {
  return location ? <p>Kde sa nachádzame: {location}</p> : null;
};

export default PropertyLocation;
