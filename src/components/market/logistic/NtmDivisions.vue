<template>
  <!-- Modal -->
  <div
      class="modal z-50 hidden fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="divisionsModal"
      aria-modal="true"
      role="dialog"
      aria-labelledby="divisionsModalLabel"
      >
    <div class="modal-dialog relative w-auto pointer-events-none">
      <div
          class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
        <div
            class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
          <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
            <span class="text-h5 color-900 font-bold">انتخاب شهر</span>
          </h5>
          <button type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body relative p-4">
          <NtmSubDivisions v-model="divisionKey" @input="divisionsModal=false"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const divisionsModal = useState('divisionsModal', () => false);
const divisionKey = ref('');

</script>