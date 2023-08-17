<template>
  <button 
    class="btn" 
    :disabled="disabled"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  disabled?: boolean;
  onClick?: () => void;
}>();
</script>

<style scoped>
button {
  cursor: pointer;
  padding: 1rem;
  border: none;
  background-color: blueviolet;
  color: aliceblue;
  font-family: sans-serif;
}
</style>
