var a = function(name,age) {
    console.log(name,age);
}
a("chandan",20)



var person = {
    name : "chandan",
    age : 20,
    getname : function(){
        console.log("This is my object within function");
    }
}
person.getname;

//reduce()
var a=[1,2,3,4,5]
var sum = a.reduce((acc,value)=>acc+value); 
console.log(sum);

//filter()
var a=[1,2,3,4];
var even = a.filter((a,index,arr)=>{
    return a%2===0
})
console.log(even);


//map()
var number=[1,2,3,4,5]
var thrice = number.map((num,index,arr) =>{
    return num*3;
})
console.log(thrice);







