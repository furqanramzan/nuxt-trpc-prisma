<script lang="ts" setup>
const { $trpc } = useNuxtApp();

const { data: items, refresh } = await $trpc.user.list.useQuery();
const defaultData = {
  name: "",
  email: "",
};
let data = reactive({ ...defaultData });

async function create() {
  await $trpc.user.create.mutate(data);
  data = { ...defaultData };
  refresh();
}
</script>

<template>
  <div>
    <p v-for="{ id, name } of items" :key="id">{{ name }}</p>
    <form @submit.prevent="create">
      <input v-model="data.name" type="text" />
      <input v-model="data.email" type="text" />
      <button type="submit">Save</button>
    </form>
  </div>
</template>
