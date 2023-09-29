<template>
  <div>
    <h1 class="font-weight-bold pull-right text-[18px]">
      {{ $t('ntm.login_title', 'Login') }}
    </h1>
    <div>
      <div class=" mb-6">
        <div class="font-light my-5 block text-[12px] text-gray-900 dark:text-gray-300">
          <p class="my-1 font-light">
            {{ $t('ntm.hello', 'Hello') }},
            <br/>
            {{ $t('ntm.fill_credentials', 'To access your account, please provide the required information below.') }}
          </p>
        </div>

        <div class="form-group flex flex-col gap-4">
          <div class="element-group w-full  flex flex-col gap-1">
            <label for="name" class="py-2">{{ $t("ntm.mobile", "Mobile") }}</label>
            <input
                dir="auto"
                id="name"
                type="text"
                v-model="credentials.username"
                class="input-primary input-mobile py-3 w-full dark:border-gray-800 dark:text-gray-900"
                required
            />
          </div>

          <div class="element-group w-full  flex flex-col gap-1">
            <label for="password" class="py-2">{{ $t("ntm.password", "Password") }}</label>
            <input
                id="password"
                type="password"
                v-model="credentials.password"
                class="input-primary input-password py-3 w-full dark:border-gray-800 dark:text-gray-900"
                required
            />
          </div>
          <div class="flex gap-3 text-xs">
            <span>
              {{ $t("ntm.forgot_password", "I forgot my password,") }}
              <a href="./forgot" class="text-link">
                {{ $t("ntm.forgot_title", "recovery form") }}
              </a>
            </span>
          </div>


          <button @click="$emit('action',credentials)" class="btn-primary w-full mt-5 py-3.5">
            {{ $t('ntm.login_title', 'Login') }}
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

const credentials = ref({})
const title = useAppConfig()?.digimarket?.title;
</script>