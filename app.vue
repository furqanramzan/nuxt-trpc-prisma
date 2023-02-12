<script setup>
const { data: hello } = await useFetch("/api/hello");
</script>

<template>
  <div>
    <h1>{{ hello }}</h1>
  </div>
</template>
