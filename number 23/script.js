// index is zero based
let arr = ['Ahmed' , 'Sayed' , 'Ali'];


console.log(arr.length);
console.log('**********************************************************************');
let rondmaNumber =  (Math.random())* arr.length; // if i want from 1 to length
// let rondmaNumber =  Math.floor((Math.random())* arr.length); // if i want from 0 to (length -1 )
console.log(Math.ceil(rondmaNumber));
console.log(Math.floor(rondmaNumber));
console.log(Math.trunc(rondmaNumber));