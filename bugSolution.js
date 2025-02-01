function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null or undefined inputs using strict equality
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(10, null)); // Output: 0
console.log(foo(undefined, 5)); // Output: 0
console.log(foo(10, undefined)); // Output: 0
console.log(foo(10, 5)); // Output: 15
console.log(foo(0,5)); //Output: 5
console.log(foo(5,0)); //Output: 5