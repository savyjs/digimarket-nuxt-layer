<template>
  <div v-show="message?.message" :class="`alert-${message?.type}`"
       class="fixed top-0 left-0 right-0 p-4 flex">
    <button class="absolute top-2 right-2 text-white"
            @click="closeToast">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 1a9 9 0 100 18A9 9 0 0010 1zm4.95 12.95a7 7 0 11-9.9-9.9l9.9 9.9z"
              clip-rule="evenodd"/>
      </svg>
    </button>
    <div class="bg-gray-800 text-white rounded-lg p-4">
      <div>
        <h4>{{ message?.title }}</h4>
        {{ message?.message }}
      </div>
    </div>
  </div>
</template>
<script setup>
const message = useMessages().newest('toast')

function closeToast() {

}
</script>
<style scoped>
.fixed {
  position: fixed;
}

.top-0 {
  top: 0;
}

.left-0 {
  left: 0;
}

.right-0 {
  right: 0;
}

.p-4 {
  padding: 1rem;
}

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.bg-gray-800 {
  background-color: #1f2937;
}

.text-white {
  color: #fff;
}

.rounded-lg {
  border-radius: 0.5rem;
}
</style>
