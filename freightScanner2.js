function scan (arr) {
  let str = 'contraband'
  let res = []
  arr.forEach((val, index) => {
   if( val === str){ res.push(index)} 
  })
  return res
}
scan(['contraband', 'apples', 'cats', 'contraband', 'contraband'])
