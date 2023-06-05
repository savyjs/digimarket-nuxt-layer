<template>
  <div>
    <h1 class=" font-weight-bold pull-right text-[18px]">
      {{ $t('login', 'Login') }}
    </h1>
    <div>
      <div class=" mb-6">
        <div class="font-light  my-5 block text-right text-[12px] text-gray-900 dark:text-gray-300">
          <p class="my-1 font-light">{{ $t('hello', 'Hello') }}</p>
          <p class="font-light">
            {{ $t('welocme', 'welcome') }}
          </p>
        </div>

        <slot>
          <NtmGetMobile/>
          <NtmGetPassword/>

        </slot>
        <button @click="$emit('action',credential)" class="btn-primary w-full mt-5 py-3.5">
          {{ $t('ntm.login_title', 'Login') }}
        </button>

        <p class="font-weight-light mt-5 w-full text-right text-[10px]">
          {{ $t("ntm.terms_and_conditions", {title: $t(title)}) }}
        </p>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import NtmGetPassword from "~/components/user/NtmGetPassword.vue";

const title = useAppConfig()?.digimarket?.title;
import NtmGetMobile from "~/components/user/NtmGetMobile.vue";
</script>