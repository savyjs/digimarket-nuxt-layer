<template>
  <div>
    <h1 class="rtl font-weight-bold pull-right text-[18px]">
      {{ $t('register', 'Register') }}
    </h1>
    <div>
      <div class="rtl mb-6">
        <div class="font-light rtl my-5 block text-right text-[12px] text-gray-900 dark:text-gray-300">
          <p class="my-1 font-light">{{ $t('hello', 'Hello') }}</p>
          <p class="font-light">
            {{ $t('fill_credentials', 'please fill mobile number and password') }}
          </p>
        </div>

        <slot>
          <NtmGetMobile/>
          <NtmGetPassword/>
        </slot>

        <button type="submit" class="btn-primary w-full mt-5 py-3.5">
          {{ $t('ntm.register_title', 'Register') }}
        </button>
        <div class="flex gap-1 ">
          <input type="checkbox" for="terms_and_conditions"/>
          <p id="terms_and_conditions" class="font-weight-light mt-5 w-full text-right text-[10px]">
            {{ $t("ntm.terms_and_conditions", {title}) }}
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
const {logo, title} = useAppConfig()?.digimarket;
</script>