import React from "react";
import NumberFormat from "react-number-format";
import "./Listing.scss";
import Address from "./Address/Address";

const findBathroom = (full, half) => full + half / 2;

const Listing = (listing) => {
  // console.log(listing);
  const {
    photos,
    property,
    listPrice,
    address,
    listDate: listDateRaw,
  } = listing;
  const { bedrooms, bathsFull, bathsHalf, area } = property;
  const listDate = new Date(listDateRaw);

  return (
    <div className="Listing">
      <img src={photos[0]} alt="" />
      <div className="summary">
        {bedrooms} BR | {findBathroom(bathsFull, bathsHalf)} Bath | {area} Sq Ft
      </div>
      <div className="price">
        <NumberFormat
          value={listPrice}
          displayType="text"
          prefix="$"
          thousandSeparator
        />
      </div>
      <Address {...address} />
      <div className="listDate">
        Listed: {listDate.getMonth()}/{listDate.getDate()}/
        {listDate.getFullYear().toString().substr(2, 2)}
      </div>
    </div>
  );
};

export default Listing;
