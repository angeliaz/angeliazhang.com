<template>
  <component :is="componentId" v-bind="componentProps">
    <el-menu-item :index="index" >
      <i :class="`el-icon-${menuIcon}`"></i>
      <span slot="title">{{route.name}}</span>
    </el-menu-item >
  </component>

</template>

<script>
import path from 'path'
import { isExternalLink } from '@/utils/validate';
export default {
  name: 'MenuLink',
  props: {
    route: {
      type: Object,
    },
    index: {
      type: String
    },
    routePath: {
      type: String
    },
    parentPath: {
      type: String
    }
  },
  data() {
    return {
      test: 1
    }
  },
  computed: {
    menuIcon() {
      return this.route.meta && this.route.meta.icon ? this.route.meta.icon : 'goblet-square-full';
    },
    componentId() {
      return isExternalLink(this.route.path) ? 'router-link' : 'a';
    },
    componentProps() {
      if (isExternalLink(this.routePath)) {
        return {
          is: 'a',
          target: '_blank',
          href: this.routePath
        }
      } else {
        return {
          is: 'router-link',
          to: this.routePath
        }
      }
    }
  },
  methods: {
    isExternalLink(path) {
      return isExternalLink(path);
    }
  }
}
</script>

<style lang="scss">

</style>
