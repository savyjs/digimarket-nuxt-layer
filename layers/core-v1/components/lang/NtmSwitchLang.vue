<template>
  <div>
    <div class="flex" v-if="$i18n?.locale">
      <select v-model="$i18n.locale" class="btn py-1 dark:text-white">
        <option v-for="locale in $i18n.availableLocales" class="bg-gray-700" selected :key="`locale-${locale}`"
                :value="locale">{{ locale }}
        </option>
      </select>
    </div>
  </div>
</template>
