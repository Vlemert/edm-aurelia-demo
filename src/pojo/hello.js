export class Hello {
  constructor() {
    this.firstName = "John";
    this.lastName = "Doe";
  }
  
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}