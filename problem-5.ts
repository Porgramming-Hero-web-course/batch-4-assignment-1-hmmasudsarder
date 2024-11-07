// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.


function getProperty<T, K extends keyof T>(obj: T, key: K): T[K]{
return obj[key]
}

interface Person {
    name: string;
    age: number;
  }

  const person: Person = { name: "John", age: 30 };

// console.log(getProperty(person, "name")); // Output: John
// console.log(getProperty(person, "age")); 