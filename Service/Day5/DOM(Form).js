//Get form data
let users =[];

let form=document.getElementById('myForm');
const ul=document.getElementById('userList');
function userRegistration(event){

    //Prevent form submission and prevent by default form reloading
    //Now by default reloading doesnot happen, it prevent(preventDefault)
    event.preventDefault();
    
    //Get the value to store.
    let name = document.getElementById('uname').value;
    document.getElementById('uname').value=="";//If after entering again username column blank
    let pass=document.getElementById('pass').value;
    let city=document.getElementById('city').value;

    let user={
        uname:"",
        pass: "",
        city: "",
    };
    user.uname=name;
    user.pass=pass;
    user.city=city;
    //display the nam and pass in console.
    console.log(name);
    console.log(pass);

    
    users.push(user);
   // console.log(users);
    






   //    ul.innerHTML +=`<li>${name}</li>`;

// Creating new HTML elements using JS

// Create HTML element: document.createElement('<Element Name>');
var newLi=document.createElement('li');

// Add Contenet in Element:  newElement.innerHTML="";
newLi.innerHTML=`${name}`;


// Adding new element to parent element : parentEle.appendChild(<NewElemnt>);
ul.appendChild(newLi);



   
}
form.addEventListener('submit',userRegistration);


