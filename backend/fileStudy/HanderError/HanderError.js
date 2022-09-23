function request(type) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      type === "a" ? resolve("success") : reject("error");
    });
  });
}
//!Lever1
// async function getData() {
//   try {
//     let ret1 = await request("a");
//   } catch (error) {
//     console.error(`Error ret1::`, error);
//   }

//   try {
//     let ret2 = await request("b");
//   } catch (error) {
//     console.error(`Error ret1::`, error);
//   }
// }
// getData();

//!Lever2
// async function getData() {
//   let ret1 = await request("a")
//     .then((response) => console.log(response))
//     .catch((error) => console.error(`Error ret1::`, error));
//   let ret2 = await request("b")
//     .then((response) => console.log(response))
//     .catch((error) => console.error(`Error ret2::`, error));
// }
// getData();

//!lever3

async function getData() {
  let err, result;
  [err, result] = await await handleRequest(request("a"));
  if (err) {
    console.error(`Error ret1::`, err);
  }
  [err, result] = await await handleRequest(request("b"));
  if (err) {
    // console.error(`Error ret2::`, err);
  }
}

const handleRequest = (promise) => {
  return promise
    .then((data) => [undefined, data])
    .catch((error) => [error, undefined]);
};
getData();
