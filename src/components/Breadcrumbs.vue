<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';

export type BreadcrumbItem = { 
	name: string; 
	route?: RouteLocationRaw;
};

const props = defineProps<{
	items: BreadcrumbItem[];
	withHome?: boolean;
}>();
</script>

<template>
	<div class="breadcrumbs" style="user-select: none;">
		<template v-if="props.withHome">
			<router-link to="/" class="persistent"><icon icon="home6" /></router-link>
			<icon icon="arrowDropRight" class="persistent" />
		</template>
		<template v-for="(item, index) in props.items">
			<router-link v-if="item.route" :to="item.route" :class="[{'persistent': index === props.items.length - 1}]">{{ item.name }}</router-link>
			<span v-else :class="['breadcrumb-nolink', {'persistent': index === props.items.length - 1}]">{{ item.name }}</span>

			<icon v-if="index < props.items.length - 1" icon="arrowDropRight" />
		</template>
	</div>
</template>