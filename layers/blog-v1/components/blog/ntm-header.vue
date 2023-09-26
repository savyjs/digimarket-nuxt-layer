<template>
  <header class="bg-gray-100 p-4 flex justify-between items-center">
    <div class="flex items-center">
      <img :src="user?.profile_image_90" alt="Logo" class="w-12 h-12 mr-4"/>
      <div>
        <h1 class="text-xl font-bold"><a :href="`https://dev.to/user?.username`" class="text-gray-800 font-bold">{{ user?.name }}</a></h1>
        <p class="text-gray-600">@{{ user?.username }}</p>
        <p v-if="user?.twitter_username" class="text-gray-600">Twitter: @{{ user?.twitter_username }}</p>
        <p class="text-gray-600">GitHub: @{{ user?.github_username }}</p>
      </div>
    </div>
    <nav class="ml-4">
      <ul class="flex space-x-4">
        <li v-for="menuItem in []" :key="menuItem.id">
          <a :href="menuItem.url" class="text-gray-800 font-bold">{{ menuItem.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
const props = defineProps(['user'])
const data = await $fetch('/api/posts')
const user = props?.user || data?.[0]?.user
</script>