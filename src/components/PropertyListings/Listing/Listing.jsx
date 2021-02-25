import React, { useMemo } from "react";
import NumberFormat from "react-number-format";
import Address from "./Address/Address";
import heart from "Images/heart.svg";
import heartFull from "Images/heart-full.svg";
import "./Listing.scss";
import { useAppState } from "Src/hooks";
import { toggleLikedListing } from "Src/actions";
import { getListing, getListingIsLiked } from "Src/selectors";

const findBathroom = (full, half) => full + half / 2;

const Listing = ({ id }) => {
  const { dispatch, state } = useAppState();
  const listing = getListing(state, id);
  const isLiked = getListingIsLiked(state, id);

  // TODO: Replace this with react-tracked or react-redux for performance reasons
  return useMemo(() => {
    const {
      photos,
      property,
      listPrice,
      address,
      listDate: listDateRaw,
    } = listing;

    const { bedrooms, bathsFull, bathsHalf, area } = property;
    const listDate = new Date(listDateRaw);
    const month = listDate.getMonth();
    const day = listDate.getDate();
    const year = listDate.getFullYear().toString().substr(2, 2);

    return (
      <div className="Listing">
        <div className="photo" style={{ "--aspect-ratio": "9/8" }}>
          <div
            className="photo-inner"
            style={{ backgroundImage: `url(${photos[0]}` }}
          >
            <div
              className="like-icon"
              onClick={() => dispatch(toggleLikedListing(id))}
            >
              <img
                src={isLiked ? heartFull : heart}
                alt={`${isLiked ? "Un-Save" : "Save"} This`}
              />
            </div>
          </div>
        </div>
        <div className="summary">
          {bedrooms} BR | {findBathroom(bathsFull, bathsHalf)} Bath | {area} Sq
          Ft
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
          Listed: {month}/{day}/{year}
        </div>
      </div>
    );
  }, [listing, isLiked]);
};

export default Listing;
