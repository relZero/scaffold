<template>
  <div id="tab">
    <ul>
      <li
        v-for="(item, index) in tabs"
        @click="toggle(index, item.view)"
        :class="{ active: active == index }"
        :key="index"
      >
        {{ item.type }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    tabItems: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      active: 0,
      tabs: this.tabItems
    }
  },
  methods: {
    toggle(index, val) {
      const activeData = {
        currentView: val
      }
      this.active = index
      this.$emit('clickToggle', activeData)
    }
  }
}
</script>

<style lang="scss" scoped>
#tab {
  font: {
    family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  ul {
    width: 200px;
    display: flex;
  }
  ul li {
    width: 100px;
    height: 40px;
    background: {
      color: #ccc;
    }
    display: inline-flex;
    border: {
      right: {
        color: #ddd;
        width: 1px;
        style: solid;
      }
    }
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  ul li.active {
    background: {
      color: #333;
    }
  }
}
</style>
