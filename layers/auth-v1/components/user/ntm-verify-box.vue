<template>
  <div>
    <h1 class="font-weight-bold pull-right text-[18px]">
      {{ $t('ntm.verify_title', 'Verify') }}
    </h1>
    <div>
      <div class=" mb-6">
        <div class="font-light my-5 block text-[12px] text-gray-900 dark:text-gray-300">
          <p class="my-1 font-light">
            {{ $t('ntm.verify_code_description', "We sent you a code") }}
          </p>
        </div>

        <div class="form-group flex flex-col gap-4">
          <div class="element-group w-full  flex flex-col gap-1">
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

          <div class="flex gap-3">
            <button ref="check_button" @click="$emit('action',credentials)" class="btn-primary w-full mt-5 py-3.5">
              {{ $t('ntm.check_code', 'Get code') }}
            </button>

            <button @click="$emit('action',credentials)" class="btn-warning w-full mt-5 py-3.5">
              {{ $t('ntm.resend_title', 'Resend') }}
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

const credentials = ref({})

const title = useAppConfig()?.digimarket?.title;
</script>