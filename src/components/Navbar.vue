<template>
<nav class="navbar navbar-light navbar-expand-md bg-light mr-auto justify-content-between border-bottom">
    <div class="ml-auto container-fluid">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-nav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse ml-auto dual-nav ml-auto w-50 order-1 order-mt-0">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link">NEW <span class="sr-only">NEW</span></router-link>
                </li>
                <li class="nav-item dropdown active">
                    <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true">
                        TOPS</a>
                    <div class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                        <router-link to="Tshirts" class="dropdown-item">T-Shirts</router-link>
                        <router-link to="Hoodies" class="dropdown-item">Hoodies</router-link>
                        <router-link to="Sweatshirts" class="dropdown-item" >Sweatshirts</router-link>
                        <router-link to="/all-tops" class="dropdown-item" >All Tops</router-link>
                    </div>
                </li>
                <li class="nav-item active">
                    <router-link to="/bottoms" class="nav-link">BOTTOMS</router-link>
                </li>
                <li class="nav-item active">
                    <router-link to="/accessories" class="nav-link">ACCESSORIES</router-link>
                </li>
                <li class="nav-item active">
                    <router-link to="/all" class="nav-link">ALL</router-link>
                </li>
            </ul>
        </div>
        <router-link to="/" class="navbar-brand mx-auto order-0 order-md-1 w-25 mb-n3 mt-n3">
            <img src="../assets/logo.png" height="70" alt="Aciu Giedriui">
        </router-link>
        <div class="navbar-collapse collapse dual-nav w-50 order-2 ml-auto ">
            <ul class="nav navbar-nav ml-auto">
                <li class="nav-item"><router-link to="/cart" class="nav-link"><img src="https://img.icons8.com/material/24/000000/shopping-basket.png"></router-link></li>
            
            </ul>
        </div>
    </div>
</nav>


</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar-toggler {
  position: absolute;
  top: 20%;
  left: 16px;
}
</style>
