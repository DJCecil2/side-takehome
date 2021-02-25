export const getListings = (state) => state.listings;

export const getListing = (state, listingId) =>
  getListings(state).find((listing) => listing.listingId === listingId);

export const getListingIsLiked = (state, listingId) =>
  state.likedListings.includes(listingId);

export const getSavedListings = (state) =>
  getListings(state).filter((listing) =>
    getListingIsLiked(state, listing.listingId)
  );
