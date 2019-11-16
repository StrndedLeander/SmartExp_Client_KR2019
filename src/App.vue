<template>
  <div class="hero" id="app">
    <NavbarMobile></NavbarMobile>
    <div class="hero-body columns">
      <div class="column is-hidden-mobile is-2">
        <aside class="menu">
          <p class="menu-label">General</p>
          <ul class="menu-list">
            <li>
              <router-link to="/">Dashboard</router-link>
            </li>
            <li>
              <router-link to="/devices">Meine Geräte</router-link>
            </li>
            <li>
              <a>Support Anfragen</a>
            </li>
            <li>
              <a>Updates</a>
            </li>
            <li>
              <a>Zusätze</a>
            </li>
          </ul>
        </aside>
      </div>
      <div class="column is-10">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarMobile from "./components/NavbarMobile.vue";
export default {
  components:{
    NavbarMobile
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
