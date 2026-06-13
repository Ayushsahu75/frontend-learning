function timing(){ 
    const timer = document.getElementById('root'); 
    const now = new Date(2025 , 4 ,3); 
    const Indiantime = now.toLocaleTimeString(); 
    timer.innerHTML = Indiantime; 
} 
setInterval(timing , 1000);
// function countdown() {
//     const timer = document.getElementById('root');
//     const now = new Date(); // Current date and time
//     const targetDate = new Date('2025-05-10'); // Set your upcoming date

//     const timeDifference = targetDate - now; // Difference in milliseconds

//     if (timeDifference > 0) {
//         // Calculate remaining days, hours, minutes, and seconds
//         const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//         // Update the timer display
//         timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
//     } else {
//         // When countdown reaches zero
//         timer.innerHTML = "The time has come!";
//     }
// }

// setInterval(countdown, 1000); // Update every second
// countdown(); // Initial call to display immediately



const timer = document.getElementById('root'); 
timer.style.fontSize = "200px"; 
timer.style.display = "flex"; 
timer.style.height = "200vh" ; 
timer.style.justifyContent = "center"; 
timer.style.alignContent = "center"; 
timer.style.marginTop = "50vh";
