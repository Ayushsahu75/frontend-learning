// DOM = document object method
// // create element in HTML with the use of js

// let element = document.createElement('li');
// element.innerHTML = 'TS';

// const parent = document.getElementById("root");
// parent.appendChild(element);


// // *****multiple element ko insert krna hai toh 1 function create krenge****
// function attech(content){
// let element = document.createElement('li');
// element.innerHTML = content ;

// const parent = document.getElementById("root");
// parent.appendChild(element);
// };

// attech("IS");
// attech("JS");
// attech("REACT");

// //another form to attech multiple ellement 
// function attech(content){
//     let element = document.createElement('li');
//     element.innerHTML = content ;
    
//     let element2 = document.createElement('li');
//     element.innerHTML = content+"v2.0" ;

//     const parent = document.getElementById("root");
//     parent.appendChild(element , element2);
//     };
    
//     attech("IS");
//     attech("JS");
//     attech("REACT");

// //***********add textnode***************
// let textn = document.createTextNode("hello coder army");
//     const parent = document.getElementById('root');
//     parent.appendChild(textn);

//***********add Attribute node***************
// const element = document.createAttribute("id");
// element.value = "first";

// const curr_list = document.querySelector('li');
// curr_list.setAttributeNode(element);

// //************access to second list *******
//  const element = document.getElementById("root");
//  parent.children[1].setAttributeNode(element);

//  //********access attribute of element *

//  const element = document.getElementById("root");
//  //console.log(element.getAttribute("style"));

//  //set attribute
//  element.setAttribute("custom" , "20"); // create 
//  element.setAttribute("class" , "rohan"); //update
//  element.removeAttribute("custom")  // remove

 //******Add nodes to the DOM */

 const parent = document.getElementById("date"); // consider array
parent.innerHTML=Date();
 const element = document.createElement("li"); // considerd data 
 element.innerHTML = "or bete" ;

// parent.prepend(element);// first me 
parent.append(element);// last me 
