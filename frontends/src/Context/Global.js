import React, { createContext, useContext, useEffect, useState } from "react";
export const Store = createContext();
export const useMyContext = () => useContext(Store);
const BACKEND_URL = "http://localhost:5000";
export const GlobalState = createContext();
export const DataProvider = ({ children }) => {
  const data = { BACKEND_URL };
  Store.displayName = "Tài Heo Dev";
  return <Store.Provider value={data}>{children}</Store.Provider>;
};
