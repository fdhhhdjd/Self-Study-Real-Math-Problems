function dayPrice(originalPrice) {
  return originalPrice * 0.5;
}
function dayPrice11(originalPrice) {
  return originalPrice * 0.9;
}

function defaultPrice(originalPrice) {
  return originalPrice;
}

const getPriceStrate = {
  blackSaturday: dayPrice,
  dayPrice11: dayPrice11,
  default: defaultPrice,
};

function getPrice(originalPrice, typePromotion) {
  return getPriceStrate[typePromotion](originalPrice);
}
// console.log("--->>>", getPrice(200, "default"));
