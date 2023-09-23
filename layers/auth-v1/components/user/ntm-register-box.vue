<template>
  <div>
    <h1 class="font-weight-bold pull-right text-[18px]">
      {{ $t('ntm.register', 'Register') }}
    </h1>
    <div>
      <div class="mb-6">
        <div class="font-light my-5 block text-[12px] text-gray-900 dark:text-gray-300">
          <p class="my-1 font-light">
            {{ $t('ntm.hello', 'Hello!') }}
            <br/>
            {{ $t('ntm.fill_credentials', 'Please provide the requested information.') }}
          </p>
        </div>

        <div class="form-group flex flex-col gap-4">
          <div class="element-group w-full  flex flex-col gap-1">
            <label for="name" class="py-2">{{ $t("ntm.mobile", "Mobile") }}</label>
            <input
                dir="auto"
                id="mobile"
                type="text"
                v-model="credentials.mobile"
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
          <div class="element-group w-full  flex flex-col gap-1">
            <label for="password_confirmation" class="py-2">{{
                $t("ntm.password_confirmation", "Password Confirmation")
              }}</label>
            <input
                id="password_confirmation"
                type="password"
                v-model="credentials.password_confirmation"
                class="input-primary input-password py-3 w-full dark:border-gray-800 dark:text-gray-900"
                required
            />
          </div>

          <div class="element-group w-full flex flex-col gap-1">
            <label for="email">{{ $t("ntm.email", "Email") }}</label>
            <input
                dir="auto"
                type="email"
                id="email"
                v-model="credentials.email"
                class="input-primary input-email py-3 w-full dark:border-gray-800 dark:text-gray-900"
                required
            />
          </div>
          <div class="flex gap-2">
            <div class="element-group w-full flex flex-col gap-1">
              <label for="first_name">{{ $t("ntm.first_name", "First Name") }}</label>
              <input
                  dir="auto"
                  type="text"
                  id="first_name"
                  v-model="credentials.first_name"
                  class="input-primary input-text py-3 w-full dark:border-gray-800 dark:text-gray-900"
                  required
              />
            </div>
            <div class="element-group w-full flex flex-col gap-1">
              <label for="last_name">{{ $t("ntm.last_name", "Last Name") }}</label>
              <input
                  dir="auto"
                  type="text"
                  id="last_name"
                  v-model="credentials.last_name"
                  class="input-primary input-text py-3 w-full dark:border-gray-800 dark:text-gray-900"
                  required
              />
            </div>
          </div>


          <div class="flex py-4 gap-2 items-baseline">
            <input type="checkbox" id="terms_and_conditions"/>
            <label for="terms_and_conditions" class="self-center font-weight-light w-full text-[10px]">
              {{ $t("ntm.terms_and_conditions", "By creating an account, you agree to our terms and conditions.") }}
            </label>
          </div>
          <button type="submit"
                  @click="$emit('action',credentials)"
                  class="btn-primary w-full mt-5 py-3.5">
            {{ $t('ntm.register_title', 'Register') }}
          </button>

          <div class="flex justify-around gap-3 text-xs">
            <span>
              {{ $t("ntm.already_have_account", "Have an account?") }}
              <a href="./login" class="text-link">
                {{ $t("ntm.login_title", "Sign in") }}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
const credentials = ref({name: null, email: null, password: null, mobile: null})
const {logo, title} = useAppConfig()?.digimarket;
</script>