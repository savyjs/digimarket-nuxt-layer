<template>
  <div class="m-5">
    <div class="m-5">
      <p class="">Nuxt pages:</p>
      <div class="gap-3 flex">
        <nuxt-link class="btn-success" to="/market">Market Landing</nuxt-link>
        <nuxt-link class="btn-success" to="/market/profile">Profile</nuxt-link>
        <nuxt-link class="btn-success" to="/market/profile/orders">Orders</nuxt-link>
        <nuxt-link class="btn-success" to="/market/profile/order-details/1">Order Details
        </nuxt-link>
        <nuxt-link class="btn-success-outlined" to="/market/products/8364953">Product page</nuxt-link>
      </div>
    </div>
    <div class="m-5">
      <p class="">Next pages:</p>
      <div class="gap-3 flex">
        <nuxt-link class="btn-black" href="https://diginext.savyjs.com">Market Landing</nuxt-link>
        <nuxt-link class="btn-black-outlined" href="https://diginext.savyjs.com">Login</nuxt-link>
        <nuxt-link class="btn-black" href="https://diginext.savyjs.com/checkout/cart">Cart default</nuxt-link>
        <nuxt-link class="btn-black" href="https://diginext.savyjs.com/checkout/cart/2">Cart 2</nuxt-link>
        <nuxt-link class="btn-black" href="https://diginext.savyjs.com/checkout/cart/3">Cart 3</nuxt-link>
        <nuxt-link class="btn-black" href="https://diginext.savyjs.com/checkout/cart/4">Cart 4</nuxt-link>
        <nuxt-link class="btn-black" href="https://diginext.savyjs.com/checkout/shipping">Shipping</nuxt-link>
        <nuxt-link class="btn-black" href="https://diginext.savyjs.com/checkout/payment">Payment</nuxt-link>
      </div>
    </div>
    <div class="m-5">
      <p class="">Angular pages:</p>
      <div class="gap-3 flex">
        <nuxt-link class="btn btn-primary-outlined " href="https://digiangular.savyjs.com/">Market Landing</nuxt-link>
        <nuxt-link class="btn btn-primary" href="https://digiangular.savyjs.com/products/8364953">Product page
        </nuxt-link>
      </div>
    </div>
    <div class="m-5">
      <p class="">Pure HTML pages:</p>
      <div class="gap-3 flex">
        <nuxt-link class="btn btn-gray-outlined text-ad" to="/market/products/8364953">landing 2</nuxt-link>
      </div>
    </div>
  </div>
</template>