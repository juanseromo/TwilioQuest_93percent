function calculatePower (arr) {
  let num = arr.reduce((sum, val )=>{
    return val * 2 + sum
  },0)
  return num
}
