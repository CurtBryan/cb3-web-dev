<template>
  <div class="nav">
    <div class="logo">
      <v-icon name="laptop-code" scale="2.5" />
      <h3>Curt Bryan Web Dev</h3>
    </div>
    <nav>
      <router-link
        to="/"
        class="router-link"
        :class="{ 'router-link-current': currentPage === 'Home' }"
        >Home</router-link
      >
      <router-link
        to="/projects"
        class="router-link"
        :class="{ 'router-link-current': currentPage === 'Projects' }"
        >Projects</router-link
      >
      <router-link
        to="/contact"
        class="router-link"
        :class="{ 'router-link-current': currentPage === 'Contact' }"
        >Contact</router-link
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    currentPage() {
      return this.$route.name;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";
.nav {
  height: 100%;
  background: $dark-gray;
  color: #d6d0c7;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  nav {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .router-link {
    color: #d6d0c7;
    text-decoration: none;
    margin-left: 20px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .router-link-current {
    color: $primary;
    height: 100%;
    text-decoration: none;
    border-bottom: 5px solid $primary;
    display: flex;
    align-items: center;
  }
}

.logo {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $primary;
  .icon {
    font-size: 50px;
  }
  h3 {
    margin-left: 5px;
    font-size: $font-size-large;
    color: #efefef;
  }
}
</style>
