<template>
  <div class="m-5">
    <div class="m-5">
      <p class="">Nuxt pages:</p>
      <div class="gap-3 flex">
        <p class="">Active:</p>
        <nuxt-link class="btn-success" :to="`${prefix}/user/login`">Login (mobile and password)</nuxt-link>
        <nuxt-link class="btn-success-outlined" :to="`${prefix}/user/login-email-password`">Login (email and password)
        </nuxt-link>
        <nuxt-link class="btn-success-outlined" :to="`${prefix}/user/login-username-password`">Login (username and
          password)
        </nuxt-link>
        <nuxt-link class="btn-success-outlined" :to="`${prefix}/user/login-oauth`">Login (OAuth)</nuxt-link>
        <nuxt-link class="btn-success" :to="`${prefix}/user/register`">Register (name - mobile - password)</nuxt-link>
        <nuxt-link class="btn-success-outlined" :to="`${prefix}/user/register-username-password`">Register (username
          password)
        </nuxt-link>
        <nuxt-link class="btn-success-outlined" :to="`${prefix}/user/register-oauth`">Register (OAuth)</nuxt-link>
        <nuxt-link class="btn-success-outlined" :to="`${prefix}/user/verify`">Verify (SMS)</nuxt-link>
        <nuxt-link class="btn-success-outlined" :to="`${prefix}/user/verify-otp`">Verify (OTP or Email)</nuxt-link>
        <nuxt-link class="btn-success-outlined" :to="`${prefix}/user/success`">Success Registration</nuxt-link>
      </div>
      <div class="gap-3 flex mt-5">
        <p class="">Archived:</p>
        <nuxt-link class="btn-success-outlined btn-disabled" :to="`${prefix}/market`">Market Landing</nuxt-link>
        <nuxt-link class="btn-success-outlined btn-disabled" :to="`${prefix}/market/profile`">Profile</nuxt-link>
        <nuxt-link class="btn-success-outlined btn-disabled" :to="`${prefix}/market/profile/orders`">Orders</nuxt-link>
        <nuxt-link class="btn-success-outlined btn-disabled" :to="`${prefix}/market/profile/order-details/1`">Order
          Details
        </nuxt-link>
        <nuxt-link class="btn-success-outlined" :to="`${prefix}/market/products/8364953`">Product page</nuxt-link>
      </div>
    </div>
    <div class="m-5">
      <p class="">Next pages:</p>
      <div class="gap-3 flex">
        <nuxt-link class="btn-black" target="_blank" href="https://diginext.savyjs.com">Market Landing</nuxt-link>
        <nuxt-link class="btn-black-outlined" target="_blank" href="https://diginext.savyjs.com">Login</nuxt-link>
        <nuxt-link class="btn-black" target="_blank" href="https://diginext.savyjs.com/checkout/cart">Cart default
        </nuxt-link>
        <nuxt-link class="btn-black" target="_blank" href="https://diginext.savyjs.com/checkout/cart/2">Cart 2
        </nuxt-link>
        <nuxt-link class="btn-black" target="_blank" href="https://diginext.savyjs.com/checkout/cart/3">Cart 3
        </nuxt-link>
        <nuxt-link class="btn-black" target="_blank" href="https://diginext.savyjs.com/checkout/cart/4">Cart 4
        </nuxt-link>
        <nuxt-link class="btn-black" target="_blank" href="https://diginext.savyjs.com/checkout/shipping">Shipping
        </nuxt-link>
        <nuxt-link class="btn-black" target="_blank" href="https://diginext.savyjs.com/checkout/payment">Payment
        </nuxt-link>
      </div>
    </div>
    <div class="m-5">
      <p class="">Angular pages:</p>
      <div class="gap-3 flex">
        <nuxt-link class="btn btn-primary-outlined " target="_blank" href="https://digiangular.savyjs.com/">Market
          Landing
        </nuxt-link>
        <nuxt-link class="btn btn-primary" target="_blank" href="https://digiangular.savyjs.com/products/8364953">
          Product page
        </nuxt-link>
      </div>
    </div>
    <div class="m-5">
      <p class="">Pure HTML pages:</p>
      <div class="gap-3 flex">
        <nuxt-link class="btn btn-gray-outlined text-ad" :to="`${prefix}/market/products/8364953`">landing 2</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script setup>
const prefix = "/v1";
</script>