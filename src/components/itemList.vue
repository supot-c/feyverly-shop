<template>
  <div>
    <div class="wpr">
      <!-- <h1>Shop items</h1> -->
      <div class="filters">
        <button id="btrw" :class="filter=='name'?'use':''" @click="filtered('name')">
          <div v-if="filter=='name'">{{ order=='asc'?'↑ ': '↓'}}</div>
          <div>Name</div>
        </button>
        
        <button id="btrw" :class="filter=='price'?'use':''" @click="filtered('price')">
          <div v-if="filter=='price'">{{ order=='asc'?'↑ ': '↓ '}}</div>
          <div>Price</div>
        </button>
        <select v-model="pagesize" >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
    </div>

    <pagination @select="selectpage" :pagecount='pagecount' :currentpage='currentpage'/>
    <transition-group name="itemlist" class="list" >
      <itemCard v-for="item in items" :key="item.id" :item="item" />
    </transition-group>
    <pagination @select="selectpage" :pagecount='pagecount' :currentpage='currentpage'/>
      
  </div>
</template>

<script>
import itemCard from './itemCard'
import pagination from './pagination'

export default {
  name: 'itemList',
  components: {
    itemCard,
    pagination
  },
  data: function (){
    return {
      items: null,
      total: this.$store.state.items.length,
      pagesize: 30,
      currentpage: 1,
      pagecount: Math.ceil(this.$store.state.items.length/30),
      filter: 'name',
      order: 'desc',
    }
  },
  methods: {
    filtered(target){
      if (this.filter == target){
       this.order = this.order=='desc'?'asc': 'desc'
      }else{
        this.filter = this.filter=='name'?'price':'name'
      }

      if( this.filter == 'name'){
        if (this.order == 'asc')
          this.items.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        else
          this.items.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))
      }else{
        if(this.order == 'asc')
          this.items.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
        else
          this.items.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))
      }
    },
    adjustpage(){
      this.items = this.$store.state.items.slice((this.currentpage - 1) * this.pagesize , (this.currentpage - 1) * this.pagesize + this.pagesize)
    },
    selectpage(page){
      this.currentpage = page
    }
  },
  watch: {
    pagesize: function(){
      this.currentpage = 1
      this.pagecount = Math.ceil(this.total/this.pagesize)
      this.pagesize = +this.pagesize
      this.adjustpage()
    },
    currentpage: function(){
      this.adjustpage()
    },
  },
  mounted: function(){
    this.adjustpage()
  }
}
</script>

<style scoped>
  @media (max-width: 490px) {
    .list {
      flex-direction: column;
    }
  }

  @media (min-width: 490px) {
    .list {
      flex-direction: row;
    }
  }

  .list {
    margin-top: 2em;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
  }

  select, button {
    /* width: 100%; */
    margin-left: .2em;
    padding: 8px 10px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .filters {
    display: flex;
    justify-content: flex-end;
  }
  
  #btrw {
    display: flex;
    flex-direction: row;
  }

  button {
    background-color: #fff;
  }

  .use {
    background-color: #9F00CF;
    color:#ffff;
  }

  .use div{
    margin: 0 .5em;
  }

  .itemlist{
    transition: all 1s;
  }


</style>