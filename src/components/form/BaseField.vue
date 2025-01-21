<script setup lang="ts">
import { computed, HTMLAttributes, onMounted, ref } from 'vue';

const props = withDefaults(defineProps<{
	name?: string;
	processing?: boolean;
	label?: string;
	description?: string;
	error?: string;
	required?: boolean;
	editable?: boolean;
	addonLeft?: string;
	addonRight?: string;
	value?: string | number | boolean | null;
	horizontal?: boolean;
	skeletonStyle?: HTMLAttributes['style'];
}>(), {
	processing: false,
	required: false,
	editable: true,
	horizontal: false,
});

function rand(): string {
	return 'xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
	});
}

const finalFieldName = computed(() => {
	return props.name || `field-${rand()}`;
});

const horizontal = ref(props.horizontal);

const root = ref<HTMLElement | null>(null);

const labelAdditionalClass = computed(() => {
	if (! horizontal.value) {
		return;
	}

	// if (props.formSize === 'small') {
	// 		return 'control-label col-md-5';
	// }

	let out = ['col-md-4'];

	if (props.editable) {
		out.push('control-label');
	}

	if (! props.description) {
		out.push('no-margin-bottom');
	}

	return out.join(' ');
});

const fieldAdditionalClass = computed(() => {
	if (! horizontal.value) {
		return;
	}

	// if (this.formSize === 'small') {
	// 	return 'col-md-7';
	// }

	return 'col-md-8';
});

onMounted(() => {
	const parentForm = root.value?.closest('form');
	if (parentForm && parentForm.classList.contains('form-horizontal')) {
		horizontal.value = true;
	}
});
</script>

<template>
	<div ref="root" :class="['form-group', {'processing': props.processing}, {'has-error': props.error}]">
		<template v-if="props.editable">
			<label
				v-if="props.label"
				:for="finalFieldName"
				:class="['text-semibold', labelAdditionalClass]">{{ props.label }} <span v-if="props.required" class="text-danger">*</span>

				<small
						v-if="props.description && horizontal"
						class="text-muted"
						style="display: block; margin-top: 5px; font-weight: normal;"
						v-html="props.description"></small>
			</label>

			<small v-if="props.description && ! horizontal" style="margin-bottom: 8px; display: block; margin-top: -6px;"
							v-html="props.description"></small>

			<div :class="['field-inner', fieldAdditionalClass]">
					<slot></slot>

					<div class="field-skeleton skeleton" :style="props.skeletonStyle"></div>
			</div>
		</template>
		<template v-else>
			<label v-if="props.label" :class="['text-semibold', labelAdditionalClass]">{{ props.label }}</label>
			<div :class="['field-inner', fieldAdditionalClass]">
				<span v-if="props.value" class="display-block text-bold">
					<span v-if="props.addonLeft" v-html="props.addonLeft"></span>
					{{ props.value }}
					<span v-if="props.addonRight" v-html="props.addonRight"></span>
				</span>
				<span v-else class="display-block text-italic text-muted">Bez vrijednosti</span>
			</div>
		</template>
	</div>
</template>