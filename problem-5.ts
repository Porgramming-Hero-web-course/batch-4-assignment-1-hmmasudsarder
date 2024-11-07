// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

interface Person {
  name: string;
  age: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K]{
return obj[key]
}

  const person: Person = { name: "masud", age: 18 };

// console.log(getProperty(person, "name")); 
// console.log(getProperty(person, "age")); 