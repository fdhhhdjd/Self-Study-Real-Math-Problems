import React, { useEffect } from "react";
import axios from "axios";
const IntanceToken = () => {
  const instance = axios.create({
    baseUrl: "http://localhost:5000/api",
    timeout: 3 * 1000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const handleLogin = async () => {};
  useEffect(() => {
    //Handle data before request server
    instance.interceptors.request.use(
      (config) => {
        console.log("Before request Axios");
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
    //Handle data after response server
    instance.interceptors.response.use(
      (response) => {
        console.log("After request Axios");
        return response;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }, [handleLogin]);
  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button>Get List</button>
    </>
  );
};

export default IntanceToken;
