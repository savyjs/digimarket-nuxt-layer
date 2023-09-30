<template>
  <v-card class="pa-5">
    <v-card-title>
      <h1 class="card-title font-weight-bold pull-right text-[18px]">
        {{ $t('vsd.login_title', 'Login') }}
      </h1>
    </v-card-title>
    <v-card-text>
      <div class="mb-6">
        <div class="font-light my-5 block text-[12px] text-gray-900 dark:text-gray-300">
          <p class="my-1 font-light">
            {{ $t('vsd.hello', 'Hello') }},
            <br/>
            {{ $t('vsd.fill_credentials', 'To access your account, please provide the required information below.') }}
          </p>
        </div>

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

          <div class="flex text-xs">
              <span>
                {{ $t("ntm.forgot_password", "Forgot your password?") }}
                <nuxt-link :to="useAuthRoutes('forgot')" class="text-link">
                {{ $t("ntm.forgot_title", "Reset it here") }}
                </nuxt-link>
            </span>
          </div>

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

      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>

import {
  useField,
  useForm
} from 'vee-validate';

// Setup page
const {logo, title} = useAppConfig()?.vsd;
const emit = defineEmits(['data'])

//  Initiate Form
const form = useForm();
const {handleSubmit, errors} = form;


// Setup Fields
const showPassword = ref(false);

// Setup Validating fields
const identifier = useField('identifier', 'required|min:3');
const password = useField('password', 'required|min:8');


// Handle Submit
const submitForm = handleSubmit((values) => {
  // Send data to your api ...
  emit('action', values)
});

</script>