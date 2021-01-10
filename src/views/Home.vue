<template>
  <div class="home">
    <v-icon name="laptop-code" scale="10" />
    <h1>Curt Bryan Web Dev</h1>
    <h2>Creating Websites and Applications for Small Businesses</h2>
    <p class="tag-line">
      <span class="font-slightly-bigger"
        >From coffee shops to freelance photographers, restaurants to
        landscapers, one thing all businesses need is a stunning website. </span
      ><br />
      <br />With so much competition from big buisness and elsewhere, you need
      to set your business apart from the pack by ditching the cookie cutter
      GoDaddy or Wix website, and let me create a customized, high quailty web
      experience for your customers and clients.
    </p>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
  width: 100%;
  flex-direction: column;
  background-color: #39393ad5;
  color: $primary;
  text-align: center;
  font-family: $font-secondary;
  h1 {
    font-size: 4rem;
    font-weight: $font-weight-heavy;
  }
  h2 {
    font-size: $font-size-large;
  }
  .tag-line {
    margin-top: 25px;
    color: $font-light;
    font-size: $font-size-medium;
    font-family: $font-main;
    max-width: 1500px;
    .font-slightly-bigger {
      font-size: $font-size-large;
    }
  }
}
</style>
