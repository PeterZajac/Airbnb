import React from "react";

type PropertyRatingProps = {
  rating?: number;
};

const PropertyRating: React.FC<PropertyRatingProps> = ({ rating }) => {
  return rating ? <p>Hodnotenie: {rating}⭐️</p> : null;
};

export default PropertyRating;
