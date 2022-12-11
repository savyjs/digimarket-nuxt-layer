<template>
  <div class="card-primary p-0">
    <div class="list list-primary">
      <nuxt-link class="list-item" v-for="item in items" :to="item?.link">
        <div v-if="item.svg" class="list-item-icon">
          <svg class="icon icon-small">
            <use :href="`#${item.svg}`"/>
          </svg>
        </div>
        <div v-else-if="item.icon" class="list-item-icon">
          <i :class="item.icon"></i>
        </div>
        <div v-if="item.text" class="list-item-text">
          {{ item.text }}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup>
const {items} = defineProps(['items']);
</script>