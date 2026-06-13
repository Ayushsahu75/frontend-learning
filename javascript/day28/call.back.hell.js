 // callback hell function

function priya(callback){
    console.log("priya call ayush ")
     setTimeout(()=>{
        console.log("Ayush pickup the call")
        callback();
     },5000);
     
};

function Ayush(callback){
    console.log("Ayush - hn priya")
     setTimeout(()=>{
        console.log("priya - bhai bhajiya la de")
        callback();
     },2000);
};
function bhajiyawala(callback){
    console.log("Ayush - bhaiya bhajiya dedo")
     setTimeout(()=>{
        console.log("bhajiya wala - lo bhai bhajiya")
        callback();
     },5000);
};
// priya(Ayush); // isse time aage piche ho raha h code ka so

priya(()=>{
    Ayush(()=>{
        bhajiyawala()
    });
});