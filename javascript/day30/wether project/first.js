document.querySelector('button').addEventListener('click' , ()=>{
    const place = document.getElementById('cityInput').value ; 
    
    function updatetemp(data){
        const element = document.getElementById('WeatherINFO');
    element.innerHTML = `todays temperature is : ${data.current.temp_c}   ` ;
    }
   
   
       
    
    

     const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=f90d19d42ac64ce1b02101228251005&q=${place}&aqi=no`)
 
   prom    
   .then(response=>response.json())
    .then(data=> updatetemp(data))
    
    .catch(error=>console.log(error));
    }
    
)