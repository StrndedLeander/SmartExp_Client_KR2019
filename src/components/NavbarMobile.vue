<template>
  <div>
    <nav class="navbar is-white is-hidden-desktop is-hidden-tablet">
      <div class="container">
        <div class="navbar-brand">
          <div class="navbar-burger burger" @click="toggleMenu" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" class="navbar-menu" :class="{'is-active': showMobileMenu}">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item" href="admin.html">Home</router-link>
            <router-link to="/" class="navbar-item" href="admin.html">Orders</router-link>
            <router-link to="/" class="navbar-item" href="admin.html">Payments</router-link>
            <router-link to="/" class="navbar-item" href="admin.html">Exceptions</router-link>
            <router-link to="/" class="navbar-item" href="admin.html">Reports</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>