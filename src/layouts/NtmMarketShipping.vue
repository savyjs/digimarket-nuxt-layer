<template>
    <div>
        <div class="container mt-5 mx-auto text-[14px]">
            <div class="card-primary mx-auto">
                <div class="mx-auto text-center flex items-center justify-center mb-10 mt-2">
                    <NuxtLink href="/"><a><img :src="logo" :alt="title"/></a></NuxtLink>
                </div>
                <div class="flex lg:w-1/2 mx-auto">
                    <div class="flex items-center">
                        <NuxtLink href="/checkout/cart">
                            <a class="flex items-center gap-1 text-red-400">
                            <span>
                                <svg class="icon-primary icon-small fill-red-400"><use href="#cartOff"/></svg>
                            </span>
                                <span>سبد خرید</span>
                            </a>
                        </NuxtLink>
                    </div>
                    <div class="grow border-b mb-3.5 lg:px-5 mx-3 border-red-200">
                    </div>
                    <div class="flex items-center">
                        <NuxtLink href="/checkout/shipping">
                            <a class="flex items-center gap-1 text-[19px] font-bold text-red-600">
                            <span>
                                <svg class="icon-primary w-8 h-8 fill-red-600"><use href="#deliveryExpress"/></svg>
                            </span>
                                <span>زمان و نحوه ارسال</span>
                            </a>
                        </NuxtLink>
                    </div>
                    <div class="grow border-b mb-3.5 lg:px-5 mx-3 border-gray-200">
                    </div>
                    <div class="flex items-center">
                        <div class="flex items-center gap-1 text-gray-400">
                            <span>
                                <svg class="icon-primary icon-small fill-gray-400"><use
                                        href="#paymentWallet"/></svg>
                            </span>
                            <span>پرداخت</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <main>
          <div class='container mx-auto rtl'>
            <nuxt-page />
          </div>
        </main>
      <NtmSvgIcons/>
    </div>
</template>
<script setup>
const {logo, title} = useNtm().options();
</script>