console.log("Testing our first TypeScript file.");

const name: string = "Sunday Oruwhone";

console.log(name.toUpperCase());

const numbers: number[] = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers);

const booleanArray: Array<boolean> = [true, false, true, false, true];
booleanArray.push(true);

console.log(booleanArray);

interface Person {
  name: string;
  age: number;
}
const user: Person = {
  name: "Sunday",
  age: 27,
};
console.log({ user });

interface MixedArray {
  0: number;
  1: string;
  2: boolean;
  length: 3;
  [index: number]: number | string | boolean | null;
}

const mixedArray: MixedArray = [1, "two", true];
console.log(mixedArray);

function printNameInCaps(name: string | boolean): void {
  if (typeof name === "string") {
    console.log(name.toUpperCase());
  } else {
    console.log("Name is not a string");
  }
}

console.log(printNameInCaps("Sunday"));
console.log(printNameInCaps(true));

type StringBooleanNumber = string | boolean | number;

function canbeSBN(name: StringBooleanNumber): void {
  console.log(name);
}

canbeSBN("Sunday");
canbeSBN(true);
canbeSBN(1);

const combineValues = (value: number): number => {
  const anotherValue: number = 10;

  return value + anotherValue;
};

console.log(combineValues(27));

const processValue = (input: unknown): string => {
  const inputType: unknown = typeof input;
  return `${input} is of type: ` + inputType;
};

console.log(processValue(1));
console.log(processValue(true));
console.log(processValue([""]));
console.log(processValue({}));
console.log(processValue(""));

interface CarDataShape {
  name: string;
  year: number;
}

const car: CarDataShape = { name: "Toyota", year: 2023 };
console.log(car);

interface VegetableShape {
  readonly name: string;
  readonly price?: number | string;
}

const vege: VegetableShape = {
  name: "Tomato",
  price: "3000",
};

console.log(vege);

function makeSentenceFromWords(...sentence: string[]): string {
  return sentence.join(" '");
}

console.log(
  makeSentenceFromWords(
    "TypeScript",
    "really",
    "is",
    "an",
    "awesome",
    "labguage."
  )
);

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

console.log(createEmployee({ id: 1 }));

interface User {
  name: string;
  age: number;
}

interface VerifiedUser extends User {
  address: string;
  isVerified: boolean;
}

const user1: User = {
  name: "Sunday",
  age: 30,
};

const user2: VerifiedUser = {
  name: "Sunday",
  age: 30,
  address: "Lagos, Nigeria.",
  isVerified: true,
};

console.log({ user1 });
console.log({ user2 });
