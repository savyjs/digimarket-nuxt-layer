<template>
  <div>
    <h1 class="font-weight-bold pull-right text-[18px]">
      {{ $t('ntm.forgot_title', 'Recovery Password') }}
    </h1>
    <div>
      <div class=" mb-6">
        <div class="font-light my-5 block text-[12px] text-gray-900 dark:text-gray-300">
          <p class="my-1 font-light">
            {{ $t('ntm.send_recovery_code_description', "Complete the form, and we'll send a verification code to you.") }}
          </p>
        </div>

        <div class="form-group flex flex-col gap-4">
          <div class="element-group w-full  flex flex-col gap-1">
            <label for="name" class="py-2">{{ $t("ntm.mobile", "Mobile") }}</label>
            <input
                dir="auto"
                id="name"
                type="text"
                v-model="credentials.name"
                class="input-primary input-mobile py-3 w-full dark:border-gray-800 dark:text-gray-900"
                required
            />
          </div>


          <button @click="$emit('action',credentials)" class="btn-primary w-full mt-5 py-3.5">
            {{ $t('ntm.get_code', 'Get code') }}
          </button>

          <div class="flex justify-around gap-3 text-xs">
            <span>
              {{ $t("ntm.dont_have_account", "I don't have an account,") }}
              <a href="./register" class="text-link">
                {{ $t("ntm.register_title", "register") }}
              </a>
            </span>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import {useI18n} from "vue-i18n";

const credentials = ref({})
let {t} = useI18n()
const title = useAppConfig()?.digimarket?.title;
</script>