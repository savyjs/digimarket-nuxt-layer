<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-1/3">
      <h1 class="text-2xl font-bold mb-4">Login Form</h1>
      <form>
        <div class="mb-4">
          <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input type="text" id="username" class="border border-gray-400 rounded px-3 py-2 w-full">
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input type="password" id="password" class="border border-gray-400 rounded px-3 py-2 w-full">
        </div>
        <button type="submit" class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
      </form>
    </div>
  </div>
</template>
