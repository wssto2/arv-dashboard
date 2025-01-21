<script setup lang="ts">
import { computed } from 'vue';
import icons, { IconKey } from '../icons';

const props = withDefaults(defineProps<{
	icon: IconKey;
	width?: number | string;
}>(), {
	width: 18
});

const iconHtml = computed(() => {
	const icon = icons[props.icon];

	if (! icon) {
		return '';
	}

	// Replace all {size} placeholders with the width.
	return icon.replace(/{size}/g, props.width.toString());
});
</script>

<style scoped>

</style>

<template>
	<span style="display: inline-block; vertical-align: -4px;" v-html="iconHtml"></span>
</template>