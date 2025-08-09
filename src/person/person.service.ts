import { Injectable } from '@nestjs/common';

export interface Person {
  id: number;
  name: string;
  age: number;
}

@Injectable()
export class PersonService {
  private persons: Person[] = [
    { id: 1, name: 'Juan', age: 30 },
    { id: 2, name: 'Ana', age: 25 },
    { id: 3, name: 'Luis', age: 40 },
  ];

  findAll(): Person[] {
    return this.persons;
  }

  create(person: Omit<Person, 'id'>): { ok: boolean } {
    const newPerson: Person = {
      id: this.persons.length + 1,
      ...person,
    };
    this.persons.push(newPerson);
    return { ok: true };
  }
}
