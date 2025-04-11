// For loops
let i = 10;

let name = "Seyi";

for (i = 0; i < name.length; i += 1) {
  //   console.log(i + 1);
}

// i = 10 --> initialization/start point
// i > 0 --> range/breaker
//  i = i - 1 --> update: i = i + 2     i++    i += 1

//  While Loop
let j = 1;
while (j < 10) {
  //   console.log(j);
  j++;
}

// Do...While Loop -- runs at least once even if the condition is false
let k = 1;
do {
  //   console.log(k);
  k++;
} while (k < 21);

let num = 1;
do {
  if (num % 2 === 1) {
    // console.log(num);
  }
  num++;
} while (num <= 20);

let num2 = 1;
do {
  if (num2 % 2 === 1) {
    console.log("From copied code: " + num2);
  }
  num2++;
} while (num2 <= 20);

do {
  if (num % 2 === 1) {
    console.log(num);
  }
  num++;
} while (num <= 20);

//   let num = 1;
while (num <= 20) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

do {
  if (num % 2 === 1) {
    console.log(num);
  }
  num++;
} while (num <= 20);
