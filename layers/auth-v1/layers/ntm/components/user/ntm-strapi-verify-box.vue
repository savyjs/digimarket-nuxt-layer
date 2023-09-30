<template>
  <div class="card">
    <h1 class="card-title font-weight-bold pull-right text-[18px]">
      {{ $t('ntm.verify_title', 'Verify') }}
    </h1>
    <div>
      <div class=" mb-6">
        <div class="font-light my-5 block text-[12px] text-gray-900 dark:text-gray-300">
          <p class="my-1 font-light">
            {{
              $t('ntm.verify_code_description', "If you haven't received the verification email or have accidentally deleted it, you can request a new one by clicking 'Resend Verification Email.")
            }}
          </p>
        </div>

        <div class="form-group flex flex-col gap-4">

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

          <div class="element-group w-full  flex flex-col gap-1 hide">
            <label for="name" class="py-2">{{ $t("ntm.code", "Code") }}</label>
            <div dir="ltr" class="flex justify-between gap-1">
              <input
                  ref="input1"
                  autofocus
                  onfocus="this.value=''"
                  @input="$refs.input2.focus()"
                  maxlength="1"
                  minlength="1"
                  required
                  class="input-primary content-center font-bold text-center"
              />
              <input
                  onfocus="this.value=''"
                  @input="$refs.input3.focus()"
                  ref="input2"
                  maxlength="1"
                  minlength="1"
                  required
                  class="input-primary content-center font-bold text-center"
              />
              <input
                  onfocus="this.value=''"
                  @input="$refs.input4.focus()"
                  ref="input3"
                  maxlength="1"
                  minlength="1"
                  required
                  class="input-primary content-center font-bold text-center"
              />
              <input
                  onfocus="this.value=''"
                  @input="$refs.input5.focus()"
                  ref="input4"
                  maxlength="1"
                  minlength="1"
                  required
                  class="input-primary content-center font-bold text-center"
              />
              <input
                  onfocus="this.value=''"
                  @input="$refs.input6.focus()"
                  ref="input5"
                  maxlength="1"
                  minlength="1"
                  required
                  class="input-primary content-center font-bold text-center"
              />
              <input
                  onfocus="this.value=''"
                  @input="$refs.check_button.focus()"
                  ref="input6"
                  maxlength="1"
                  minlength="1"
                  required
                  class="input-primary content-center font-bold text-center"
              />
            </div>
            <input
                onfocus="this.value=''"
                dir="auto"
                id="name"
                type="hidden"
                maxlength="6"
                minlength="6"
                v-model="credentials.code"
                required
            />
          </div>

          <div class="font-light my-5 block text-[12px] text-gray-900 dark:text-gray-300">
            <p class="my-1 font-light">
              {{
                $t('ntm.verify_check_spam', "Sometimes, verification emails end up in the spam or junk folder. Please check your spam folder and mark our emails as 'Not Spam' to ensure you receive important updates.")
              }}
            </p>
          </div>
          <div class="flex gap-3">

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
            {{ $t('ntm.resend_title', 'Resend Verification Email') }}
              </span>
            </button>
          </div>

          <div class="flex justify-around gap-3 text-xs">
            <span>
              {{ $t("ntm.dont_have_account", "Don't have an account?") }}
              <nuxt-link :to="useAuthRoutes('register')" class="text-link">
                {{ $t("ntm.register_title", "Register now") }}
              </nuxt-link>
            </span>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import {reactive} from 'vue';
import {
  useField,
  useForm
} from 'vee-validate';
import {useI18n} from "vue-i18n";

// Setup page
const emit = defineEmits(['action'])
const title = useAppConfig()?.digimarket?.title;

//  Initiate Form
const form = useForm();
const {handleSubmit, errors} = form;

// Setup Validating fields
const credentials = ref({})
const email = reactive(useField('email', 'required|email', {
  initialValue: useUser()?.value?.email
}));

// Handle Submit
const submitForm = handleSubmit((values) => {
  // Send data to your api ...
  emit('action', values)
});


</script>