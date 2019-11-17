<template>
  <div id="app" class="wrapper test">
    <h2>test</h2>
    <div>
      <transition>
        <router-view/>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    document.addEventListener('DOMContentLoaded', e => {
      // console.log(123, window.test123)
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
