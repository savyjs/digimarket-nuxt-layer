<template>
  <div class="card-primary p-0">
    <slot name="topsidebar">
    </slot>
    <div class="list list-primary list-sidemenu">
      <template v-for="(item,index) in items">
        <nuxt-link class="list-item" :to="item?.link">
          <div v-if="item.svg" class="list-item-icon">
            <svg class="icon w-5 h-5">
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
        <div v-if="index+1 != items.length" class="border-b-[1px] mx-5"></div>
      </template>
    </div>
  </div>
</template>
<script setup>
const {items} = defineProps(['items']);
</script>