class Person {
  name

  constructor (name) {
    this.name = name
  }

  sayHello () {
    console.log(`Hello, my name is ${this.name}`)
  }
}

class Student extends Person {
  #grade

  constructor (name, grade) {
    super(name)
    this.#grade = grade
  }

  sayHello () {
    super.sayHello()
    console.log(`I am in grade ${this.#grade}`)
  }
}
