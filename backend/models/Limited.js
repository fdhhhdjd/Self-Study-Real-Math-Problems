"use strict";
const REDIS = require("../configs/redis.js");
//!UserSpam
const incr = (key) => {
  return new Promise((resolve, reject) => {
    REDIS.incr(key, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
const expire = (key, ttl) => {
  return new Promise((resolve, reject) => {
    REDIS.expire(key, ttl, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
const ttl = (key) => {
  return new Promise((resolve, reject) => {
    REDIS.ttl(key, (err, ttl) => {
      if (err) return reject(err);
      resolve(ttl);
    });
  });
};
//! Many User buy Goods
const get = async (key) => {
  return new Promise((resolve, reject) => {
    REDIS.get(key, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
//Có thể set lại nhiều lần
const set = async (key, count) => {
  return new Promise((resolve, reject) => {
    REDIS.set(key, count, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
const incrby = async (key, count) => {
  return new Promise((resolve, reject) => {
    REDIS.incrby(key, count, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
const decrby = async (key, count) => {
  return new Promise((resolve, reject) => {
    REDIS.decrby(key, count, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
const exists = async (key) => {
  return new Promise((resolve, reject) => {
    REDIS.exists(key, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
//Set nguyên tử chỉ dùng 1 lần suy nhất
const setnx = async (key, count) => {
  return new Promise((resolve, reject) => {
    REDIS.setnx(key, count, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

//?Delete Event order
const addDelayEventOrder = ({ orderId, delay }) => {
  return new Promise((resolve, reject) => {
    REDIS.set(orderId, "Cancel order", "EX", delay, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
module.exports = {
  //userSpam
  incr,
  expire,
  ttl,
  //user buy goods
  get,
  set,
  incrby,
  decrby,
  exists,
  setnx,
  //Delete order khoong chiu dat hang
  addDelayEventOrder,
};
