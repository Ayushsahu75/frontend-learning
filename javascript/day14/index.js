let obj = {
    name: "rohan",
    age:23,
    gender:"male",
    city:"kotdwar"
};

// obj.toString()

// for(let key in obj)
//     console.log(key);

// for in loop , I can iterate over keys in an object

// for(let key in obj)
// {
//     console.log(key, obj[key]);
// }

// Object.keys(obj)
console.log(Object.keys(obj));

// let obj2 = Object.create(obj);
// obj2.money = 420;
// obj2.id = "Roh";
// // console.log(obj2);
// console.log(Object.keys(obj2)); // 
                                     // Object.keys(obj2) = isse object 2 ki sif 2 keys show hongi money or id
// for(let key in obj2)       // lakin isse object 2 ki sabhi key show hongi jo object 1 se inherit h 
// {
//     console.log(key);
// }
