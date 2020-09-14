import React, { createContext, useContext, useReducer } from "react";

//Create a data layer
export const StateContext = createContext();

//create a provider to to "provide" the data to the application.

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
