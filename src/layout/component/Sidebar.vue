<template>
  <div class="sidebar">
    <a href="/" class="go-index">
      <img src="@/assets/avatar.jpg">
      <p>Angelia</p>
    </a>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        class="el-menu-vertical-item"
        :default-active="activeMenu"
        :collapse="collapse"
        :background-color="bgColor"
        :text-color="textColor"
        :active-text-color="activeTextColor"
        :unique-opened="false"
        :collapse-transition="true"
        mode="vertical"
        >
        <div class="menu-list">
          <menu-item :route="route" :index="index + ''" v-for="(route, index) in routes" :key="route.path" :base-path="route.path" />
        </div>
      </el-menu>
    </el-scrollbar>
  </div>  
</template>

<script>
import { constantRoutes } from '@/router';
import MenuItem from './MenuItem.vue';
export default {
  name: 'Sidebar',
  components: {
    MenuItem
  },
  data() {
    return {
      collapse: false,
      bgColor: '#000000',
      textColor: '#ffffff',
      activeTextColor: '#0af',
      routes: constantRoutes
    }
  },
  computed: {
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  }
}
</script>

<style lang="scss">
.sidebar {
  width: 200px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: #000;
  overflow: hidden;
  .go-index {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 25px 0;
    border-bottom: 1px solid #333;
    color: #fff;
    font-size: 16px;
    box-sizing: border-box;
    text-align: center;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    p {
      color: #fff;
      margin: 10px 0 0;
      font-size: 16px;
    }
    span {
      margin-left: 5px;
    }
  }
}
</style>

