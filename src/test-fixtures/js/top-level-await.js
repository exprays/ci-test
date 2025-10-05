// top-level-await example
// This file intentionally uses await at top level to trigger top-level-await detection
const greeting = await Promise.resolve('hello from top-level await');
console.log(greeting);
