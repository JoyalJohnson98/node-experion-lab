//printing star in reverse
// let n = 10;
// let string = "";
// for (let i = 1; i <=n; i++) {
//   // printing spaces
//   for (let j = 0; j < n-i ; j++) {
//     string += " ";

//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string += "*";

//   }
//   string += "\n";
// }
// console.log(string);


//printing star in reverse
// for (let i=1;i<=10;i++){
//     for (let j=10;j>=1;j--)
//     {
//         if (i>=j){
//             if(i%2!==0){


//         process.stdout.write("*");
//             }
//         }
//         else 
//         {
//             process.stdout.write(" ");
//         }

//     }
//     console.log("")


//program to check a number for even or odd
// let number = 5;
// let remainder = (number%2);
// if(remainder == 0){
//     console.log(`${number} is even`);
// }
// else{
//     console.log(`${number} is odd`); 
// }


// function icecream(makeicecream,flavour,flavours)
// { setTimeout(()=>{ makeicecream(flavour); },flavours.kiwi) } 
// const flavours = { "kiwi": 6000, "pineapple": 7000, } 
// icecream(function (flavour,flavours)
// { console.log(`${flavour} flavoured icecream`) },"kiwi",flavours)



// Importing events
// const EventEmitter = require('events');
// // Initializing event emitter instances
// var eventEmitter = new EventEmitter();
// // Registering to myEvent
// eventEmitter.on('myEvent', (msg) => {
// console.log(msg);
// });
// // Triggering myEvent
// setTimeout(()=>{
//  eventEmitter.emit('myEvent', "First event");
// },2000)

//number pyramid
// var n = 9
// for (i = 1; i <= n; i++) {
//     for (k = 0; k < n - i; k++) {
//         process.stdout.write(' ')
//      }
//     for (j = 0; j < i; j++){
//         process.stdout.write(i + ' ')
// } 
// console.log()
// }

//fibannoci
// var firstelement = 0;
// var secondelement = 1;
// process.stdout.write(firstelement+' ');
// process.stdout.write(secondelement+' ');
// for(i=0;i<10;i++){
//     c = firstelement + secondelement;
//     process.stdout.write(c+' ');
//     firstelement=secondelement;
//     secondelement=c;
// }


//my name is joyal, how to reverse each alaphabet in everyword backward
// var s = 'my name is joyal'
// var arr = s.split(' ')
// var t = ''
// for (i = 0; i < arr.length; i++) {
// for (j = arr[i].length - 1; j >= 0; j--) {
// t = t + arr[i][j]
// }
// process.stdout.write(t + ' ')
// t = ''
// }

//join two array but no need of duplicates to come
// var arr1 = [1,2,3];
// var arr2 = [3,4,5];
// for(i=0;i<arr2.length;i++){
//     if(!(arr1.includes(arr2[i])))
//     {
//         arr1.push(arr2[i])
//     }
// }
// console.log(arr1)

//two arrays want to be joined but duplicates doesn't want to print
// let array1 = ['a','b','c']
// let array2 = ['c','c','d','e'];
// let array3 = [];
// for(let i=0;i<array1.length;i++){
//   if(array3.indexOf(array1[i]) == -1)
//      array3.push(array1[i])
// }
// for(let i=0;i<array2.length;i++){
//   if(array3.indexOf(array2[i]) == -1)
//      array3.push(array2[i])
// }
// console.log(array3);

//two arrays want to be joined but duplicates doesn't want to print
// var arr1 = [1, 2, 3, 3]
// var arr2 = [3, 4, 5, 4]
// var arr3 = arr1.concat(arr2)
// var arr4 = []
// for (i = 0; i < arr3.length; i++) {
// if (!(arr4.includes(arr3[i]))) {
// arr4.push(arr3[i])
// }
// }
// console.log(arr4);





