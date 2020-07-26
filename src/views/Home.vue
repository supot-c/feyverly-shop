<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <itemList />
  </div>
</template>

<script>
// @ is an alias to /src
import itemList from '@/components/itemList'

export default {
  name: 'Home',
  components: {
    itemList
  }
}
</script>
