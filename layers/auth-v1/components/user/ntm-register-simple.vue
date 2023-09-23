<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-1/3">
      <h1 class="text-3xl font-bold mb-6">Register</h1>
      <form>
        <div class="mb-4">
          <label for="name" class="block mb-2">Name</label>
          <input type="text" id="name" class="w-full border border-gray-300 rounded px-3 py-2">
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-2">Email</label>
          <input type="email" id="email" class="w-full border border-gray-300 rounded px-3 py-2">
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2">Password</label>
          <input type="password" id="password" class="w-full border border-gray-300 rounded px-3 py-2">
        </div>
        <div class="mb-6">
          <label for="confirm-password" class="block mb-2">Confirm Password</label>
          <input type="password" id="confirm-password" class="w-full border border-gray-300 rounded px-3 py-2">
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  </div>
</template>