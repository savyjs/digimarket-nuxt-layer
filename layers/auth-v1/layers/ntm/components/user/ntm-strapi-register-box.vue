<template>
  <div class="card">
    <h1 class="card-title font-weight-bold pull-right text-[18px]">
      {{ $t('ntm.register', 'Register') }}
    </h1>
    <div class="">
      <div class="mb-6">
        <div class="font-light my-5 block text-[12px] text-gray-900 dark:text-gray-300">
          <p class="my-1 font-light">
            {{ $t('ntm.hello', 'Hello!') }}
            <br/>
            {{ $t('ntm.fill_credentials', 'Please provide the requested information.') }}
          </p>
        </div>

        <div class="form-group flex flex-col">

          <div class="element-group w-full flex flex-col gap-1" :class="{
                  'has-error':errors.username,
                  'is-valid':username?.meta?.dirty && username?.meta?.valid
                  }">

            <label class="input-label" for="username">
              {{ $t("ntm.username", "Username") }}
              <i class="input-success-icon ti ti-circle-check icon-small"></i>
            </label>
            <div class="input-primary">
              <span class="flex place-content-center items-center align-baseline ">
                <i class="ti ti-user-circle text-xl"></i>
              </span>
              <input
                  dir="auto"
                  type="text"
                  id="username"
                  v-model="username.value"
                  required
              />
            </div>
            <div :class="{invisible: errors?.username}" class="input-error">
              <i class="input-error-icon ti ti-exclamation-circle icon-small"></i>
              {{ errors.username }}
            </div>
          </div>


          <div class="element-group w-full flex flex-col gap-1" :class="{
                  'has-error':errors.email,
                  'is-valid':email?.meta?.dirty && email?.meta?.valid
                  }">
            <label class="input-label" for="email">{{ $t("ntm.email", "Email") }}
              <i class="input-success-icon ti ti-circle-check icon-small"></i>
            </label>
            <div class="input-primary">
              <span class="flex place-content-center items-center align-baseline ">
                <i class="ti ti-mail text-xl"></i>
              </span>
              <input
                  dir="auto"
                  type="email"
                  id="email"
                  v-model="email.value"
                  required
              />
            </div>
            <div :class="{invisible: errors?.email}" class="input-error">
              <i class="input-error-icon ti ti-exclamation-circle icon-small"></i>
              {{ errors.email }}
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
                <i class="ti ti-lock text-xl"></i>
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

          <div class="element-group w-full flex flex-col gap-1" :class="{
                  'has-error':errors?.terms,
                  'is-valid':terms?.meta?.dirty && terms?.meta?.valid
                  }">
            <div class="flex gap-2 items-center">
              <input type="checkbox" v-model="terms.value" id="terms_and_conditions"/>
              <label for="terms_and_conditions" class="font-light w-full text-[10px]">
                <small>{{
                    $t("ntm.terms_and_conditions", "I agree to the terms and conditions.")
                  }}</small>
              </label>
            </div>
            <div :class="{invisible: errors?.terms}" class="input-error">
              <i class="input-error-icon ti ti-exclamation-circle icon-small"></i>
              {{ errors.terms }}
            </div>
          </div>


          <button type="submit"
                  :disabled="useLoader().status('auth')"
                  @click="submitForm"
                  @keydown.enter="submitForm"
                  class="btn-primary flex gap-2 w-full mt-2 py-2.5 align-center">
            <span v-if="useLoader().status('auth')" class="animate-spin">
              <i class="ti ti-refresh icon-md text-primary">
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
              <nuxt-link :to="useAuthRoutes('login')" class="text-link">
                {{ $t("ntm.login_title", "Sign in") }}
              </nuxt-link>
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
const username = reactive(useField('username', 'required|min:3'));
const email = reactive(useField('email', 'required|email'));
const password = reactive(useField('password', 'required|min:8'));
const terms = reactive(useField('terms', 'required', {
  type: 'checkbox',
  initialValue: false,
  label: "Terms and Conditions"
}));


// Handle Submit
const submitForm = handleSubmit((values) => {
  // Send data to your api ...
  emit('action', values)
});

</script>