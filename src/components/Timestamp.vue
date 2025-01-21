<script setup lang="ts">
import { formatDate } from '../helpers';

const props = withDefaults(defineProps<{
	date: string;
}>(), {
	date: '',
});
</script>

<template>
	<span>
		<icon icon="calendarEventFill" class="position-left text-grey-600" /> {{ formatDate(props.date) }}
	</span>
</template>