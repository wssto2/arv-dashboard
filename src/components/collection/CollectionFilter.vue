<script setup lang="ts">
import { computed, ref, onBeforeUnmount } from 'vue';
import Icon from '../Icon.vue';
import type { CollectionFilter } from '.';

const props = defineProps<{
	filter: CollectionFilter
	selectedFilters: Record<string, any>;
}>();

const emits = defineEmits(['updateFilter']);

const selectedValue = computed(() => {
	return props.selectedFilters[props.filter.key];
});

const selectedOption = computed(() => {
	if (! selectedValue.value) {
		return null;
	}

	return props.filter.options?.find(option => option.value === selectedValue.value);
});

const selectedCount = computed(() => {
	if (! selectedValue.value) {
		return 0;
	}

	return Array.isArray(selectedValue.value) ? selectedValue.value.length : 1;
});

const shouldShowCountBadge = computed(() => {
	return selectedCount.value > 1;
});

const isDropdownOpen = ref(false);

function toggleDropdown() {
	isDropdownOpen.value = !isDropdownOpen.value;
}

function handleClicks(event: MouseEvent) {
	if (! event || ! event.target) {
		return;
	}
	
	const target = event.target as HTMLElement;

	if (! target.closest('.collection-filter')) {
		isDropdownOpen.value = false;
	}
}

function resetFilter() {
	emits('updateFilter', props.filter.key, null);
}

function setFilter(option: { label: string; value: any }) {
	emits('updateFilter', props.filter.key, option.value);
}

// Close dropdown when clicking outside of it
window.addEventListener('click', handleClicks);

onBeforeUnmount(() => {
	window.removeEventListener('click', handleClicks);
});
</script>

<template>
	<div class="collection-filter">
		<div :class="['btn btn-default btn-rounded']" @click.prevent="toggleDropdown">
			<icon v-if="props.filter.icon" :icon="props.filter.icon" :class="['position-left', selectedValue ? 'text-primary' : 'text-grey']" />
			<span class="mr-5">{{ selectedOption ? selectedOption.label : props.filter.label }}</span>
			<span class="badge ml-5 mr-5" v-if="shouldShowCountBadge">{{ selectedCount }}</span>
			<span class="caret"></span>
		</div>
		<ul :class="['dropdown-menu', {show: isDropdownOpen}]">
			<li v-if="! props.filter.withoutDefaultOption">
				<a href="#" @click.prevent="resetFilter">{{ props.filter.defaultOptionTitle ? props.filter.defaultOptionTitle : 'Prikaži sve' }}</a>
			</li>
			<li v-if="! props.filter.withoutDefaultOption" class="divider"></li>
			<li 
				v-for="option in props.filter.options" 
				:key="option.value"
				:class="{'active': selectedValue === option.value}"
			>
				<a href="#" @click.prevent="setFilter(option)">{{ option.label }}</a>
			</li>
		</ul>
	</div>
</template>