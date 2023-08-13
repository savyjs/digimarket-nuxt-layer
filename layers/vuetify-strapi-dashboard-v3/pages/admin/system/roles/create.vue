<template>
  <section>
    <v-container grid-list-lg>
      <v-card :loading="loader">
        <vsd-v-card-header margin-right="1%" width="98%">
          <h3 class="px-2">
            <v-icon class="mx-1">edit</v-icon>
            {{ title }}
          </h3>
          <v-spacer/>
          <v-btn :loading="loader" small color="warning" class="mx-4" :to="back">
            <v-icon class="mx-1">backspace</v-icon>
            {{ $t('back') }}
          </v-btn>
          <v-btn :disabled="id && id!=formData.id" :loading="loader" class="px-5" small color="success"
                 @click="save">
            <v-icon class="mx-1">save</v-icon>
            {{ $t('save') }}
          </v-btn>
        </vsd-v-card-header>
        <v-card-text @keypress.enter="save">
          <role-data-form
            :permissionsConfig="permissionsConfig"
            :resource="resource"
            ref="form"
            type="create"
            name="name"
            title="title"
            v-model="formData"></role-data-form>
        </v-card-text>
        <v-card-actions class="text-left">
          <v-layout wrap row class="pa-1">
            <v-flex xs12 class="pa-1 text-left">
              <v-btn :loading="loader" small color="success" @click="save">
                <v-icon class="mx-1">save</v-icon>
                {{ $t('save') }}
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-container>
  </section>
</template>

<i18n>
{
  "en": {
    "saved_successfully": "saved successfully!"
  },
  "fa": {
    "saved_successfully": "با موفقیت ذخیره شد"
  }
}
</i18n>
<script>

const permissionsConfig = require(`./permissionConfig`).default;
const
  name = 'system/roles',
  title = 'role',
  resource = 'users-permissions/roles',
  back = '/admin/' + name

export default {
  head() {
    return {
      title: !this.id ? this.$t('new') : this.$t('edit'),
    }
  },
  data() {
    return {
      permissionsConfig,
      id: null,
      loader: false,
      name, title, back, resource,
      formData: {},
      permissions: [],
    }
  },
  mounted() {
    if (this.id) this.loadData();
  },
  methods: {
    loadData() {
      this.loading = true;
      this.$axios.$get(resource + '/' + this.id).then(res => {
        this.formData = _.get(res, 'role', {});
      }).catch(err => {
        this.$notifError(err)
      }).finally(() => {
        this.loading = false;
      })
    },
    save() {
      this.doSaveSendDataToServer();
    },
    doSaveSendDataToServer() {
      this.loader = true;
      let id = _.get(this.formData, 'id', null);
      let method = id ? 'put' : 'post';
      let url = id ? resource + '/' + id : resource;
      let data = _.cloneDeep(this.formData);
      console.log({data})
      this.$axios.$request({method, url, data}).then(res => {
        this.$notifSuccess(this.$t('saved_successfully'));
        this.$router.push(back)
      }).catch(err => {
        if (err.errors) {
          this.$refs.form.setErrors(err.errors);
          return;
        }
        this.$notifError(err)
      }).finally(() => {
        this.loader = false;
      })
    }
  },
  async asyncData({params}) {
    return {id: params.id}
  }
}
</script>
