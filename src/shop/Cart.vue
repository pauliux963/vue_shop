<template>
<div>
   <main class="container-fluid mt-5 mb-5 pt-5">
  
    <div class="container-fluid pt-5 pb-5 ">
      <h2 class="text-center mx-auto">Your cart</h2>
      <p class="text-muted font-weight-light text-center mx-auto">Your cart is currently empty.</p>

      <router-link to="/" class="btn btn-danger rounded-sm font-weight-bold mr-n1">Continue shopping ➝</router-link>
    </div>
  






    </main>
 </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
