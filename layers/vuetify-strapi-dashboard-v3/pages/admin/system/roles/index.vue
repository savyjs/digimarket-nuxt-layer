<template>
  <div>
    <list-page :value="main"/>
  </div>
</template>
<script>

import fields from "./fields";
import config from "./config";

export default {
  layout: 'vsd',
  head: {
    title: 'User Roels'
  },
  data() {
    return {
      main: {
        ...config,
        fields
      }
    }
  }
}
</script>
