<script setup lang="ts">
import type { IconKey } from '../../icons';
import type { AccentKey } from '../../accents';
import { computed } from 'vue';
import Icon from '../Icon.vue';
import { RouteLocationRaw } from 'vue-router';

const props = withDefaults(defineProps<{
	route?: RouteLocationRaw;
	title: string;
	description?: string | null;
	icon?: IconKey;
	accent?: AccentKey;
	withDecoration?: boolean;
	decorationSize?: 'xs' | 'sm' | 'md' | 'lg';
}>(), {
	description: null,
	withDecoration: false,
	decorationSize: 'xs',
});

const iconDecorationClassList = computed(() => {
	if (! props.accent) {
		return ['alpha-primary', 'text-primary-800'];
	}
	
	return [`alpha-${props.accent}`, `text-${props.accent}-800`];
});

const firstLetter = computed(() => props.title[0]);

const emit = defineEmits(['click']);
</script>

<template>
	<router-link v-if="route" :to="route" class="media display-block row-target" tabindex="0">
		<div class="media-left media-middle" v-if="props.icon || props.withDecoration">
			<span :class="['icon-decoration', props.decorationSize, ...iconDecorationClassList ]">
				<icon v-if="props.icon" :icon="props.icon" />
				<i v-else>{{ firstLetter }}</i>
			</span>
		</div>
		<div class="media-body media-middle">
			<p class="media-heading no-margin text-semibold">{{ props.title }}</p>
			<small class="text-default">{{ props.description }}</small>
			<slot></slot>
		</div>
	</router-link>
	<a v-else href="#" @click.prevent="emit('click')" class="media display-block row-target" tabindex="0">
		<div class="media-left media-middle" v-if="props.icon || props.withDecoration">
			<span :class="['icon-decoration', props.decorationSize, ...iconDecorationClassList ]">
				<icon v-if="props.icon" :icon="props.icon" />
				<i v-else>{{ firstLetter }}</i>
			</span>
		</div>
		<div class="media-body media-middle">
			<p class="media-heading no-margin text-semibold">{{ props.title }}</p>
			<small class="text-default">{{ props.description }}</small>
			<slot></slot>
		</div>
	</a>
</template>