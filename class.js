class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep(){
     console.log( `${this.name} is sleeping`)
  }
}

const imri = new Person("Imran", 29)
imri.sleep()
console.log(imri);

