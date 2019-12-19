<template>
  <div class="nav">
    <ul>
      <li v-for="item in navData" :key="item.navName">
        <router-link class="nav-link" :to="item.navPath">
          <slot :items="item"></slot>
          <span>{{ item.navName }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    navData: Array,
    default: function() {
      return []
    }
  },
  data() {
    return {
      navItems: this.navData
    }
  }
}
</script>
