<template>
 <div class="container">
     <h1 class="pt-5 font-italic">SWEATSHIRTS</h1>
     <div class="row mt-5 mb-5 pb-5 pt-5 ">



            


    <router-link to="Japanese Sweatshirt" class="col-sm text-dark btn">
      <div class="card border-0 mx-auto" style="width: 18rem;">
        <img src="./Japanese Sweatshirt/Japanese Sweatshirt.jpg" class="card-img-top ">
        <div class="card-body text-left">
          
          <p class="card-title mb-0 font-weight-bold" >Japanese Sweatshirt</p>
          <p class="card-text font-weight-bold text-black-50">26.00€</p>
         <div class="overlay"> </div>
        </div>
      </div>
    </router-link>
  
    






     </div> 
 </div>
</template>

<script>
export default {
  name: "Sweatshirts",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
