let name = "Joselda";
let age = 20;
let place = "Cabunga-an";
let grade = 95;
let studentId = 2024;
let course = "BSCS";
let yearLevel = 3;
let favoriteColor = "Purple";
let favoriteFood = "Adobo";
let greeting = "Hello Guys";

const schoolName = "NWSSU";
const myCountry = "Philippines";
const allowance = 500;
const score = 90;
const passingScore = 100;
const semester = "First Semester";
const subject = "Professional Elective";
const section = "BSCS-3B";
const amount = 60;
const birthMonth = "July";

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const greetUser = (user) => `Hello, ${user}!`;
const isPassing = (grade) => grade >= passingScore;

const message1 = `My name is ${name}.`;
const message2 = `I am ${age} years old.`;
const message3 = `I live in ${place}.`;
const message4 = `My score is ${score}.`;
const message5 = `My student Id is: ${studentId}.`;
const message6 = `I am taking ${course}.`;
const message7 = `I am in year ${yearLevel}.`;
const message8 = `My favorite color is ${favoriteColor}.`;
const message9 = `My favorite food is ${favoriteFood} ${amount}.`;
const message10 = `${greeting}, welcome to ${schoolName}!`;

const foods = ["Adobo", "Bicol", "Sinigang"];
const [foods1, foods2, foods3] = foods;

const shoes = ["Puma", "Nike", "Adidas"];
const [shoes1, shoes2, shoes3] = shoes;

const colors = ["Red", "Purple", "BabyPink"];
const [color1, color2, color3] = colors;

const student = {
  studentName: "Joselda",
  studentAge: 20,
  studentCourse: "BSCS"
};
const { studentName, studentAge, studentCourse } = student;

const person = {
  firstName: "JOSELDA",
  lastName: "Cabeling",
  personAge: 20
};
const { firstName, lastName, personAge } = person;

const product = {
  productName: "SkinCare",
  price: 5000,
  brand: "Gj"
};
const { productName, price, brand } = product;

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const combinedArray = [...firstArray, ...secondArray];

const moreNumbers = [7, 8, 9];
const allNumbers = [...combinedArray, ...moreNumbers];

const basicInfo = {
  name: "Joselda",
  age: 20
};

const contactInfo = {
  email: "jopagudkanaba@example.com",
  phone: "0992233445"
};

const completeInfo = {
  ...basicInfo,
  ...contactInfo
};

const address = {
  Place: "Cabunga-an",
  country: "Philippines"
};

const fullProfile = {
  ...completeInfo,
  ...address
};

const originalNumbers = [1, 2, 3, 4, 5];

const doubledNumbers = originalNumbers.map((number) => number * 2);
const squaredNumbers = originalNumbers.map((number) => number * number);

const scores = [30, 50, 60, 70, 80, 95];

const passingScores = scores.filter((score) => score >= 80);
const highScores = scores.filter((score) => score >= 95);

const userAccount = {
  username: "Jo_kapoyna081524",
  profile: {
    email: "jopagudkanaba@example.com"
  }
};


const employee = {
  name: "Jojo",
  department: {
    manager: {
      name: "Ms.  Asotes"
    }
  }
};

const userContact = {
  email: userAccount?.profile?.email
};

const employeeManager = {
  managerName: employee?.department?.manager?.name
};

console.log(message1);
console.log(message2);
console.log(message3);
console.log(message4);
console.log(message5);
console.log(message6);
console.log(message7);
console.log(message8);
console.log(message9);
console.log(message10);

console.log(add(20, 5));
console.log(subtract(20, 5));
console.log(multiply(20, 5));

console.log(greetUser(name));
console.log(isPassing(score));

console.log(combinedArray);
console.log(allNumbers);

console.log(completeInfo);
console.log(fullProfile);

console.log(doubledNumbers);
console.log(squaredNumbers);

console.log(passingScores);
console.log(highScores);

console.log(userContact);
console.log(employeeManager);