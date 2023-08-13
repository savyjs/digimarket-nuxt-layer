<template>
  <show-page
    :id="id"
    v-model="main"
  />
</template>
<script>
import Fields from "./fields";
import Info from "./config";

export default {
  head() {
    return {
      title: Info.title
    }
  },
  data() {
    return {
      id: undefined,
      main: {
        data: {},
        fields: Fields,
        ...Info
      }
    }
  },
  async asyncData({params}) {
    return {id: params.id}
  }
}
</script>

