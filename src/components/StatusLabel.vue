<script setup lang="ts">
import { computed } from 'vue';

export type State = {
	value: string | number | boolean;
	label: string;
	accent: string;
}

const props = withDefaults(
	defineProps<{
		states?: State[]
	}>(),
	{
		states: () => [
			{ value: "0", label: 'Neaktivno', accent: 'warning' },
			{ value: "1", label: 'Aktivno', accent: 'success' },
		]
	}
);

const model = defineModel<string | number | boolean>();

const label = computed(() => {
	let modelValue = model.value?.toString();

	if (modelValue === 'true') {
		modelValue = '1';
	} else if (modelValue === 'false') {
		modelValue = '0';
	}

	const state = props.states.find(state => state.value.toString() === modelValue);
	return state ? state.label : 'Unknown';
});

const accent = computed(() => {
	let modelValue = model.value?.toString();

	if (modelValue === 'true') {
		modelValue = '1';
	} else if (modelValue === 'false') {
		modelValue = '0';
	}

	const state = props.states.find(state => state.value.toString() === modelValue);
	const finalAccent = state ? state.accent : 'default';

	const labels = ['default', 'primary', 'success', 'info', 'warning', 'danger'];

	return labels.includes(finalAccent) ? `label-${finalAccent}` : `bg-${finalAccent}`;
});
</script>

<template>
	<span :class="['label', accent]">{{ label }}</span>
</template>