<template>
 <div class="container">
     <h1 class="pt-5 font-italic">HOODIES</h1>
     <div class="row mt-5 mb-5 pb-5 pt-5 ">



    <router-link to="Japanese Hoodie" class="col-sm text-dark btn">
      <div class="card border-0 mx-auto" style="width: 18rem;">
        <img src="./Japanese Hoodie/Japanese Hoodie.jpg" class="card-img-top ">
        <div class="card-body text-left">
          
          <p class="card-title mb-0 font-weight-bold" >Japanese Hoodie</p>
          <p class="card-text font-weight-bold text-black-50">59.00€</p>
         <div class="overlay"> </div>
        </div>
      </div>
    </router-link>
    


    <router-link to="Creature Hoodie" class="col-sm text-dark btn">
      <div class="card border-0 mx-auto" style="width: 18rem;">
        <img src="./Creature Hoodie/Creature Hoodie.jpg" class="card-img-top ">
        <div class="card-body text-left">
          
          <p class="card-title mb-0 font-weight-bold" >Creature Hoodie</p>
          <p class="card-text font-weight-bold text-black-50">59.00€</p>
         <div class="overlay"> </div>
        </div>
      </div>
    </router-link>
        


    <router-link to="Dressen Rose Hoodie" class="col-sm text-dark btn">
      <div class="card border-0 mx-auto" style="width: 18rem;">
        <img src="./Dressen Rose Hoodie/Dressen Rose Hoodie.jpg" class="card-img-top ">
        <div class="card-body text-left">
          
          <p class="card-title mb-0 font-weight-bold" >Dressen Rose Hoodie</p>
          <p class="card-text font-weight-bold text-black-50">59.00€</p>
         <div class="overlay"> </div>
        </div>
      </div>
    </router-link>
          


    <router-link to="Screaming Hand Hoodie" class="col-sm text-dark btn">
      <div class="card border-0 mx-auto" style="width: 18rem;">
        <img src="./Screaming Hand Hoodie/Screaming Hand Hoodie.jpg" class="card-img-top ">
        <div class="card-body text-left">
          
          <p class="card-title mb-0 font-weight-bold" >Screaming Hand Hoodie</p>
          <p class="card-text font-weight-bold text-black-50">59.00€</p>
         <div class="overlay"> </div>
        </div>
      </div>
    </router-link>
  



     </div> 
 </div>
</template>

<script>
export default {
  name: "Hoodies",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
