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

          <div class="element-group w-full flex flex-col gap-1">
            <label for="email">{{ $t("ntm.email", "Email") }}</label>
            <input
                dir="auto"
                type="email"
                id="email"
                v-model="email.value"
                @change="email.validate()"
                class="input-primary input-email py-3 w-full dark:border-gray-800 dark:text-gray-900"
                required
            />
            {{email}}
            <div class="input-error">{{ useFieldError('email') }}</div>
          </div>

          <div class="element-group w-full  flex flex-col gap-1">
            <label for="password" class="py-2">{{ $t("ntm.password", "Password") }}</label>
            <div class="flex">
              <input
                  id="password"
                  :type="!showPassword ? 'password' : 'text'"
                  v-model="password"
                  class="input-primary input-password py-3 w-full dark:border-gray-800 dark:text-gray-900"
                  required
              />
              <span class="flex place-content-center items-center align-baseline">
                <button class="absolute transition opacity-20 hover:opacity-100 active:opacity-100 -ml-10"
                        @click="showPassword=!showPassword">
                <i class="ti ti-eye text-3xl" v-if="!showPassword"></i>
                <i class="ti ti-eye-off text-3xl" v-if="showPassword"></i>
                </button>
              </span>
            </div>
          </div>

          <div class="flex py-4 gap-2 items-baseline">
            <input type="checkbox" id="terms_and_conditions"/>
            <label for="terms_and_conditions" class="self-center font-weight-light w-full text-[10px]">
              {{ $t("ntm.terms_and_conditions", "By creating an account, you agree to our terms and conditions.") }}
            </label>
          </div>
          <button type="submit"
                  :disabled="useLoader().status('auth')"
                  @click="$emit('action',credentials)"
                  class="btn-primary flex gap-2 w-full mt-5 py-3.5 align-center">
            <span v-if="useLoader().status('auth')" class="animate-spin">
              <i class="ti ti-refresh icon-md">
              {{ useLoader().status('auth') }}
            </i>
            </span>
            <span v-else>
              {{ $t('ntm.register_title', 'Register') }}
            </span>
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
import {useField, useFieldError,useForm} from 'vee-validate';

const showPassword = ref(false);

const username = useField('username', 'required|min:3');
const email = useField('email', 'required|email');
const password = useField('password', 'required|min:6');

const credentials = ref({email, password, username})
const {logo, title} = useAppConfig()?.digimarket;
</script>