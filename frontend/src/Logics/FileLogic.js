//!Cắt chuỗi [123,456,789]
export const LogicSpliceString = (myString) => {
  var results = [];
  for (var i = 0; i < myString.length; i += 3) {
    results.push(myString.slice(i, i + 3));
  }
  return results;
};

//!Add Vào mảng
export const LogicAddTowArray = (arr1, arr2) => {
  var d;
  d = arr1.map((item, value) => {
    return {
      id: item,
      value: arr2[value],
    };
  });
  return d;
};
