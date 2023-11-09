
//Using 'children' and childNodes()'

console.log(document);

console.log(document.body.childNodes);

console.log(document.body.children);

console.log(document.body.firstChild);  //text

console.log(document.body.firstElementChild); //div

console.log(document.body.parentElement);



// Select HTML Elements using selctors.

// getElementById('<idName>');

const id1Element= document.getElementById('i1');
console.log(id1Element);


// getElementsByClassName
const mainClassElements = document.getElementsByClassName('mainDiv');
console.log(mainClassElements);


// getElementsByTagName
const divElements= document.getElementsByTagName('div');
console.log(divElements);


// QuerySelector

// id selector => #<Name of ID>


const id1Element1 = document.querySelector('#i1');
console.log(id1Element1);

// Class Selector => .<Name of Class>
const mainClassElements1 = document.querySelector('.mainDiv');
console.log(mainClassElements1);




// querySelctorAll
const mainClassElementsAll = document.querySelectorAll('.mainDiv');
console.log(mainClassElementsAll);

// Tag selector => <Tag Name>
const divElements1= document.querySelectorAll('div');
console.log(divElements1);


// Change the text in DOM:

//1)innerHTML 
const id1ele=document.getElementById('i1');
id1ele.innerHTML="chandan";


//2)textContent

const id2ele=document.getElementById('i2');
id2ele.textContent="<b> Shreysh </b>";
//-----------------------------------------------------------------------------------------

let users=["Shreysh","Mahesh","Rajan"];
const ul=document.getElementById('Posts');

for(let user of users)
ul.innerHTML = ul.innerHTML + `<li>${user} </li>`


//-----------------------------------------------------------------------------------------

//Event Registrataion.

// Direct Event Registration.

function pClicked(){
    console.log("Bye");
}


// Event Listeners
const p2=document.getElementById('p2');

function pClickedwithListener(){
    console.log("Bye");
}
p2.addEventListener('click',pClickedwithListener);




