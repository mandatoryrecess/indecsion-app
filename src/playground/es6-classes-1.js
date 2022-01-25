class Person {
  constructor(name, age = 18) {
    this.name = name; 
    this.age = age; 
  }
  getGreetting(){
    return `Hi ${this.name} it's so nice to see you!`; 
  }
  getDescription(){
    return `It's not a nice place to spend your ${this.age + 1} Birthday`;
  }

}

  class Student extends Person {
    constructor(name, age, major) {
      super(name, age);
      this.major = major; 
    }
    hasMajor() {
      return !!this.major; 
    }

    getDescription() {
      let description = super.getDescription();
      if (this.hasMajor()) {
        description += ` Their Major is ${this.major}.`;
      }
      return description;
    }
  }

  class Traveler extends Person {
    constructor(name, age, homeLocation) {
      super(name, location, age); 
      this.homeLocation = homeLocation; 
    }
    getGreetting() {
      let greeting = super.getGreetting(); 
      if (this.homeLocation) {
        greeting += `hope your journey wasn't to long from ${this.homeLocation}.`;
      }
      return greeting;
    }
  }


const me = new Traveler('Rossannew Clamp', 36, 'North Van'); 

const other = new Traveler();
console.log(other.getGreetting());
console.log(me.getGreetting());
