function scanAndFilter (arr, str) {
 let res = arr.filter(val => val !== str )
 console.log(res)
 return res
}
let dat = ['apples', 'ray guns', 'oranges', 'tacos', 'ray guns']
scanAndFilter(dat, 'ray guns')
