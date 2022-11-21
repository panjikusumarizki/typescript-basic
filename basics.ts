function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 10.2;

let number2: number;
number2 = 5.8;

let printResult: boolean;
printResult = true;

let resultPhrase: string;
resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
