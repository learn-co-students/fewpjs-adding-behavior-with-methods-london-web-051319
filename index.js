class Animal {
  constructor(name, sex, saying) {
    this.name = name,
    this.sex = sex,
    this._saying = saying
  }

  speak() {
    return `${this.name} says ${this._saying}!`;
  }
}

class Cat extends Animal {
  constructor(name, sex) {
    super(name, sex, 'meow')
  }
}

class Dog extends Animal {
  constructor(name, sex) {
    super(name, sex, 'woof')
  }
}

class Bird extends Animal {
  constructor(name, sex) {
    super(name, sex, 'squawk')
  }

  speak() {
    if(this.sex === "male") {
      return `It's me! ${this.name}, the parrot!`
    } else{
      return super.speak()
    }
  }

}