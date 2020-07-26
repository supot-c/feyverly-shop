<template>
  <div class="contentContainer">
    <div class="frame">
      <h2 class="logo">
        SHOP
      </h2>
    </div>
  </div>
</template>

<style scoped>
  .contentContainer {
    display: flex;
    justify-content: center;
    background-color: rgb(247, 238, 255);
    box-shadow: 0em .1em .5em rgba(49, 27, 40, 0.178);
  }

  .frame {
    width: 100%;
    max-width: 1280px;
    display: flex;
    justify-content: flex-start;
    padding: 1em .5em;
  }

  .logo {
    font-family: 'Courier New', Courier, monospace;
    font-size: 2em;
  }
</style>

<script>
export default {
  name: 'navBar'
}
</script>