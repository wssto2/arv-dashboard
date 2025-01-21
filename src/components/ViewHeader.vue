<script setup lang="ts">
import { computed } from 'vue';
import Icon from './Icon.vue';
import type { IconKey } from '../icons';
import type { AccentKey } from '../accents';

const props = defineProps<{
	title: string;
	description?: string;
	icon?: IconKey;
	accent?: AccentKey;
}>();

const iconDecorationClassList = computed(() => {
	if (! props.accent) {
		return ['bg-primary'];
	}
	
	return [`bg-${props.accent}`];
});

</script>

<template>
	<div class="view-header" style="user-select: none;">
		<div class="media">
			<div class="media-left media-middle" v-if="props.icon">
				<div :class="['icon-decoration', 'md', ...iconDecorationClassList ]">
					<icon :icon="props.icon" :width="20" />
				</div>
			</div>
			<div class="media-body media-middle">
				<h3 class="text-bold no-margin">{{ props.title }}</h3>
				<p class="no-margin texdt-grey-600">{{ props.description }}</p>
			</div>
		</div>

		<div class="view-header__actions">
			<slot name="actions" />
		</div>
	</div>
</template>

<style scoped>

</style>