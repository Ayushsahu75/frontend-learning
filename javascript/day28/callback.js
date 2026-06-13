//call back fun
// function fetchuser(Callback){
//    console.log(" fatch the user details...")
//    setTimeout(()=>{
//             console.log("data fetch successfully");
//             const name = "Abhay";
//             // geet(name);
//             // meet(name);
//             Callback(name);
//    },2000)
// }
// function geet(obj){
//     setTimeout(() => {
//         console.log(`or bete ${name}`);
//     },2000);

// }
// function meet(obj){
//     setTimeout(() => {
//         console.log(`lavde ${name} dikh mt jaiyo`);
//     },2000);
// }
// // fetchuser(geet );
// // fetchuser(meet );

// function chotu(obj){
//     console.log(`lavde ${name} chal bhajiya khane`);
// }
// //    fetchuser(chotu);





   function fetchuser(Callback){
       console.log(" fatch the user details...")
       setTimeout(()=>{
                console.log("data fetch successfully");
                const name = "Abhay";
                // geet(name);
                // meet(name);
            const obj = {
                           name:"abhay",
                           age: "21",
                           city: "narshingpur",
            }
                Callback(obj);
       },2000)
    }
    function geet(obj){
            setTimeout(() => {
                console.log(`or bete ${obj.name}`);
            },2000);
        
        }
        function meet(obj){
            setTimeout(() => {
                console.log(`bete ${obj.age} saal ke dikh mt jaiyo`);
            },3000);
        }
        // fetchuser(geet );
        // fetchuser(meet );
        
        function chotu(obj){
            setTimeout(()=>{
                console.log(`tu ${obj.city} chalega bhajiya khane`);
            },5000)
        }
      fetchuser(geet);
      fetchuser(meet);
      fetchuser(chotu);