<template>
  <div class="hello">
    <main class="mt-5 pt-4">
    <div class="container dark-grey-text mt-5">

      <div class="row">

        <div class="col-mx-auto mb-4">

          <img src="./Independent Joggers.jpg" class="img-fluid" alt="">

        </div>

        <div class="col mb-5">
          <div class="col h-100 mt-5 pt-5">
          
            <p class="lead font-weight-bold text-left">Independent Joggers</p>
            <p class="font-weight-bold text-muted text-left">58.00€</p>

            <p class="text-left mb-1"><small>SIZE</small></p>
            <form class="d-flex mr-5">
              <!-- Default input -->
              <select class="form-control form-control-m">
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
              <button class="btn w-50 btn-danger font-weight-bold rounded-sm">ADD TO CART
              </button>

            </form>
          </div>
        </div>
        </div>
        <router-link to="bottoms" class="btn btn-light border border-danger font-weight-bold text-danger mb-5 rounded-sm">⭠ BACK TO BOTTOMS
        
        </router-link>
    </div>
        </main>

  </div>
</template>

<script>
export default {
  name: "Independent Joggers",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
