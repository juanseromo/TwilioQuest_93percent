function addFirstToLast (args){
  let result = []
  const first = args[0]
  const val = args.length - 1
  const last = args[val]
  result.push(first, last)
  return result.join('')
//  console.log(result)
  
} addFirstToLast(['first', 'second', 'third'])
