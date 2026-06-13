// call back function


// function names(fun){
//     console.log("Hello I am name");
//     fun();
// }

// const greet = function (){
//     console.log("I am call Back Function");
// }

// names(greet);


// names(function (){
//     console.log("I am call Back Function");
// });

// names(()=>{
//     console.log("I am call Back Function");
// });


// function fetchData(){
//     // bhut saara 
//     console.log("I am fetching data");
// }

// setInterval(fetchData,5000);  // setInterval means after every 5 second fatchData will be calles


// function abhay(){
//     console.log("Abhay chutiya ");
// }
// setInterval(abhay,200);




// //second callback function = FOR EACH
// let array = [10,20,30,40,50];
// array.forEach(function(num) {
//     console.log(num);
// }); 

// //for each aerow function 
// let array = [10,20,30,40,50];
// array.forEach( (num) => {
//     console.log(num);
// }); 

// sath me index
// let array = [10,20,30,40,50];
// array.forEach( (num , index) => {
//     console.log(num , index);
// }); 

// or shortcut for each aerow function

// let array = [10,20,30,40,50];
// array.forEach( (num , index ) => console.log(num , index));

//& array
let array = [10,20,30,40,50];
array.forEach( (num , index , a) 
// array.forEach( ( yaha pr only 3 argument hi pass hote h )
//  1 = number 
//  2 = index 
//  3 = araay & array ko modify bhi kr skte h 
=> {
   a[index] = num*2;
}); 
console.log(array);

// filter 
// map