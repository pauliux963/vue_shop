<template>
  <div class="container">
    <p class="text-muted ">
      © 2019, <router-link to="/" class="text-reset text-decoration-none">Skate Hut</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
