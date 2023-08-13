<template>
  <list-page v-model="main"/>
</template>
<script>

import fields from "./fields";
import Info from "./config";

export default {
  head() {
    return {
      title: Info.title
    }
  },
  data() {
    return {
      main: {
        fields,
        ...Info
      }
    }
  }
}
</script>

