//OOPS concepts

//Encapsulatio)=>Constructor and getname

class person1 {
    constructor(name,age,location){
        this.name=name;
        this.age =age;
        this.location=location;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getLocation(){
        return this.location;
    }
}
let p1=new person1("chandan",22,"Mysore")
console.log(p1.getName());
console.log(p1.getAge());
console.log(p1.getLocation());

//Inheritance=>

class Animal{

    speak(){
        console.log("Animals makes sound");
    }
}
class Dog extends Animal{

    constructor(name,age){
        super();
        this.name=name;
        this.age=age;
    }
//Polymorphism=>Method overriding
    speak(){
        console.log("Bruno barks");
    }
}
let d1 = new Dog("Bruno",12);
console.log(d1.name);
d1.speak();


//Create student class with name and age properties and a method getName which will return the name for that object.
//Create 5 student objects using this class.
//take ages of the students having age gretear than 20 using filter().
class Student{
    constructor(name,age){
        this.name=name;
        this.age =age;
}
getName(){
    return this.name;
}
getAge(){
    return this.age;
}
}
let s1 = new Student("chandan",10)
let s2 = new Student("shrysh",15)
let s3 = new Student("anvesh",20)
let s4 = new Student("deekshith",25)
let s5 = new Student("durga",30)

let students = [s1,s2,s3,s4,s5];
var agefilteredstudent = students.filter(student=>student.getAge()>=20);
console.log(agefilteredstudent);

