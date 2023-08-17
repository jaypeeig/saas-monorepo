<template>
  <div>
    <UiButton :onClick="log" >Click me!!</UiButton>
    <NuxtWelcome />
  </div>
</template>

<script setup>
const log = () => {
  alert('hey!');
}
</script>