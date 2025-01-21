<script setup lang="ts">
import { ref, watch } from 'vue';
import Banner from '../Banner.vue';

const props = withDefaults(defineProps<{
	processing?: boolean;
	horizontal?: boolean;
	error?: string;
}>(), {
	processing: false,
	horizontal: false,
});

const form = ref<HTMLFormElement | null>(null);

const emits = defineEmits(['submit']);

function updateChildrenFields(processing: boolean) {
	if (! form.value) {
		return;
	}

	if (processing) {
		// Find all .form-group elements and add .processing class
		form.value?.querySelectorAll('.form-group').forEach((element) => {
			element.classList.add('processing');
		});
	} else {
		form.value?.querySelectorAll('.form-group').forEach((element) => {
			element.classList.remove('processing');
		});
	}
}

watch(() => props.processing, (value) => {
	updateChildrenFields(value);
}, { immediate: true });

</script>

<template>
	<form 
		ref="form" 
		:class="{'form-horizontal': props.horizontal}" 
		method="post" 
		@submit.prevent="emits('submit')" 
	>
		<banner type="warning" v-if="props.error">
			<strong>{{ props.error }}</strong>
		</banner>

		<slot></slot>
	</form>
</template>