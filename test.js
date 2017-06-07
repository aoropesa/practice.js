// REDUCE: log the sum of numbers
const numbers =[5,5,5,5,5]

const a = (total,x)=>total+x;
console.log(numbers.reduce(a, 0));

//MAP: uppercase each string and log the new array
const brands = ['toyota', 'ford', 'lamborgini']

const doubles = brands.map(function(val){
  return val.toUpperCase()
})
console.log(doubles);

// FILTER: log only the blue cars
const cars = [
    {model: 'prius', color: 'brown'},
    {model: 'mustang', color: 'blue'},
    {model: 'firetruck', color: 'red'},
    {model: 'enzo', color: 'red'},
    {model: 'f-150', color: 'blue'}
]

const bluecolor = cars.filter(function (val){
  return val.color === 'blue'
})
console.log(bluecolor);






// Write a function which receives an array and returns
// a new array with only the even elements present
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(number.filter(num => num%2 === 0));

// Write a function which receives a string and returns
// a new string with only the vowels.Uses split and join
const str = 'techlaunch'
function dif(value){
  return value === "a" || value === "e" || value === "i" || value === "o" || value === "u"
}
console.log(str.split('').filter(dif).join(''));
//otra forma
const str = 'techlaunch'
const vowels = str
    .split('')
    .filter(letter => {
        switch(letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                return true
            default:
                return false
        }
    })
    .join('')
console.log(vowels);

// Write a function which uses reduce to find the maximum
// value in a list.
const ages = [13, 78, 43, 92, 3, 14, 25, 38, 62]
const maximun = ages.reduce(function(max, acc){
  if(max > acc){
    return max
  } return acc
})
console.log(maximun);
//otra forma
console.log(ages.reduce((max, age) => (age > max) ? age : max))
