<template>
  <div class="about">
    <h1>This is Home page</h1>
  </div>
</template>

<script>
  import GetService from '../apis/getService'
  export default {
    name: 'Home',

    components: {
    },

    mounted(){
      let obj = GetService.getPerson();
      console.log(obj);
    }
  }
</script>
