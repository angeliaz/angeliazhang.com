<template>
  <div class="content">
    <router-view :key="path" />
  </div>  
</template>

<script>
export default {
  name: 'Content',
  computed: {
    path() {
      console.log(12, this.$route.path)
      return this.$route.path
    }
  }
}
</script>
