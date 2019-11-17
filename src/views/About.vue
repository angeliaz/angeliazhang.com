<template>
  <div class="about">
    <p>about</p>
    <input type="text" v-model="message">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      message: ''
    }
  }
}
</script>
