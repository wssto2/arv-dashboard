<script setup lang="ts">
import { ref } from 'vue'
import WidgetCanvas from './components/WidgetCanvas.vue'

const widgets = ref(window?.DASHBOARD_STATE?.widgets || [])
</script>

<template>
  <widget-canvas :widgets="widgets" />
</template>

<style>
.panel-heading-meta {
  padding-right: 10px;
  border-right: 1px solid #ddd;
  margin-right: 10px;
}
</style>