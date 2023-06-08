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
            {{ $t('fill_credentials', 'please fill requested information') }}
          </p>
        </div>

        <div class="form-group">
          <div class="element-group">
            <label for="name">{{ $t("mobile", "Mobile") }}</label>
            <input
                id="name"
                type="text"
                v-model="credentials.name"
                class="input-primary input-mobile py-3 w-full dark:border-gray-800 dark:text-gray-900"
                required
            />
            <div>
              <div class="element-group">
                <label>{{ $t("email", "Email") }}</label>
                <input
                    type="email"
                    v-model="credentials.email"
                    class="input-primary input-email py-3 w-full dark:border-gray-800 dark:text-gray-900"
                    required
                />
              </div>

            </div>
          </div>

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
  </div>

</template>

<script setup lang="ts">
const credentials = ref({name: null, email: null, password: null, mobile: null})
const {logo, title} = useAppConfig()?.digimarket;
</script>