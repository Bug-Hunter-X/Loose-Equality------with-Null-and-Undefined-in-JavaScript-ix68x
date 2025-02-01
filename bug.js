function foo(a, b) {
  if (a == null || b == null) {
    return 0; // Handle null or undefined inputs
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(10, null)); // Output: 0
console.log(foo(undefined, 5)); // Output: 0
console.log(foo(10, undefined)); // Output: 0
console.log(foo(10, 5)); // Output: 15