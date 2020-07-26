<template>
  <div class="pag">
    <button v-for="page in pagecount" :key="page" @click="page==currentpage?'':$emit('select', page)" :class="page==currentpage?'current':'page'">
      {{page}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: [
    'pagecount',
    'currentpage'
  ]
}
</script>

<style>
  .pag {
    margin: 1em 0;
    display: flex;
    justify-content: flex-end;
  }
  .current {
    background-color: rgb(159, 0, 207);
    color: #fff;
    border: 1px solid rgb(211, 211, 211);
  }
  
  .page {
    background-color: rgb(255, 255, 255);
    color: rgb(31, 31, 31);
    border: 1px solid rgba(0, 0, 0, 0.075);
  }

  .page, .current{
    padding: 5px 10px;
    display: inline-block;
    border-radius: 4px;
    box-sizing: border-box;
    margin: 0 2px;
  }

</style>