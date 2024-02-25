// Problem 1.
class Account {
  constructor(id, balance) {
    this.id = id;
    this.balance = balance;
  }
  deposit(amnt) {
    this.balance += amnt;
  }
  withdraw(amnt) {
    if (this.balance - amnt >= 0) {
      this.balance -= amnt;
    }
  }
  getBalance() {
    return this.balance;
  }
}

class SavingsAccount extends Account {
  constructor(id, balance, rate) {
    super(id, balance);
    this.interestRate = rate;
  }
  addInterest() {
    this.balance += Math.floor((this.interestRate / 100) * this.balance);
  }
  setInterestRate(rate) {
    this.interestRate = rate;
  }
}

class CheckingAccount extends Account {
  constructor(id, balance, limit) {
    super(id, balance);
    this.overdraftLimit = limit;
  }
  withdraw(amnt) {
    if (this.balance - amnt >= -this.overdraftLimit) {
      this.balance -= amnt;
    }
  }
  setOverdraftLimit(limit) {
    this.overdraftLimit = limit;
  }
}

// Problem 2.

function Animal(name, type) {
  this.name = name;
  this.type = type;

  
}
Animal.prototype.makeSound = function () {
  return `Animal is making a sound`;
};

function Mammal(name, type, hasFur) {
    
  Animal.call(this,name,type)
  this.hasFur = hasFur;

}
Object.setPrototypeOf(Mammal.prototype,Animal.prototype)
Mammal.prototype.makeSound = function () {
  return `Mammal is making a sound`;
};


function Dog(name, type, hasFur, breed) {
  Mammal.call(this,name,type);

  this.hasFur = hasFur;
  this.breed = breed;

}
Object.setPrototypeOf(Dog.prototype, Mammal.prototype);
Dog.prototype.makeSound = function () {
  return "Woof Woof!";
};

// Problem 3.
class Character {
  constructor(name, health, attackPower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;

  }
  attack(obj) {
    obj.health -= this.attackPower

  }
  isAlive() {
    if (this.health>0) {
      return true;
   }
    return false;
  }
}


class Warrior extends Character {
    
  constructor(name, health, attackPower, weapon, armor) {
    super(name, health, attackPower)
   
    this.weapon = weapon
    this.armor = armor;
  }
  attack(obj) {
    if (this.weapon = "sword") {
      this.attackPower += 10;
    }
    super.attack(obj);
  }
  defend() {
    this.health += 10;
  }


}


// Problem 4.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;

  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age)
    this.grade = grade;
  }
  study() {
    console.log(`${this.name} is studying`)
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age)
    this.subject = subject;
    this.students = [];

  }
  addStudent(student) {
    this.students.push(student)
  }
  teach() {
    console.log(`${this.name} is teaching ${this.subject}`)
  }
}

class MathTeacher extends Teacher {
  constructor(name, age) {
    super(name, age, "Math")
    

  }
  assignHomework() {
    console.log(`${this.name} assigned homework to their ${this.subject} class.`)

  }
}
class HighSchoolMathTeacher extends MathTeacher {
  constructor(name, age, department) {
    super(name, age, "Math");
    this.department = department;
  }
  introduce() {
    console.log(
      `Hi, my name is ${this.name}, I'm a ${this.department} ${this.subject} teacher and I'm ${this.age} years old.`
    );
  }
  averageStudentAge() {
    let totalAge = 0;
    for (let student of this.students) {
      totalAge += student.age;
    }
    let avgAge = Math.floor(totalAge / this.students.length);
    console.log(`The average age of my ${this.subject} students is ${avgAge}.`);
  }
  teach() {
    console.log(`${this.name} is teaching ${this.subject}.`);
  }
}

export {
  Dog,
  Mammal,
  Animal,
  Character,
  Warrior,
  Account,
  SavingsAccount,
  CheckingAccount,
  Person,
  Student,
  Teacher,
  MathTeacher,
  HighSchoolMathTeacher,
};
