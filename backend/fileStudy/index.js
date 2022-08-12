// !promises

function promisedDivision(x, y) {
  if (y === 0) {
    return Promise.reject(new Error("cannot divide by 0"));
  } else {
    return Promise.resolve(x / y);
  }
}
async function divideWithAwait() {
  try {
    return await promisedDivision(6, 0);
  } catch (error) {
    console.log(`Error:: divideWithAwait`, error.message);
  }
}
async function run() {
  const rs = await divideWithAwait();
  console.log(`divideWithAwait:: ${rs}`);
}
run();
