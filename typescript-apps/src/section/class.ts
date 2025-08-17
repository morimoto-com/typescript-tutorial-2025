export class Person {
  name: string
  constructor(initName: string) {
    this.name = initName
  }

  greeting(){
    console.log(`Hello! My name is ${this.name}`)
  }
}
