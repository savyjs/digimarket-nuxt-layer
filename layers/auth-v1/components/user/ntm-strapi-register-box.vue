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

          <div class="element-group w-full flex flex-col gap-1" :class="{
                  'has-error':errors.username,
                  'is-valid':username?.meta?.dirty && username?.meta?.valid
                  }">
            <label class="input-label" for="username">
              {{ $t("ntm.username", "Username") }}
              <i class="input-success-icon ti ti-circle-check icon-small"></i>
            </label>
            <input
                dir="auto"
                type="email"
                id="username"
                v-model="username.value"
                :class="{
                  'input-has-error':errors?.username,
                  'input-is-valid':username?.meta?.dirty && username?.meta?.valid
                  }"
                class="input-primary input-email py-3 w-full dark:border-gray-800 dark:text-gray-900"
                required
            />
            <div v-show="errors?.username" class="input-error">
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
            <input
                dir="auto"
                type="email"
                id="email"
                v-model="email.value"
                :class="{
                  'input-has-error':errors.email,
                  'input-is-valid':email?.meta?.dirty && email?.meta?.valid
                  }"
                class="input-primary input-email py-3 w-full dark:border-gray-800 dark:text-gray-900"
                required
            />
            <div v-show="errors?.email" class="input-error">
              <i class="input-error-icon ti ti-exclamation-circle icon-small"></i>
              {{ errors.email }}
            </div>
          </div>


          <div class="element-group w-full flex flex-col gap-1" :class="{
                  'has-error':errors.password,
                  'is-valid':password?.meta?.dirty && password?.meta?.valid
                  }">
            <label for="password" class="input-label">
              {{ $t("ntm.password", "Password") }}
              <i class="input-success-icon ti ti-circle-check icon-small"></i>
            </label>

            <div class="flex">
              <input
                  id="password"
                  :type="!showPassword ? 'password' : 'text'"
                  v-model="password.value"
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
            <div v-show="errors?.password" class="input-error">
              <i class="input-error-icon ti ti-exclamation-circle icon-small"></i>
              {{ errors.password }}
            </div>

          </div>

          <div class="element-group w-full flex flex-col gap-1" :class="{
                  'has-error':errors?.terms,
                  'is-valid':terms?.meta?.dirty && terms?.meta?.valid
                  }">
            <div class="flex py-4 gap-2 items-baseline">
              <input type="checkbox" v-model="terms.value" id="terms_and_conditions"/>
              <label for="terms_and_conditions" class="self-center font-weight-light w-full text-[10px]">
                {{ $t("ntm.terms_and_conditions", "By creating an account, you agree to our terms and conditions.") }}
              </label>
            </div>
            <div v-show="errors?.terms" class="input-error">
              <i class="input-error-icon ti ti-exclamation-circle icon-small"></i>
              {{ errors.terms }}
            </div>
          </div>

          <div>

          </div>

          <button type="submit"
                  :disabled="useLoader().status('auth')"
                  @click="submitForm"
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

<script setup>
import {reactive} from 'vue';
import {useField, useForm, useSubmitForm, useIsFormDirty, useIsFormValid, useIsSubmitting} from 'vee-validate';

const {logo, title} = useAppConfig()?.digimarket;

const {errors} = useForm();

const showPassword = ref(false);

const username = reactive(useField('username', 'required|min:3'));
const email = reactive(useField('email', 'required|email'));
const password = reactive(useField('password', 'required|min:8'));
const terms = reactive(useField('terms', 'required', {
  type: 'checkbox'
}));

const credentials = ref({username, email, password});

const form = reactive(useForm());

const loader = useLoader();
loader.start('auth')
loader.targets.auth.active = reactive(form?.meta?.pending || useIsSubmitting()?.value);
const isValid = reactive(useIsFormDirty()?.value && useIsFormValid()?.value)

const emit = defineEmits(['data'])

const submitForm = useSubmitForm((values) => {
  // Send data to your api ...
  alert(JSON.stringify(values, null, 2));
  emit('data', values)
});

</script>