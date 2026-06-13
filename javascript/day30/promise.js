
// const promises = fetch(`http://api.weatherapi.com/v1/current.json?key=f90d19d42ac64ce1b02101228251005&q=india&aqi=no`)
// console.log(promises);

// setTimeout(()=>{
//     console.log(promises)
// },2000)                       //set timeout se hm wether ka output nikaal skte h lakin hme pta nhi h ki kitne time tk wait krna h isliye dusra takria dekhte h

//best method to check wether
// promises.then((data)=>{
//     console.log(data);
// })
 
// there are three typr = pending ,resolve ,reject

// promises.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })  //isse hame wather ki hearder code mil raha h 

//----BODY-----

// promises.then((response)=>{
//     console.log(response.json());
// }) // pending

const promises = fetch(`http://api.weatherapi.com/v1/current.json?key=f90d19d42ac64ce1b02101228251005&q=india&aqi=no`)

// promises.then((response)=>{
//     const obj =  response.json();
    
//     obj.then((Data)=>{
//         console.log( Data);
//     })
// }) 

//direct bhi likh skte h AERO FUNCTION KA USE KRKE
.then(response=>response.json())
.then(Data=>console.log( Data))
.catch(error=>console.log(error));

