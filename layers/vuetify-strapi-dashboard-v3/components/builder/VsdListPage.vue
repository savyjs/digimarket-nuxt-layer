<template>
  <section class="mt-0">
    <v-container fluid="" class="pt-0 mt-0">
      <v-card>
        <ui-vsd-v-card-header
            :margin-top="name.xsAndDown ? '10px' : 0"
            :margin-bottom="name.xsAndDown ? '20px' : 0"
            :color="value?.color || 'primary'"
            margin-right="1%"
            :height="name.xsAndDown ? '100px' : undefined"
        >
          <v-row>
            <v-col sm="12" md="6" class="d-flex justify-start align-center">
              <h4 :class="name.xsAndDown ? 'font-12' : ''">
                <v-icon class="mx-1" small>{{ config?.headerIcon || value?.icon || 'archive' }}</v-icon>
                {{ $t(config?.title || 'Title of table') }}
              </h4>
            </v-col>
            <v-col sm="12" md="6" class="d-flex justify-end align-center">
              <v-btn v-if="value?.deleteAll || true" elevation="5" small class="red--text mx-2" color="white"
                     @click="deleteItems">
                <v-icon class="mx-1">delete</v-icon>
                <b>{{ $t("delete") }}</b>
              </v-btn>
              <v-btn v-if="value?.newItem || true" elevation="5" small class="mx-1 success--text"
                     color="white" :to="name + '/create'">
                <v-icon class="mx-1" small>add</v-icon>
                <b>{{ $t("create") }}</b>
              </v-btn>
              <download-excel :fetch="excelData" :name="title+'.xls'" :title="title">
                <v-btn :disabled="!list?.length" v-if="value?.excel || true" elevation="5" small
                       class="white--text mx-1" color="success">
                  <v-icon class="mx-1">move_to_inbox</v-icon>
                  {{ $t("download_excel") }}
                </v-btn>
              </download-excel>
              <v-btn :title="$t('refresh')" fab icon v-if="value?.refresh || true" small
                     class="mx-1"
                     color="white"
                     @click="loadData({},{})">
                <v-icon>refresh</v-icon>
              </v-btn>
              <v-btn :title="$t('previous')" fab icon v-if="value?.backBtn || true" small
                     class="mx-1"
                     color="white"
                     @click="$router.go(-1)">
                <v-icon>keyboard_backspace</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </ui-vsd-v-card-header>
        <v-card-actions>
          <v-row class="pa-1 pt-2 text-left">
            <v-col md="12" class="pa-1 px-5 justify-end align-center">
              <span>
                <small>
                {{ $t("total") }}:  {{ length || 0 }}
                </small>
              </span>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
      <v-expansion-panels class="my-1" v-if="value?.searchable || true">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <span>
              <v-icon class="mx-1">search</v-icon>
            {{ $t("search") }}
            </span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <search
                :hasSearch="value?.searchable || true"
                v-model="search"
                :fields="fields"
                @input="doSearch"
            ></search>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels class="my-1" v-if="value?.filterable || true">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <span>
              <v-icon class="mx-1">filter_list</v-icon>
            {{ $t("filters") }}
            </span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <filters
                :hasFilter="value?.filterable || true"
                v-model="filter"
                :fields="fields"
                @input="doFilter"
            ></filters>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels class="my-1" v-if="value?.reportable || false">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <span>
              <v-icon class="mx-1">bolt</v-icon>
            {{ $t("report_filters") }}
            </span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <report
                v-model="report"
                :fields="fields"
                @input="doReport"
                @excel="doExcel"
            ></report>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-card>
        <v-card-title>
        </v-card-title>
        <v-card-text>
          <table-list
              ref="tableList"
              :hasFilter="value?.filterable || true"
              :hasSort="value?.sortable || true"
              :hasSearch="value?.searchable || true"
              :showSelect="value?.deleteAll || true"
              :showExpand="true"
              :length="length"
              :name="name"
              :resource="resource"
              :options="options"
              :loading="loading"
              :fields="fields"
              :title="title"
              :main="value"
              :items="list"
              @deleteItem="deleteItem"
              @input="search"
              @update="update"
              @reload="loadData"
              @options="setOptions"
          />
        </v-card-text>
      </v-card>
    </v-container>
  </section>
</template>
<script setup>
import {useDisplay} from 'vuetify'

const value = defineProps(['value'])
const {config, fields} = value

const {name} = useDisplay()
</script>