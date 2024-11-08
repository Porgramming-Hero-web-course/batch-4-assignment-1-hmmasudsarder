TypeScript is a language that builds on JavaScript by adding types, which are descriptions of what kinds of data your variables hold. For example, you can say a variable is a string or a number. This makes your code safer because TypeScript will warn you if you try to use a variable in the wrong way.

However, TypeScript only checks these types when you write the code. Once the code runs in JavaScript, those types disappear, so type guards help you check what type a variable is when the code is actually running. This ensures that your program works as expected and avoids errors.

For example, if you have a variable that could be a string or a number, you might want to check what type it is before doing something with it. Type guards help you do exactly that.

==> typeof Type Guard
there are a few main ways to use type guards in TypeScript:
The typeof operator is a built-in way to check if a variable is a specific basic type, like a string, number, or boolean. This is helpful when working with these simpler types.

function printLength(value: string | number): void {
  if (typeof value === "string") {
    console.log("String length:", value.length);
  } else {
    console.log("Number does not have a length.");
  }
}


==> instanceof Type Guard
The instanceof operator checks if an object is an instance of a particular class. This is useful when working with objects created from classes, such as custom types you create.

class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else if (animal instanceof Cat) {
    animal.meow();
  }
}

==>  Custom Type Guards
Sometimes, you need to check a type in a more complex way. For that, you can create a custom type guard. This is a function you write to check if an object is of a specific type.

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}


Summary
Type guards are like checks to confirm the type of a variable when the code runs. They help ensure you’re working with the correct type and avoid errors. Here’s a recap of each type guard:

typeof: Check basic types like string, number, etc.
instanceof: Check if an object is an instance of a class.
Custom Type Guards: Write custom checks for complex cases.
in Operator: Check if an object has a specific property.
