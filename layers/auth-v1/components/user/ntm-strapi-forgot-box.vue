<template>
  <div>
    <h1 class="font-weight-bold pull-right text-[18px]">
      {{ $t('ntm.forgot_title', 'Recovery Password') }}
    </h1>
    <div>
      <div class=" mb-6">
        <div class="font-light my-5 block text-[12px] text-gray-900 dark:text-gray-300">
          <p class="my-1 font-light">
            {{
              $t('ntm.send_recovery_code_description', "Complete the form, and we'll send you a link.")
            }}
          </p>
        </div>

        <div class="form-group flex flex-col gap-4">

          <div class="element-group w-full flex flex-col gap-1" :class="{
                  'has-error':errors.email,
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
                  }"
                class="input-primary input-email"
                required
            />
            <div :class="{invisible: errors?.email}" class="input-error">
              <i class="input-error-icon ti ti-exclamation-circle icon-small"></i>
              {{ errors.email }}
            </div>
          </div>

          <div class="font-light my-2 block text-[12px] text-gray-900 dark:text-gray-300">
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
              <i class="ti ti-refresh icon-md">
              {{ useLoader().status('auth') }}
            </i>
            </span>
              <span v-else>
            {{ $t('ntm.resend_title', 'Get Reset Link') }}
              </span>
            </button>
          </div>

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
<script setup lang="ts">
import {reactive} from 'vue';
import {
  useField,
  useForm
} from 'vee-validate';
import {useI18n} from "vue-i18n";

// Setup page
const emit = defineEmits(['data'])
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