//Object.prototype
// let obj = ();

// Object.defineProperties(obj , 'name'{
//     value:"rohit",
//     Writable:true,//value kabhi change nhi hogi writable : false krne se 
//     enumerable:true, // jis bhi key ka enumerable true hoga , unsb ka access hoga ya print
                        // inherit hoke aayegi property usse bhi access krega 
//     configurable:true, // Writable:true ,enumerable:true, inki value change kr skte h 
//                        // or or kisi bhi property ko delete bhi kr skte h 
//                        // or agar false h toh opposite ho jayega
// })

const customer = {
    name : "rohiit" ,
    // age  = 23,
    acc_Number=123,
    balance=33,
}
console.log(customer);

// Object.defineProperties(customer , 'name',{});
console.log(Object.getOwnPropertyDescriptor(customer , "name"));
 