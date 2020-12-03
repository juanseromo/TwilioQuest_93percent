function scan (arr) {
 const str = 'contraband'
 let count = 0
 arr.forEach(val => {
    val === str ? count++ : console.log('Not Found')
 })
 return count
}
