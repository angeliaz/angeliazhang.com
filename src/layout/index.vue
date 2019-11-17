<template>
  <div class="wrapper">
    <sidebar class="sidebar-container" />
    <div class="content-wrapper">
      <navbar />
      <main-content />
      <p>aaa</p>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, MainContent } from './component'

export default {
  name: 'components',
  components: {
    Navbar,
    Sidebar,
    MainContent
  }
}
</script>

<style lang="scss">
.content-wrapper {
  margin-left: 200px;
}
</style>

