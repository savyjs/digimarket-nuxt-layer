<template>
  <v-container class="my-1">
    <ui-vsd-v-card-header>
      <v-row>
        <v-col sm="12" md="6" class="d-flex justify-start align-center">
          <h4 :class="name.xsAndDown ? 'font-12' : ''">
            <v-icon class="mx-1" small>{{ schema?.headerIcon || schema?.icon || 'archive' }}</v-icon>
            {{ $t(schema?.info?.displayName || 'Title') }}
          </h4>
        </v-col>
        <v-col sm="12" md="6" class="d-flex justify-end align-center">
          <v-btn v-if="schema?.deleteAll || true" elevation="5" small class="red--text mx-2" color="white"
                 @click="deleteItems">
            <v-icon class="mx-1">delete</v-icon>
            <b>{{ $t("delete") }}</b>
          </v-btn>
          <v-btn v-if="schema?.newItem || true" elevation="5" small class="mx-1 success--text"
                 color="white" :to="schema?.uri ? (schema?.uri + '/create') : 'create'">
            <v-icon class="mx-1" small icon="mdi-add" />
            <b>{{ $t("create") }}</b>
          </v-btn>
          <download-excel :fetch="excelData" :name="schema?.title+'.xls'" :title="schema?.title">
            <v-btn :disabled="!list?.length" v-if="schema?.excel || true" elevation="5" small
                   class="white--text mx-1" color="success"
                   prepend-icon="excel"
            >
              <v-icon class="mx-1">move_to_inbox</v-icon>
              {{ $t("download_excel") }}
            </v-btn>
          </download-excel>
          <v-btn :title="$t('refresh')" fab icon v-if="schema?.refresh || true" small
                 class="mx-1"
                 color="white"
                 @click="loadData({},{})">
            <v-icon>refresh</v-icon>
          </v-btn>
          <v-btn :title="$t('previous')" fab icon v-if="schema?.backBtn || true" small
                 class="mx-1"
                 color="white"
                 @click="$router.go(-1)">
            <v-icon>keyboard_backspace</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </ui-vsd-v-card-header>
    <v-card class="pt-3">
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
    <v-expansion-panels class="my-1" v-if="schema?.searchable || true">
      <v-expansion-panel>
        <v-expansion-panel-header>
            <span>
              <v-icon class="mx-1">search</v-icon>
            {{ $t("search") }}
            </span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <search
              :hasSearch="schema?.searchable || true"
              v-model="search"
              :fields="fields"
              @input="doSearch"
          ></search>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels class="my-1" v-if="schema?.filterable || true">
      <v-expansion-panel>
        <v-expansion-panel-header>
            <span>
              <v-icon class="mx-1">filter_list</v-icon>
            {{ $t("filters") }}
            </span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <filters
              :hasFilter="schema?.filterable || true"
              v-model="filter"
              :fields="fields"
              @input="doFilter"
          ></filters>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels class="my-1" v-if="schema?.reportable || false">
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
            :hasFilter="schema?.filterable || true"
            :hasSort="schema?.sortable || true"
            :hasSearch="schema?.searchable || true"
            :showSelect="schema?.deleteAll || true"
            :showExpand="true"
            :length="length"
            :name="name"
            :resource="resource"
            :options="options"
            :loading="loading"
            :fields="fields"
            :title="title"
            :main="schema"
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
</template>
<script setup>
import {useDisplay} from 'vuetify'

const {schema} = defineProps(['schema'])

const {name} = useDisplay()

function deleteItems() {
}
</script>