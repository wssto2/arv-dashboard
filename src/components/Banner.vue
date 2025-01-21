<script setup lang="ts">
import { computed } from 'vue';
import Icon from './Icon.vue';
import { IconKey } from '../icons';

const props = defineProps<{
	type: 'info' | 'warning' | 'danger' | 'success';
	icon?: IconKey;
}>();

const accents = {
	info: 'info',
	warning: 'warning',
	danger: 'danger',
	success: 'success',
};

const accent = computed(() => {
	return `alpha-${accents[props.type]}`;
});

const iconAccent = computed(() => {
	return `text-${accents[props.type]}`;
});

const finalIcon = computed<IconKey>(() => {
	if (props.icon) {
		return props.icon;
	}

	switch (props.type) {
		case 'info':
			return 'alertTriangle';
		case 'warning':
			return 'alertTriangle';
		case 'danger':
			return 'alertTriangle';
		case 'success':
			return 'alertTriangle';
	}
});
</script>

<template>
	<div :class="['rounded-xl', 'p-4', accent]">
		<div class="media">
			<div class="media-left media-middle">
				<icon :icon="finalIcon" :class="iconAccent" />
			</div>
			<div class="media-body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>