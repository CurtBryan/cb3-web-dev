<template>
  <div id="app">
    <div class="navbar-app">
      <NavBar />
    </div>
    <div class="body-app">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar/NavBar";
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import "./scss/variables";
html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

body {
  background-color: $gray;
}
#app {
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  .navbar-app {
    height: 60px;
  }
  .body-app {
    min-height: calc(100vh - 60px);
    background-image: url("./assets/home-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;

  }
}
</style>
