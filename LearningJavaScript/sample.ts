const accountBalance: number = 45555;

const firstName: string = "Sunday";
const lastName: string = "Oruwhone";
const age: number = 30;
const height: number = 176.3;
const hairstyle: string = "Dreadlocks";

interface Name {
  first: string;
  other: string;
  last: string;
}

interface User {
  name: Name;
  age: number;
  height: number;
  hairstyle: string;

  isActive: boolean;
}
