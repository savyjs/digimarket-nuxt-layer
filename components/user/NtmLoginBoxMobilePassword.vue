<template>
  <div>
    <h1 class="font-weight-bold pull-right text-[18px]">
      {{ $t('login', 'Login') }}
    </h1>
    <div>
      <div class=" mb-6">
        <div class="font-light my-5 block text-[12px] text-gray-900 dark:text-gray-300">
          <p class="my-1 font-light">
            {{ $t('ntm.hello', 'Hello') }}, {{ $t('welocme', 'welcome') }}
          </p>
        </div>

        <div>
          <div>
            <input
                type="text"
                v-model="credentials.name"
                class="input-primary py-3 w-full dark:border-gray-800 dark:text-gray-900"
                required
            />
          </div>
        </div>

        <button @click="$emit('action',credentials)" class="btn-primary w-full mt-5 py-3.5">
          {{ $t('ntm.login_title', 'Login') }}
        </button>

        <p class="font-weight-light mt-5 w-full text-[10px]">
          {{ $t("ntm.terms_and_conditions", {title: $t(title)}) }}
        </p>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import {useI18n} from "vue-i18n";

const credentials = ref({})
let {t} = useI18n()
const title = t(useAppConfig()?.digimarket?.title);
</script>