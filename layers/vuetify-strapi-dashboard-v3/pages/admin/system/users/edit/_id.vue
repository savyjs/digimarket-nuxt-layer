<template>
  <data-form-page
    v-model="main"
    :id="id"
  />
</template>
<script>
import Fields from "../fields";
import Info from "../config";

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
        ...Info,
      }
    }
  },
  async asyncData({params}) {
    return {id: params.id}
  }
}
</script>

