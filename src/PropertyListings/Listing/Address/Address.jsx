import React from "react";
import "./Address.scss";

const Address = (address) => {
  const { streetNumber, streetName, city, state } = address;
  return (
    <div className="Address">
      {streetNumber} {streetName}, {city}, {state}
    </div>
  );
};

export default Address;
