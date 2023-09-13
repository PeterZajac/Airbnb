import React from "react";

type PropertyDescriptionProps = {
  description?: string;
};

const PropertyDescription: React.FC<PropertyDescriptionProps> = ({
  description,
}) => {
  return description ? <p>Opis: {description}</p> : null;
};

export default PropertyDescription;
