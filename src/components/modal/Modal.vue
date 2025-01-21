<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue';
import { ref } from 'vue';

const props = withDefaults(defineProps<{
	width?: number;
	darkBody?: boolean;
	processing?: boolean;
}>(), {
	width: 600,
	darkBody: false,
	processing: false,
})

const visible = ref(false);
const maxHeight = ref(0);

watch(visible, (value) => {
	if (value) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = '';
	}
});

const showModal = () => {
	visible.value = true;
};

const hideModal = () => {
	if (props.processing) {
		return;
	}
	
	visible.value = false;
};

const closeOnEscape = (event: KeyboardEvent) => {
	if (event.key === 'Escape') {
		hideModal();
	}
};

const calculateMaxHeight = () => {
	requestAnimationFrame(() => {
		maxHeight.value = window.innerHeight - 300;
	});
};

onMounted(() => {
	calculateMaxHeight();
	window.addEventListener('resize', calculateMaxHeight);
	window.addEventListener('keydown', closeOnEscape);
});

onUnmounted(() => {
	window.removeEventListener('keydown', closeOnEscape);
	window.removeEventListener('resize', calculateMaxHeight);
});

// Expose the functions to the parent component
defineExpose({
	showModal,
	hideModal,
});
</script>

<template>
	<Teleport to="body">
		<div :class="['custom-modal-container', {visible: visible}]">
			<div :class="['custom-modal', {visible: visible}, {'dark-body': props.darkBody}]" :style="{width: props.width + 'px'}">
				<div class="custom-modal-header" v-if="$slots.header">
					<slot name="header"></slot>
					<button class="custom-modal-close" @click="hideModal"><icon icon="close" /></button>
				</div>
				<div class="custom-modal-body" :style="{ maxHeight: `${maxHeight}px` }">
					<slot></slot>
				</div>
				<div class="custom-modal-footer" v-if="$slots.footer">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</Teleport>
</template>