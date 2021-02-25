import React, { createContext, useReducer } from "react";

import { ACTIONS } from "./actions";

const lsPropertyData = localStorage.getItem("propertyData");
const lsLikedData = localStorage.getItem("likedData");
const defaultPropertyData = lsPropertyData ? JSON.parse(lsPropertyData) : [];
const defaultLikedData = lsLikedData ? JSON.parse(lsLikedData) : [];

const initialState = {
  listings: defaultPropertyData,
  likedListings: defaultLikedData,
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const { type, payload } = action;

    switch (type) {
      case ACTIONS.SET_LISTING_DATA:
        localStorage.setItem("propertyData", JSON.stringify(payload));
        return {
          ...state,
          listings: payload,
        };
      case ACTIONS.TOGGLE_LIKED_LISTING: {
        const { likedListings } = state;
        const index = likedListings.indexOf(payload);
        const newLikedListings =
          index === -1
            ? [...likedListings, payload]
            : likedListings.filter((id) => id !== payload);

        localStorage.setItem("likedData", JSON.stringify(newLikedListings));

        return {
          ...state,
          likedListings: newLikedListings,
        };
      }
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
