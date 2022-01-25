class Person {
  constructor(name, location = 'New York', age = 18) {
    this.name = name; 
    this.location = location;
    this.age = age; 
  }
  getGreetting(){
    return `Hi ${this.name} it's so nice to see you!`; 
  }
  getDescription(){
    return `I hope it's not to dreary in ${this.location}. It's not a nice place to spend your ${this.age + 1} Birthday`;
  }

}

  class Student extends Person {
    constructor(name, location, age, major) {
      super(name, location, age);
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

const me = new Student('Rossanne Clamp', 'Vancouver', 35, 'Visual Arts'); 


console.log(me.getDescription());