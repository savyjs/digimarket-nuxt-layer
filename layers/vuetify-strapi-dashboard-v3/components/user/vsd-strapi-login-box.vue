<template>
  <v-card class="pa-5" min-width="500px">
    <v-skeleton-loader
        :loading="useLoader().status('skeleton')"
        type="heading"
    >
      <v-card-title>
        <h1 class="card-title font-weight-bold pull-right text-[18px]">
          {{ $t('vsd.login_title', 'Login') }}
        </h1>
      </v-card-title>
    </v-skeleton-loader>
    <v-card-text>
      <div class="mb-6">

        <div class="font-light my-5 block text-[12px] text-gray-900 dark:text-gray-300">
          <v-skeleton-loader
              :loading="useLoader().status('skeleton')"
              type="sentences"
          >
            <p class="my-1 font-light">
              {{ $t('vsd.hello', 'Hello') }},
              <br/>
              {{ $t('vsd.fill_credentials', 'To access your account, please provide the required information below.') }}
            </p>
          </v-skeleton-loader>
        </div>
        <div>
          <v-skeleton-loader
              :loading="useLoader().status('skeleton')"
              type="chip"
          >
            <v-text-field
                v-model="identifier.value.value"
                :error-messages="identifier.errorMessage?.value"
                :label='$t("vsd.identifier", "Identifier")'
                :variant="useStyle('input')"
            ></v-text-field>
          </v-skeleton-loader>
          <v-skeleton-loader

              :loading="useLoader().status('skeleton')"
              type="chip"
          >
            <v-text-field
                v-model="password.value.value"
                type="password"
                :error-messages="password.errorMessage?.value"
                :label='$t("vsd.password", "Password")'
                :variant="useStyle('input')"
                class="my-2"
            ></v-text-field>
          </v-skeleton-loader>


          <div class="flex text-xs">
            <v-skeleton-loader
                :loading="useLoader().status('skeleton')"
                type="list-item"
            >
              <span>
                {{ $t("ntm.forgot_password", "Forgot your password?") }}
                <nuxt-link :to="useAuthRoutes('forgot')" class="text-link">
                {{ $t("ntm.forgot_title", "Reset it here") }}
                </nuxt-link>
            </span>
            </v-skeleton-loader>

          </div>

          <v-row class="d-flex justify-center mt-3">
            <v-skeleton-loader
                :loading="useLoader().status('skeleton')"
                type="button"
            >
              <v-btn type="submit"
                     color="primary"
                     :variant="useStyle('btn')"
                     :loading="useLoader().status('auth')"
                     @click="submitForm"
                     class="btn-primary flex gap-2 w-full mt-2 py-2.5 align-center">
                {{ $t('vsd.login_title', 'Login') }}
              </v-btn>
            </v-skeleton-loader>
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
const emit = defineEmits(['action'])

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