const user =  {
  name: 'ross', 
  cities: ['vancouver', 'montreal', 'lax'], 
  printPlacesLived() {
    const cityMessages = this.cities.map((city) => {
      return this.name + ' has lived in ' + city;
    });
    return cityMessages
  }
};

console.log(user.printPlacesLived());

const multiplier = {
   numbers: [1, 2, 3, 4 ],
   multiplieBy: 6,
   multiply() {
      const multiplyThis = this.numbers.map(num => num * this.multiplieBy
     )
     return multiplyThis;
   }
}
console.log(multiplier.multiply())