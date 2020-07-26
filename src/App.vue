<template>
  <div id="app">
    <navBar/>
    <div class="contentcontainer">
      <div class="contentframe">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from './components/navBar'

export default {
  components:{
    navBar
  }
}
</script>

<style>
  * {
    margin: 0%;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  #app {
    background-color: white;
  }
  
  @media (max-width: 490px) {
    .contentframe{
      padding: 1em;

    }
  }


  @media (min-width: 490px) {
    *{
      /* background-color: red; */
    }
  }

  .contentcontainer {
    margin-top: 2em;
    display: flex;
    justify-content: center;
  }

  .contentframe {
    width: 100%;
    max-width: 1280px;
    display: flex;
    justify-content: flex-start;

  }
</style>
