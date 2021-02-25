export const ACTIONS = {
  SET_LISTING_DATA: "SET_LISTING_DATA",
  TOGGLE_LIKED_LISTING: "TOGGLE_LIKED_LISTING",
};

export const setPropertyData = (properties) => ({
  type: ACTIONS.SET_LISTING_DATA,
  payload: properties,
});

export const toggleLikedListing = (listingId) => ({
  type: ACTIONS.TOGGLE_LIKED_LISTING,
  payload: listingId,
});
