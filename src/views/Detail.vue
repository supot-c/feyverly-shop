<template>
  <div class="detail">
    <router-link to="/" style="text-decoration:none;"> < Home</router-link>
    
    <div class="wpr">
      <div class="content">
        <div class="preview">
          <img :src="item.image" alt="">
        </div>
        <div class="control">
          <h2> {{ item.brand }} </h2>
          <h1 class="name">{{ item.name }}</h1>

          <b><h1 class="price"> ฿ {{item.price}} </h1></b>
          
          <div class="content">
            <input class="quantity" type="number" v-model="quantity">
            <input class="add" type="submit" value="Add to basket">
          </div>
        </div>
      </div>
      <hr>
      <h4>Product detail</h4>
      <div class="desc">
        {{ item.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      item: null,
      quantity: 1,
    }
  },
  beforeMount(){
    const current = this.$store.state.currentitem
    if (current == null)
      this.$router.push({name: 'Home'})
    else
      [this.item] = this.$store.state.items.filter(it => it.id == current)
  }
}
</script>

<style scoped>

  @media (min-width: 900px) {
    .wpr {
      padding: 0 5em;
    }

    .control {
      padding: 5em;
    }

    .add {
      margin-left: 1em;
    }

    .quantity {
      /* max-width: 0; */
      width: 5em;
    }

    .price {
      margin: .5em 0 .3em 0;
    }
  }

  @media (max-width: 899px) {
    .preview{
      display: flex;
      justify-content: center;
      margin-bottom: 2em;
    }

    .content {
      flex-direction: column;
    }
    .wpr {
      padding: 0 0em;
    }

    .control {
      padding: 1em;
    }

    .preview img{
      max-width: 60vw;
    }

    .add {
      margin-top: 1em;
    }

    .price {
      margin: .5em 0 .3em 0;
      
    }
  }

  .detail {
    width: 100%;
  }

  .wpr {
    margin-top: 1em;
    /* width: 100%; */
  }

  .preview, .control{
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 50%;
  }

  .content {
    display: flex;
    margin-bottom: 3em;
  }

  .control > h2 {
    text-transform: uppercase;
    font-size: 1em;
  }

  .name {
    text-transform: capitalize;
  }

  .price {
    font-size: 3em;
    color: royalblue;
  }

  .quantity, .add{
    padding: 12px 10px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .add {
    width: 100%;
    color: white;
    font-size: 1.5em;
    background-color: rgb(140, 58, 165);
  }

  .desc {
    color: rgb(114, 98, 114);
    margin-bottom: 2em;
  }
</style>