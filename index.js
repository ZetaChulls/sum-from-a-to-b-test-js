
function sum(fromN, toN) {
  if(fromN === toN){
    return toN;
  } else {
    return toN + sum(fromN, toN - 1)
  }
}

module.exports = sum;
