<template>
  <div class="card">
    <div class="card__header">Hello</div>
    <div class="item">Item</div>
  </div>
</template>

<script setup>
// script setup can contain top-level await in modern tooling
const value = await Promise.resolve('vue top-level await');
console.log(value);
</script>

<style scoped>
.card:has(.item) { border: 1px solid #ccc; }
.card { --accent: #f06; }
</style>
