<template>
  <div class="card" @click="select">
    <div class="imgholder">
      <img :src="item.image" alt="">
    </div>
    <h2>{{item.name}}</h2>
    <h4>฿{{item.price}}</h4>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'itemCard',
  props: [
    "item"
  ],
  data: function(){
    return {
    }
  },
  methods:{
    select(){
      this.$store.dispatch('select', this.item)
      this.$router.push({name: 'Detail'})
    }
  }
}
</script>

<style scoped>
  @media (max-width: 480px) {
    .card {
      max-width: 100%;
      margin: 1.5em 1em;

    }
  }

  @media (min-width: 480px) {
    .card {
      max-width: 10em;
      margin: .5em 1em;

    }
  }

  .card {
    position: relative;
    padding: 1em;
    border: 2px solid #ffff;
    background-color: #ffff;
    /* box-shadow: .2em .2em 1em blue; */
    border-radius: .3em;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: center;
    transition: all .7s;
  }

  .card:hover {
    cursor: pointer;
    box-shadow: 0px 5px 10px rgba(66, 31, 66, 0.151);
    transform: scale(1.05);
  }

  .card::after {
    content: 'click for more detail';
    position: absolute;
    top: .5em;
    width: 10em;
    text-align: center;
    background-color: rgba(221, 221, 221, 0.267);
    border-radius: .2em;

    opacity: 0;
    transition: opacity .5s;
    transition-delay: 0s;
  }

  .card:hover::after {
    opacity: 100;
    transition-delay: .25s;
  }

  .imgholder {
    /* padding: .5em; */
    width: 100%;
  }
  img {
    width: 100%;
  }
</style>

