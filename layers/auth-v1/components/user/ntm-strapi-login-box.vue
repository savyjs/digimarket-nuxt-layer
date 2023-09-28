<template>
  <div>
    <h1 class="font-weight-bold pull-right text-[18px]">
      {{ $t('ntm.login_title', 'Login') }}
    </h1>
    <div>
      <div class="mb-6">

        <div class="font-light my-5 block text-[12px] text-gray-900 dark:text-gray-300">
          <p class="my-1 font-light">
            {{ $t('ntm.hello', 'Hello') }},
            <br/>
            {{ $t('ntm.fill_credentials', 'To access your account, please provide the required information below.') }}
          </p>
        </div>

        <div class="form-group flex flex-col">

          <div class="element-group w-full flex flex-col gap-1" :class="{
                  'has-error':errors.identifier,
                  }">
            <label class="input-label" for="identifier">
              {{ $t("ntm.identifier", "Username or Email") }}
              <i class="input-success-icon ti ti-circle-check icon-small"></i>
            </label>
            <input
                dir="auto"
                type="email"
                @keydown.enter="submitForm"
                id="identifier"
                v-model="identifier.value"
                :class="{
                  'input-has-error':errors?.identifier,
                  }"
                class="input-primary input-email"
                required
            />
            <div :class="{invisible: errors?.identifier}" class="input-error">
              <i class="input-error-icon ti ti-exclamation-circle icon-small"></i>
              {{ errors.identifier }}
            </div>
          </div>

          <div class="element-group w-full flex flex-col gap-1" :class="{
                  'has-error':errors.password,
                  }">

            <label for="password" class="input-label">
              {{ $t("ntm.password", "Password") }}
              <i class="input-success-icon ti ti-circle-check icon-small"></i>
            </label>

            <div class="input-primary">
              <span class="flex place-content-center items-center align-baseline ">
                <i class="ti ti-eye text-xl"></i>
              </span>
              <input
                  id="password"
                  :type="!showPassword ? 'password' : 'text'"
                  v-model="password.value"
                  @keydown.enter="submitForm"
                  required
              />
              <span class="flex place-content-center items-center align-baseline">
                <button class="transition opacity-20 hover:opacity-100 active:opacity-100"
                        @click="showPassword=!showPassword">
                <i class="ti ti-eye text-xl" v-if="!showPassword"></i>
                <i class="ti ti-eye-off text-xl" v-if="showPassword"></i>
                </button>
              </span>
            </div>
            <div :class="{invisible: errors?.password}" class="input-error">
              <i class="input-error-icon ti ti-exclamation-circle icon-small"></i>
              {{ errors.password }}
            </div>
            <div class="flex text-xs">
              <span>
                {{ $t("ntm.forgot_password", "Forgot your password?") }}
                <a href="./forgot" class="text-link">
                {{ $t("ntm.forgot_title", "Reset it here") }}
                </a>
            </span>
            </div>
          </div>

          <button type="submit"
                  :disabled="useLoader().status('auth')"
                  @click="submitForm"
                  class="btn-primary flex gap-2 w-full mt-2 py-2.5 align-center">
            <span v-if="useLoader().status('auth')" class="animate-spin">
              <i class="ti ti-refresh icon-md text-primary">
              {{ useLoader().status('auth') }}
            </i>
            </span>
            <span v-else>
              {{ $t('ntm.login_title', 'Login') }}
            </span>
          </button>

          <div class="flex justify-around gap-3 text-xs">
            <span>
              {{ $t("ntm.dont_have_account", "Don't have an account?") }}
              <a href="./register" class="text-link">
                {{ $t("ntm.register_title", "Register now") }}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import {reactive} from 'vue';
import {
  useField,
  useForm
} from 'vee-validate';

// Setup page
const {logo, title} = useAppConfig()?.digimarket;
const emit = defineEmits(['data'])

//  Initiate Form
const form = useForm();
const {handleSubmit, errors} = form;


// Setup Fields
const showPassword = ref(false);

// Setup Validating fields
const identifier = reactive(useField('identifier', 'required|min:3'));
const password = reactive(useField('password', 'required|min:8'));


// Handle Submit
const submitForm = handleSubmit((values) => {
  // Send data to your api ...
  emit('action', values)
});

</script>