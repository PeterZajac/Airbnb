import React from "react";

type PropertyRoomsProps = {
  rooms?: number;
};

const PropertyRooms: React.FC<PropertyRoomsProps> = ({ rooms }) => {
  return rooms ? <p>Počet izieb: {rooms}</p> : null;
};

export default PropertyRooms;
