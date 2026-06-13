// let arr = [2,4,56,6,4,1];
// console.log(arr); 
// console.log(arr[2]);
// arr.push(30); // push means new element add krna piche se
// console.log(arr);
// arr.pop(arr); // pop = delete element 
// console.log(arr);
// arr.shift(); // shift = delete first element
// console.log(arr);
// arr.unshift(); // unshift = add element at first position

// console.log(arr);
// console.log(arr.length); // length = array me kitne element h 
// console.log(arr.indexOf()); // indexof = array me kitne index pr element h
// console.log(arr.includes()); // includes = array me element find krna 

// console.log(arr.slice(2,4)); // slice(2,4) = remove element(index2 se 4 element )
// console.log(arr.length);
// console.log(arr.splice(1,4));//splice original array ke ander change krta h 
// console.log(arr);
// arr.splice(2,0,"moner",98); //  
// console.log(arr);
// console.log(arr.toString()); // tostring = array ko string me convert krta h 
// console.log(arr.join("*"));  // join = same tostring  but join se join krta h 
// console.log(arr.join("+"));

// concat = array ko join krna
// let arr1 = [ 3,4,5,6,7];
// let arr2 = ['nami','ji' ,34,56];
// let arr3 = arr1.concat(arr2) ;
// console.log(arr3);

let arr2d = [[1,2,3], [3,4,5],[4,5,6]];
console.log(arr2d);
// let arr3d = [[1,2,[3,7]], [3,4,5],[4,5,6]];
// console.log(arr3d);
// console.log(arr3d[0][2][1]);
let newarr = arr2d.flat();
console.log(newarr);
let newarr2 = arr2d.flat(Infinity);
console.log(newarr2);

console.log(Array.isArray(newarr2));