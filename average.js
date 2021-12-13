
function average(numbers) {
  const nums = numbers.filter((num) => !isNaN(num));
  return nums.reduce((p, c)=> p + c, 0) / nums.length;
}

module.exports = {average};
