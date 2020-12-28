const validateInputArray = (arr) => {
  const hasInvalidNumber = arr.some(
    (ele) => isNaN(ele) || ele === false || ele === null
  );
  if (arr.length === 0 || hasInvalidNumber) {
    throw new Error("Invalid input");
  }
};

const arrayCubeRootToJson = (arr) => {
  validateInputArray(arr);
  const cubeRoots = arr.map((value) => [value, Math.cbrt(value)]);
  return Object.fromEntries(cubeRoots);
};

module.exports = arrayCubeRootToJson;
