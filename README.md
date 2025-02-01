# Loose Equality with Null and Undefined in JavaScript

This repository demonstrates a common pitfall in JavaScript: using loose equality (`==`) when comparing variables to `null` or `undefined`.  While it may appear to work in some cases, it can lead to unexpected behavior and bugs, especially in scenarios involving type coercion.

The `bug.js` file shows a function that uses loose equality to handle `null` or `undefined` input, and it doesn't handle these values as intended.

The `bugSolution.js` file provides a corrected version, using strict equality (`===`) to avoid type coercion and ensure more reliable handling of null and undefined values.