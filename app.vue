<script setup>
import { useDataStore } from '~/store'
const dataStore = useDataStore()

const { data } = await useFetch("/api/test")
</script>

<template>
  <div>This is test APP</div>
  <div>data:{{ dataStore }}</div>
  <div>data:{{ data }}</div>
</template>
