class Person {
  constructor(name, location = 'New York', age = 18) {
    this.name = name; 
    this.location = location;
    this.age = age; 
  }
  getGreetting(){
    return `Hi ${this.name} it's so nice to see you! I hope it's not to dreary in ${this.location}. It's not a nice place to spend your ${this.age + 1} Birthday`; 
  }

}
const me = new Person('Rossanne Clamp', 'Vancouver', 35); 
console.log(me.getGreetting());

const other = new Person('Kiko'); 
console.log(other.getGreetting());