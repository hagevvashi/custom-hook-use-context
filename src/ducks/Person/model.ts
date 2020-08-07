export class Person {
  public readonly id: number;

  public readonly name: string;

  public readonly age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}
