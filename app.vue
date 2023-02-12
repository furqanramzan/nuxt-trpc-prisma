<script setup>
let hello = ref("");
onMounted(async () => {
  hello.value = await $fetch("/api/hello");
});
</script>

<template>
  <div>
    <h1 v-if="hello">{{ hello }}</h1>
    <h1 v-else>Loading</h1>
  </div>
</template>
