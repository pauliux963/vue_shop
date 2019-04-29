<template>
 <div class="container">
   <h1 class="pt-5 font-italic">ACCESSORIES</h1>
  <div class="row mt-5 mb-5 pb-5 pt-5 ">
    
      <router-link to="Japanese Cap" class="col-sm text-dark btn">
        <div class="card border-0 mx-auto" style="width: 18rem;">
          <img src="./Japanese Cap/Japanese Cap.jpg" class="card-img-top ">
          <div class="card-body text-left">
            
            <p class="card-title mb-0 font-weight-bold" >Japanese Cap</p>
            <p class="card-text font-weight-bold text-black-50">23.00€</p>
          <div class="overlay"> </div>
          </div>
        </div>
      </router-link>
      



      <router-link to="Rose Beanie" class="col-sm text-dark btn">
        <div class="card border-0 mx-auto" style="width: 18rem;">
          <img src="./Rose Beanie/Rose Beanie.jpg" class="card-img-top ">
          <div class="card-body text-left">
            
            <p class="card-title mb-0 font-weight-bold" >Rose Beanie</p>
            <p class="card-text font-weight-bold text-black-50">19.00€</p>
          <div class="overlay"> </div>
          </div>
        </div>
      </router-link>
        



      <router-link to="Web Socks" class="col-sm text-dark btn">
        <div class="card border-0 mx-auto" style="width: 18rem;">
          <img src="./Web Socks/Web Socks.jpg" class="card-img-top ">
          <div class="card-body text-left">
            
            <p class="card-title mb-0 font-weight-bold" >Web Socks</p>
            <p class="card-text font-weight-bold text-black-50">8.00€</p>
          <div class="overlay"> </div>
          </div>
        </div>
      </router-link>


    

    </div>
  </div>
</template>

<script>
export default {
  name: "Accessories",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
