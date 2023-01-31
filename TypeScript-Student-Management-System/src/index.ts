class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }
};

class Student extends Person {
    rollNumber: string;
    courses: Course[] = [];

    constructor(name: string, age: number, rollNumber: string) {
        super(name, age);
        this.rollNumber = rollNumber;
    }

    registerForCourses(course: Course) {
        return this.courses.push(course);
    }
};

class Instructor extends Person {
    courses: Course[] = [];

    assignCourse(course: Course) {
        return this.courses.push(course);
    }
};

class Course {
    id: string;
    name: string;
    students: Student[] = [];
    instructor!: Instructor;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    addStudent(student: Student) {
        this.students.push(student);
        student.registerForCourses(this);
    }

    setInstructor(instructor: Instructor) {
        this.instructor = instructor;
        instructor.assignCourse(this);
    }
};

class Department {
    name: string;
    courses: Course[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addCourse(course: Course) {
        this.courses.push(course);
    }
};

const student1 = new Student("Ahmed", 22, "1234");
const student2 = new Student("Hamzah", 22, "5678");

const instructor1 = new Instructor("Adil", 30);
const instructor2 = new Instructor("Zia", 60);

const course1 = new Course("Course 1", "CNC");
const course2 = new Course("Course 2", "Web 3");

const depart1 = new Department("JAMStack");
const depart2 = new Department("Serverless API");

course1.addStudent(student1);

course2.addStudent(student1);
course2.addStudent(student2);

course1.setInstructor(instructor1);
course2.setInstructor(instructor2);

depart1.addCourse(course1);
depart1.addCourse(course2);

depart2.addCourse(course2);

console.log(depart1);
console.log(depart2);