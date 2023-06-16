<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="postcss">
html,
body {
  @apply h-full;
}

@media (max-width: 1024px) {
  html,
  body {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}

.main-screen {
  min-height: calc(100vh - 200px);
}
</style>
