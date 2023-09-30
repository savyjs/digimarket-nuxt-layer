<template>
  <v-card class="pa-5">
    <v-card-title>
      <h1 class="card-title font-weight-bold pull-right text-[18px]">
        {{ $t('vsd.forgot_title', 'Recovery Password') }}
      </h1>
    </v-card-title>
    <div>
      <div class=" mb-6">
        <div class="font-light my-5 block text-[12px] text-gray-900 dark:text-gray-300">
          <p class="my-1 font-light">
            {{
              $t('vsd.send_recovery_code_description', "Complete the form, and we'll send you a link.")
            }}
          </p>
        </div>

        <div class="form-group flex flex-col gap-4">

          <div>

            <v-text-field
                v-model="identifier.value.value"
                :error-messages="identifier.errorMessage?.value"
                :label='$t("vsd.identifier", "Identifier")'
                :variant="useStyle('input')"
            ></v-text-field>

            <v-text-field
                v-model="password.value.value"
                type="password"
                :error-messages="password.errorMessage?.value"
                :label='$t("vsd.password", "Password")'
                :variant="useStyle('input')"
                class="my-2"
            ></v-text-field>

            <v-row class="d-flex justify-center mt-3">
              <v-btn type="submit"
                     color="primary"
                     :variant="useStyle('btn')"
                     :disabled="useLoader().status('auth')"
                     @click="submitForm"
                     class="btn-primary flex gap-2 w-full mt-2 py-2.5 align-center">
            <span v-if="useLoader().status('auth')" class="animate-spin">
              <i class="ti ti-refresh icon-md text-primary">
              {{ useLoader().status('auth') }}
            </i>
            </span>
                <span v-else>
              {{ $t('vsd.login_title', 'Login') }}
            </span>
              </v-btn>
            </v-row>
          </div>

          <div class="font-light my-2 block text-[12px] text-gray-900 dark:text-gray-300">
            <p class="my-1 font-light">
              {{
                $t('vsd.verify_check_spam', "Sometimes, verification emails end up in the spam or junk folder. Please check your spam folder and mark our emails as 'Not Spam' to ensure you receive important updates.")
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
            {{ $t('vsd.resend_title', 'Get Reset Link') }}
              </span>
            </button>
          </div>

          <div class="flex justify-around gap-3 text-xs">
            <span>
              {{ $t("vsd.dont_have_account", "Don't have an account?") }}
              <nuxt-link :to="useAuthRoutes('register')" class="text-link">
                {{ $t("vsd.register_title", "Register now") }}
              </nuxt-link>
            </span>
          </div>

        </div>

      </div>
    </div>
  </v-card>
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
const title = useAppConfig()?.vsd?.title;

//  Initiate Form
const form = useForm();
const {handleSubmit, errors} = form;

// Setup Validating fields
const credentials = ref({})
const email = useField('email', 'required|email');

// Handle Submit
const submitForm = handleSubmit((values) => {
  // Send data to your api ...
  emit('action', values)
});


</script>