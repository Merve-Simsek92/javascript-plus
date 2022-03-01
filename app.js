// const hotel = {
//     brand: 'Hotel Clarusway',
//     categories: ['Spa', 'Swimming Pool', 'Resort'],
//     options: ['just stay', 'free breakfast', 'all inclusive'],
//     rooms: ['2-bed', '3-bed', '4-bed'],
//     receptionHours: {
//       mon: {
//         open: 8,
//         close: 22,
//       },
//       fri: {
//         open: 9,
//         close: 21,
//       },
//       sat: {
//         open: 10,
//         close: 20,
//       },
//     },
  
//     // book: function (obj) {
//     // console.log(obj)
//     book: function ({ arrival, departure, optionIndex = 0, roomIndex = 0 }) {
//       console.log(
//         `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} between ${arrival}-${departure}`
//       );
//     },
//   };
//   console.log(hotel.brand);
// const person = {
//   firstName: 'Barry',
//   lastName: 'Mitchell',
//   birthYear: 1977,
//   skills: ['JS', 'AWS', 'Docker', 'Python'],
//   employed: true,
// };
// console.log(person);
// console.log(person.firstName);
// console.log(person["firstName"]);

// console.log(person["2022"]);
// let yer=2022;
// console.log(person["year"]);

// const comments = [
//   {userName: 'Mark', comment: 'very good', likes: 99},
//   {userName: 'John', comment: 'bla bla bla', likes: 2}]

  // for (const key of Object.keys(person)){
  //   Object.values()
  //   console.log(key);

  // }

  // for(const [key,value] of Object.entries(person)){
  //   console.log(`${key} :->:${value}`);
  // }
  // const person = {
  //     firstName: 'Barry',
  //     lastName: 'Mitchell',
  //     birthYear: 1977,
  //     skills: ['JS', 'AWS', 'Docker', 'Python'],
  //     employed: true,
  //     calcAgeBad: function (bYear) {
  //       return 2022 - bYear;
  //     },
  //     calcAge() {
  //       /* this.age = 2022 - this.birthYear;
  //       return this.age; */
  //       return 2022 - this.birthYear;
  //     },
  //   };

  //   console.log(person.calcAge());
  //   console.log(person.age);
    
    
  //   function f1(){
  //     console.log(this);
  //   }
  //   f1();

  //   const calcAge = function (birthYear) {
  //     console.log('Regular Function in Global Scope');
  //     console.log(this);
  //     console.log(2022 - birthYear);
  //   };
  //   calcAge(1977)

  //   const calcAgeArrow = (birthYear) => {
  //     console.log('Arrow Function in Global Scope');
  //     console.log(this);
  //     console.log(2022 - birthYear);
  //   };
  //   calcAgeArrow(1980)
  const teacher = {
    birthYear: 1985,
    calcAge() {
      console.log('Regular Function in Object');
      console.log(this);
      console.log(2022 - this.birthYear);
    },
    calcAgeArrow: () => {
      console.log('Arrow Function in Object');
      console.log(this);
      console.log(2022 - this.birthYear);
    },
    calcAgeDelayed() {
      setTimeout(function () {
        console.log('Regular Function in setTimeout');
        console.log(this);
        this.calcAge();
      }, 2000);
    },
    calcAgeDelayedArrow: function () {
      setTimeout(() => {
        console.log('Arrow Function in setTimeout');
        console.log(this);
        this.calcAge();
      }, 2000);
    },
  };

  const student = {
    birthYear: 1995,
  };

  //student.calcAge()=teacher.calcAge();

// console.log(student.calcAge());
const myFunc=teacher.calcAge;

//teacher.calcAge();
//teacher.calcAgeArrow()
//teacher.calcAgeDelayed();
//teacher.calcAgeDelayedArrow();

// let anObject = {
//   firstName: 'John',
//   age: 30,
//   isMarried: false,
//   introduce: () => {
//     return `${this.firstName} is ${this.age} years old.`;
//   },
//   introduce2: function () {
//     return `${this.firstName} is ${this.age} years old.`;
//   },
// };

// console.log(anObject.introduce());
// console.log(anObject.introduce2());

// class sytanx

// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   walk() {
//     console.log('Im walking');
//   }
//   speak() {
//     return 'I like humans';
//   }
// }
// console.log(Pet);
// const myPet=new Pet("Ruby",3);
// myPet.walk();

// class Cat extends Pet{
//    #weight=5555;
//   constructor(name,age,color){
//     super(name,age);
//     this.color=color;
//   }
//   speak() {
//     let prevMsg = super.speak();
//     prevMsg = ' and I like to meow';
//     return this.#weight;
//   }
// }

// const muezza=new Cat("Müezza",2,"grey");
// //muezza.#weight=4;
// muezza.name="Riza";
// console.log(muezza);
// console.log(muezza.speak());


// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   walk() {
//     console.log('Im walking');
//   }
//   speak() {
//     return 'I like humans';
//   }
// }

// console.dir(Pet);
// const myPet = new Pet('Ruby', 3); // instance
// myPet.walk();
// // console.log(myPet);

// class Cat extends Pet {
//   #weight = 5555;
//   constructor(name, age, color) {
//     super(name, age);
//     this.color = color;
//   }

//   speak() {
//     let prevMsg = super.speak();
//     prevMsg = ' and I like to meow';
//     return this.#weight;
//   }
// }

// var muezza = new Cat('Müezza', 2, 'grey');
// //muezza.#weight = 4;
// muezza.name = 'Riza';
// console.log(muezza);
// console.log(muezza.speak());
// muezza.walk();
// console.log(muezza.weight);
// function Pet2(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Pet.prototype.walk = function () {
//   console.log('Im walking');
// };
// Pet.prototype.speak = function () {
//   return 'I like humans';
// };

// const note={
//   id:1,
//   title:"my first note",
//   date:"01/01/1970",
// };
// // const id=note.id;
// console.log(id);

// const {id,title,date}=note
// console.log(id,title,date);

// const {id:noteId,title:noteTitle,date:nodeTitle}=note

//console.log(noteId);
// const note = {
//   id: 1,
//   title: 'My first note',
//   date: '01/01/1970',
//   author: {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'johndoe@example.com',
//   },
// };
// const {id,title,date,author:{firstName,lastName,email}}=note;
// console.log(`${firstName}`);