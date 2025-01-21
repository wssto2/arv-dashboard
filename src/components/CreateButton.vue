<script setup lang="ts">
import CustomButton from './CustomButton.vue';

const props = defineProps<{
	keyboardShortcut?: KeyboardShortcut;
}>();
</script>

<template>
	<CustomButton type="button" appearance="primary" icon-before="functionAddFilled" size="lg" :keyboard-shortcut="props.keyboardShortcut">
		<slot></slot>
	</CustomButton>
</template>