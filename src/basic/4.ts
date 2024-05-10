function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  let sum = num1 + num2;
  return sum;
}

function customError(message: string): never {
  throw new Error(message);
}
