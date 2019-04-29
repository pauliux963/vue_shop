import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/cart",
      name: "cart",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./shop/Cart.vue")
    },
    {
    path: "/productsnew",
      name: "productsnew",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./shop/Productsnew.vue")
    },
    {
      path: "/bottoms",
        name: "Bottoms",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "./products/Bottoms/Bottoms.vue")
    },
    {
      path: "/accessories",
         name: "Accessories",
         // route level code-splitting
         // this generates a separate chunk (about.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () =>
           import(/* webpackChunkName: "about" */ "./products/Accessories/Accessories.vue")
    },
    {
        path: "/all",
          name: "All",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./products/All.vue")
    },
    {
          path: "/all-tops",
            name: "All-tops",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
              import(/* webpackChunkName: "about" */ "./products/Tops/All-tops.vue")
    },
    {
            path: "/tshirts",
              name: "Tshirts",
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () =>
                import(/* webpackChunkName: "about" */ "./products/Tops/Tshirts/Tshirts.vue")
    },
    {
      path: "/hoodies",
        name: "Hoodies",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "./products/Tops/Hoodies/Hoodies.vue")
    },
    {
      path: "/Sweatshirts",
        name: "Sweatshirts",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "./products/Tops/Sweatshirts/Sweatshirts.vue")
    },
    {
      path: "/japanese cap",
        name: "Japanese Cap",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "./products/Accessories/Japanese Cap/Japanese Cap.vue")
    },
    {
      path: "/rose beanie",
        name: "Rose Beanie",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "./products/Accessories/Rose Beanie/Rose Beanie.vue")
    },
    {
      path: "/web socks",
        name: "Web Socks",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "./products/Accessories/Web Socks/Web Socks.vue")
    },
    {
      path: "/barbed sweatpants",
        name: "Barbed Sweatpants",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "./products/Bottoms/Barbed Sweatpants/Barbed Sweatpants.vue")
    },
    {
      path: "/independent joggers",
        name: "Independent Joggers",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "./products/Bottoms/Independent Joggers/Independent Joggers.vue")
    },
    {
      path: "/creature hoodie",
        name: "Creature Hoodie",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "./products/Tops/Hoodies/Creature Hoodie/Creature Hoodie.vue")
    },
    {
      path: "/dressen rose hoodie",
        name: "Dressen Rose Hoodie",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "./products/Tops/Hoodies/Dressen Rose Hoodie/Dressen Rose Hoodie.vue")
    },
    {
      path: "/japanese hoodie",
        name: "Japanese Hoodie",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "./products/Tops/Hoodies/Japanese Hoodie/Japanese Hoodie.vue")
    },
    {
      path: "/screaming hand hoodie",
        name: "Screaming Hand Hoodie",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "./products/Tops/Hoodies/Screaming Hand Hoodie/Screaming Hand Hoodie.vue")
    },
    {
      path: "/japanese sweatshirt",
        name: "Japanese Sweatshirt",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "./products/Tops/Sweatshirts/Japanese Sweatshirt/Japanese Sweatshirt.vue")
    },
    {
      path: "/eyes creature tshirt",
        name: "Eyes Creature Tshirt",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "./products/Tops/Tshirts/Eyes Creature Tshirt/Eyes Creature Tshirt.vue")
    },
    
    
  ]
});
