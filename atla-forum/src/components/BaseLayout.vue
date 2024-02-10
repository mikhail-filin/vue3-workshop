<script>
export default {};
</script>

<template>
  <header class="header">
    <slot name="header" />
  </header>
  <aside class="aside">
    <slot name="aside" />
  </aside>
  <main class="main">
    <slot name="main" />
  </main>
  <footer class="footer">
    <slot name="footer" />
  </footer>
</template>

<style scoped>
.header {
  border: 2px solid red;
}
.aside {
  border: 2px solid blue;
}
.main {
  border: 2px solid green;
}
.footer {
  border: 2px solid black;
}
</style>
