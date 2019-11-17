<template>
  <div class="menu-item-wrap" v-if="!route.hidden">
    <el-submenu :index="getRoutePath(basePath, '')" class="router-link-active" v-if="shownMenuItem.length > 1">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>{{route.name}}</span>
      </template>
      <menu-item v-for="(child, childIdx) in shownMenuItem" 
        :key="child.name"
        :route="child"
        :index="index + '-' + childIdx"
        :base-path="getBasePath(basePath, child.path)">
      </menu-item>
    </el-submenu>
    <menu-link v-else
      :route="shownMenuItem[0]"
      :index="getRoutePath(basePath, '')"
      :route-path="getRoutePath(basePath, '')"
    />
  </div>
</template>

<script>
import path from 'path'
import { isExternalLink } from '@/utils/validate';
import MenuLink from './MenuLink.vue'
export default {
  name: 'MenuItem',
  components: {
    MenuLink
  },
  props: {
    route: {
      type: Object,
    },
    index: {
      type: String
    },
    basePath: {
      type: String
    }
  },
  data() {
    return {
      test: 1,
      shownMenuItem: []
    }
  },
  computed: {
    
  },
  created() {
    this.getShownMenuItem();
  },
  methods: {
    isExternalLink(path) {
      return isExternalLink(path);
    },
    getBasePath(basePath, routePath) {
      if (isExternalLink(routePath)) {
        return routePath
      }
      return path.resolve(basePath, routePath)
    },
    getRoutePath(basePath, routePath) {
      if (isExternalLink(basePath)) {
        return basePath
      } else if (this.route.children && this.route.children.length === 1) {
        console.log(69, basePath, this.route.children[0])
        return path.resolve(basePath, this.route.children[0].path);
      } else {
        return basePath
        // return path.resolve(basePath, routePath);
      }
    },
    /**
     * 1 child => index
     * link => externalLink
     */
    getShownMenuItem() {
      const children = this.route.children || [];
      if (children.length === 0) {
        this.shownMenuItem = [this.route];
      } else if (children.length === 1) {
        this.shownMenuItem = children;
      } else {
        this.shownMenuItem = children;
      }
    }
  }
}
</script>

<style lang="scss">

</style>
