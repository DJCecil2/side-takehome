import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import Listing from "./Listing/Listing";

/*
 * Note: Using local storage for quick loading is a bad idea.
 * Any change to the json schema will make users who have the outdated schema crash upon site load.
 * To solve, upgrade paths must be used which is not maintainable in the long run.
 */
const localStorageData = localStorage.getItem("propertyData");
const defaultData = localStorageData ? JSON.parse(localStorageData) : [];

const fetchPropertyListings = async () =>
  axios.get("https://api.simplyrets.com/properties", {
    auth: { username: "simplyrets", password: "simplyrets" },
  });

const PropertyListings = () => {
  const [listings, setListings] = useState(defaultData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchPropertyListings();
        setListings(data);
        localStorage.setItem("propertyData", JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={6}>
      {listings.map((listing) => (
        <Grid key={listing.listingId} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Listing {...listing} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertyListings;
