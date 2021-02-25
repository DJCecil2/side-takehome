import React, { useEffect, useMemo } from "react";
import { bool } from "prop-types";
import axios from "axios";
import { Grid } from "@material-ui/core";

import Listing from "./Listing/Listing";
import { setPropertyData } from "../actions";
import { useAppState } from "../hooks";
import { getListings, getSavedListings } from "../selectors";

const fetchPropertyListings = async () =>
  axios.get("https://api.simplyrets.com/properties", {
    auth: { username: "simplyrets", password: "simplyrets" },
  });

const PropertyListings = ({ filterUnsaved }) => {
  const { dispatch, state } = useAppState();
  const listings = filterUnsaved ? getSavedListings(state) : getListings(state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchPropertyListings();
        dispatch(setPropertyData(data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return useMemo(
    () => (
      <Grid container spacing={6}>
        {listings.map(({ listingId }) => (
          <Grid key={listingId} item xs={12} sm={6} lg={4} xl={2}>
            <Listing id={listingId} />
          </Grid>
        ))}
      </Grid>
    ),
    [listings]
  );
};

PropertyListings.propTypes = {
  filterUnsaved: bool,
};

PropertyListings.defaultProps = {
  filterUnsaved: false,
};

export default PropertyListings;
