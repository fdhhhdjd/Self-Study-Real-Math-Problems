//!Cắt chuỗi [123,456,789]
export const LogicSpliceString = (myString) => {
  var results = [];
  var results1 = ["day1", "day2", "day3"];
  for (var i = 0; i < myString.length; i += 3) {
    results.push(myString.slice(i, i + 3));
    console.log(results);
  }
  var ketqua = results1.map((item, value) => {
    return {
      id: value,
      [item]: results[value],
    };
  });
  return ketqua;
};

//!Add Vào mảng
export const LogicAddTowArray = (arr1, arr2) => {
  var d;
  d = arr1.map((item, value) => {
    return {
      id: item,
      value: arr2[value],
      // ["id" + " " + item]: b[key],
    };
  });
  return d;
};
//Sort increase
export const HandleIncreaseSort = () => {
  const array = [0, 25, 9, 6, 8, 5, 7, 1, 16];
  var tempt;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[i]) {
        tempt = array[j];
        array[j] = array[i];
        array[i] = tempt;
      }
    }
  }
  // console.log(array);
};
//Sort increase
export const HandleDecreaseSort = () => {
  const array = [0, 25, 9, 6, 8, 5, 7, 1, 16];
  var tempt;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        tempt = array[j];
        array[j] = array[i];
        array[i] = tempt;
      }
    }
  }
  // console.log(array);
};
