<template>
<div class="container">
  <h1 class="pt-5 font-italic">BOTTOMS</h1>
  <div class="row mt-5 mb-5 pb-5 pt-5 ">
  


    <router-link to="Independent Joggers" class="col-sm text-dark btn">
      <div class="card border-0 mx-auto" style="width: 18rem;">
        <img src="./Independent Joggers/Independent Joggers.jpg" class="card-img-top ">
        <div class="card-body text-left">
          
          <p class="card-title mb-0 font-weight-bold" >Independent Joggers</p>
          <p class="card-text font-weight-bold text-black-50">58.00€</p>
         <div class="overlay"> </div>
        </div>
      </div>
    </router-link>
    


    <router-link to="Barbed Sweatpants" class="col-sm text-dark btn">
      <div class="card border-0 mx-auto" style="width: 18rem;">
        <img src="./Barbed Sweatpants/Barbed Sweatpants.jpg" class="card-img-top ">
        <div class="card-body text-left">
          
          <p class="card-title mb-0 font-weight-bold" >Barbed Sweatpants</p>
          <p class="card-text font-weight-bold text-black-50">58.00€</p>
         <div class="overlay"> </div>
        </div>
      </div>
    </router-link>
    
    


   




    
    


   




  </div>
</div>
</template>

<script>
export default {
  name: "Bottoms",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
