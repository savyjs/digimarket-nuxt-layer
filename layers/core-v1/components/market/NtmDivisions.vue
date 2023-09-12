<template>
  <div class="modal hidden fixed z-50 top-0 left-0 h-full w-full md:h-auto "
       id="divisionsModal"
       aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class=" relative rounded-lg bg-white p-3 shadow dark:bg-gray-700">
          <div class=" modal-header">
            <div class=" flex my-3 pt-4 pb-3 items-center justify-between border-b border-gray-200 pt-2 pb-3 text-sm">
              <span class="text-h5 h-30 color-900 font-bold">انتخاب شهر</span>
              <button class="" data-bs-dismiss="modal" aria-label="Close">
                <svg class="h-5 w-5" fill="currentColor">
                  <use href="#close"></use>
                </svg>
              </button>
            </div>
          </div>
          <div class="modal-body">
            <div class="pt-3">
              <span class="text-sm text-sky-400">مکان یابی خودکار</span>
            </div>
            <div class="pt-3">
              <NtmSubDivisions v-model="divisionKey" @input="divisionsModal=false"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const divisionsModal = useState('divisionsModal', () => false);
const divisionKey = ref('');

</script>