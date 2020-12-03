function calculateMass(arr) {
 let res = arr.reduce((sum, item) => {
    return sum + item.length
 },0)
 return res
}
const cargo = ['cat', 'dog', 'bird']
calculateMass(cargo)
