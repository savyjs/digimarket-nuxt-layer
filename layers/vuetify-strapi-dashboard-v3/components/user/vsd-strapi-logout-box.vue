<template>
  <v-card class="pa-5" min-width="500px">
    <v-skeleton-loader
        :loading="useLoader().status('skeleton')"
        type="heading"
    >
      <v-card-title>
        <h1 class="card-title font-weight-bold pull-right text-[18px]">
          {{ $t('vsd.logout_title', 'Logout') }}
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
              {{ $t('vsd.are_you_sure', 'Are you sure?') }}
            </p>
          </v-skeleton-loader>
        </div>
        <div>

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
                {{ $t('vsd.logout_title', 'Logout') }}
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

// Handle Submit
const submitForm = handleSubmit((values) => {
  // Send data to your api ...
  emit('action', values)
});

</script>