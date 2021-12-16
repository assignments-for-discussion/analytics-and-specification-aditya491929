
function average(numbers) {
  const filteredNans = numbers.filter((num) => isNaN(num)).length;
  const filteredNumbers = numbers.filter((num) => !isNaN(num));
  if (filteredNans > filteredNumbers.length) {
    return NaN;
  }
  return filteredNumbers.reduce((p, c)=> p + c, 0) / filteredNumbers.length;
}

module.exports = {average};
