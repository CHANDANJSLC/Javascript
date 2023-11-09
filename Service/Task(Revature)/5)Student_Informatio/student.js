const student = {
    Name: '',
    Age: 0,
    Grade: '',
    displayInfo() {
      console.log(`Name: ${this.Name}\nAge: ${this.Age}\nGrade: ${this.Grade}`);
    }
  };
  
  student.Name = prompt("Enter the student's name: ");
  student.Age = parseInt(prompt("Enter the student's age: "));
  student.Grade = prompt("Enter the student's grade: ");
  
  console.log("Student Information:");
  student.displayInfo();


  