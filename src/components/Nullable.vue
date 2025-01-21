<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	content: string;
}>();

const hasContent = computed(() => {
	return props.content !== '';
});
</script>

<template>
	<span v-if="hasContent">{{ props.content }}</span>
	<span v-else class="text-muted">Nije uneseno</span>
</template>