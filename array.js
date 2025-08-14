// for(let i = 0; i <= 1000; i++){
//   if (i % 2 === 0) {
//     console.log(`The number ${i} is an even number`);
//   } else {
//     console.log(`The number ${i} is an odd number`);
//   }
// }
 for(let idx = 0; idx <= 1000; idx++){
   if (Math.sqrt(idx) % 1 === 0 && Math.cbrt(idx) % 1 === 0) {
     console.log(`The number ${idx} is a perfect square and cube!`);
   } else if (Number.isInteger(Math.sqrt(idx))) {
    console.log(`The number ${idx} is a perfect square`);
   } else if(Math.cbrt(idx) % 1 === 0){
    console.log(`The number ${idx} is a perfect cube`);
   }
 }
