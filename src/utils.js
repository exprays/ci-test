// More Baseline 2023+ features
export class DataManager {
  #privateField = []; // Private class fields (Baseline 2022)

  constructor() {
    this.#privateField = [];
  }

  // Array methods
  findLastItem(predicate) {
    return this.#privateField.findLast(predicate); // Baseline 2023
  }

  findLastIndex(predicate) {
    return this.#privateField.findLastIndex(predicate); // Baseline 2023
  }

  // Promise improvements
  async loadData(urls) {
    // Promise.allSettled (Baseline 2022)
    const results = await Promise.allSettled(urls.map((url) => fetch(url)));
    return results;
  }
}

// String methods
const text = "  Hello World  ";
console.log(text.trimStart()); // Baseline 2022
console.log(text.trimEnd()); // Baseline 2022

// Object methods
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.fromEntries(Object.entries(obj))); // Baseline 2022
