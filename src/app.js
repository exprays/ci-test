// Modern CSS features
const style = document.createElement("style");
style.textContent = `
  .container {
    container-type: inline-size; /* Baseline 2023 - Container Queries */
  }
  
  .card:has(> img) {  /* Baseline 2023 - :has() selector */
    border: 2px solid blue;
  }
`;
document.head.appendChild(style);

// Modern JavaScript features
const numbers = [1, 2, 3, 4, 5];
const lastEven = numbers.findLast((n) => n % 2 === 0); // Baseline 2023
console.log("Last even number:", lastEven);

// Array grouping
const items = [
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "banana" },
];

const grouped = Object.groupBy(items, (item) => item.type); // Baseline 2024
console.log("Grouped items:", grouped);
