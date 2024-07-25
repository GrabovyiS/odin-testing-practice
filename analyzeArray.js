function analyzeArray(array) {
  let sum = 0;
  let min = Infinity;
  let max = Number.NEGATIVE_INFINITY;
  let length = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    length++;

    if (array[i] < min) {
      min = array[i];
    }

    if (array[i] > max) {
      max = array[i];
    }
  }

  if (length === 0) {
    return { average: null, min: null, max: null, length: 0 };
  }

  const average = sum / length;

  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = analyzeArray;
