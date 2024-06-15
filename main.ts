class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }
    getName(): string{
        return this.name;
    }
}

class Student extends Person {
    rollNumber: number;
    courses: Course[] = [];

    constructor(name: string, age: number, rollNumber: number) {
        super(name, age);
        this.rollNumber = rollNumber;
        this.courses= [];
    }

    registerForCourses(course: Course) {
        
            this.courses.push(course);
       
    }
}

class Instructor extends Person {
    salary: number;
    courses: Course[] = [];

    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this.salary = salary;
    }

    assignCourse(course: Course): void {
        
            this.courses.push(course);
      
    }
}

class Course {
    id: number;
    name: string;
    students: Student[] = [];
    instructor!: Instructor;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    addStudent(student: Student): void {
        
            student.registerForCourses(this);
       
    }

    setInstructor(instructor: Instructor): void {
       
            this.instructor= instructor;
        
    }
}

class Department {
    name: string;
    courses: Course[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addCourse(course: Course): void {
       
            this.courses.push(course);
       
    }
}

// Student objects
const student1 = new Student("Fariha", 27, 1234);
const student2 = new Student("Rozina", 28, 5678);
const student3 = new Student("Rabiya", 27, 4321);
const student4 = new Student("Ahsan", 28, 4527);
const student5 = new Student("Ifrah", 26, 3698);
const student6 = new Student("Tooba", 29, 5759);
const student7 = new Student("Madiha", 28, 4365);
const student8 = new Student("Faraz", 30, 3216);
const student9 = new Student("Safeena", 27, 6785);
const student10 = new Student("Shahzaib", 28, 5430);

// Instructor objects
const instructor1 = new Instructor("Usman", 30, 100000);
const instructor2 = new Instructor("Rizwan", 40, 200000);
const instructor3 = new Instructor("Abbas", 35, 80000);
const instructor4 = new Instructor("Shahid", 40, 700000);
const instructor5 = new Instructor("Kiran", 30, 50000);
const instructor6 = new Instructor("Aftab", 40, 200000);
const instructor7 = new Instructor("Zahra", 35, 100000);
const instructor8 = new Instructor("Kashif", 40, 200000);
const instructor9 = new Instructor("Faryal", 45, 300000);

// Course objects
const course1 = new Course(1, "Healthcare Informatics");
const course2 = new Course(2, "Accounting");
const course3 = new Course(3, "Data Science");
const course4 = new Course(4, "Advance Strategic Management");
const course5 = new Course(5, "Finance");
const course6 = new Course(6, "Epidemiology");
const course7 = new Course(7, "Business Communication");
const course8 = new Course(8, "Organizational Behaviour & Leadership");
const course9 = new Course(9, "Marketing Fundamentals");
const course10 = new Course(10, "Health Program Evaluation");

// Register students for courses
course1.addStudent(student1);
course2.addStudent(student1);
course3.addStudent(student1);
course4.addStudent(student1);
course5.addStudent(student1);
course6.addStudent(student1);

course1.addStudent(student2);
course2.addStudent(student2);
course3.addStudent(student2);
course4.addStudent(student2);
course5.addStudent(student2);
course6.addStudent(student2);

course1.addStudent(student3);
course2.addStudent(student3);
course3.addStudent(student3);
course4.addStudent(student3);
course5.addStudent(student3);
course6.addStudent(student3);

course1.addStudent(student4);
course2.addStudent(student4);
course3.addStudent(student4);
course4.addStudent(student4);
course5.addStudent(student4);
course6.addStudent(student4);

course1.addStudent(student5);
course2.addStudent(student5);
course3.addStudent(student5);
course4.addStudent(student5);
course5.addStudent(student5);
course6.addStudent(student5);

course1.addStudent(student6);
course2.addStudent(student6);
course3.addStudent(student6);
course4.addStudent(student6);
course5.addStudent(student6);
course6.addStudent(student6);

course1.addStudent(student7);
course2.addStudent(student7);
course3.addStudent(student7);
course4.addStudent(student7);
course5.addStudent(student7);
course6.addStudent(student7);

course1.addStudent(student8);
course2.addStudent(student8);
course3.addStudent(student8);
course4.addStudent(student8);
course5.addStudent(student8);
course6.addStudent(student8);

// Assign instructors to courses
course1.setInstructor(instructor1);
course2.setInstructor(instructor2);
course3.setInstructor(instructor3);
course4.setInstructor(instructor4);
course5.setInstructor(instructor5);
course6.setInstructor(instructor6);
course7.setInstructor(instructor7);
course8.setInstructor(instructor8);
course9.setInstructor(instructor9);
course10.setInstructor(instructor6);

// // Department objects and add courses
const d1 = new Department("Institute of Business & Health Management");
const d2 = new Department("Nursing");

d1.addCourse(course1);
d1.addCourse(course2);
d1.addCourse(course3);
d1.addCourse(course4);
d1.addCourse(course5);
d1.addCourse(course6);
d1.addCourse(course7);
d1.addCourse(course8);
d1.addCourse(course9);
d1.addCourse(course10);

// d2.addCourse(course1); // Assuming course1 belongs to both departments for demonstration
// d2.addCourse(course2);
// d2.addCourse(course3);
// d2.addCourse(course4);
// d2.addCourse(course5);
// d2.addCourse(course6);
// d2.addCourse(course7);
// d2.addCourse(course8);
// d2.addCourse(course9);
// d2.addCourse(course10);

// console.log(d1);
// console.log(d2);



student1.registerForCourses(course1);
student2.registerForCourses(course1);

console.log(student1.getName()); 
console.log(student1.courses); 
console.log(instructor1.courses); 
console.log(d1.courses);