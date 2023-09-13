import React from "react";

type PropertyPriceProps = {
  price?: number;
};

const PropertyPrice: React.FC<PropertyPriceProps> = ({ price }) => {
  return price ? <p>Cena za naše ubytovanie: {price} € </p> : null;
};

export default PropertyPrice;
