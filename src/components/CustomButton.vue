<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount } from 'vue';
import Icon from './Icon.vue';
import type { IconKey } from '../icons';

const props = withDefaults(defineProps<{
	type?: 'button' | 'link';
	href?: string;
	appearance?: 'primary' | 'default' | 'warning' | 'danger' | 'success' | 'info' | 'link';
	iconBefore?: IconKey;
	iconAfter?: IconKey;
	size?: 'sm' | 'md' | 'lg';
	keyboardShortcut?: KeyboardShortcut;
	disabled?: boolean;
	submit?: boolean;
}>(), {
	type: 'button',
	appearance: 'default',
	size: 'md',
	disabled: false,
	submit: false,
});

const emits = defineEmits(['click']);

const classList = computed(() => {
	return [
		'btn',
		'btn-custom',
		`btn-${props.appearance}`,
		`btn-${props.size}`,
		{ 'disabled': props.disabled },
	];
});

function handleKeyboardShortcut(event: KeyboardEvent) {
	if (! props.keyboardShortcut) {
		return;
	}

	if (props.disabled) {
		return;
	}

	if (
		event.key === props.keyboardShortcut.key.toLowerCase() &&
		event.ctrlKey === (props.keyboardShortcut.ctrlKey || false) &&
		event.shiftKey === (props.keyboardShortcut.shiftKey || false) &&
		event.altKey === (props.keyboardShortcut.altKey || false) &&
		event.metaKey === (props.keyboardShortcut.metaKey || false)
	) {
		event.preventDefault();
		event.stopPropagation();
		
		// Emit a custom event
		emits('click');
	}
}

onMounted(() => {
	if (props.keyboardShortcut) {
		// Check if the event is already registered
		if (window.registeredKeyboardShortcuts?.includes(props.keyboardShortcut)) {
			console.log('Keyboard shortcut already registered');
			return;
		}

		window.addEventListener('keydown', handleKeyboardShortcut);

		// Store the registered event
		if (! window.registeredKeyboardShortcuts) {
			window.registeredKeyboardShortcuts = [];
		}

		window.registeredKeyboardShortcuts.push(props.keyboardShortcut);
	}
});

onBeforeUnmount(() => {
	if (props.keyboardShortcut) {
		window.removeEventListener('keydown', handleKeyboardShortcut);

		// Remove the registered event
		if (window.registeredKeyboardShortcuts) {
			const index = window.registeredKeyboardShortcuts.indexOf(props.keyboardShortcut);
			if (index > -1) {
				window.registeredKeyboardShortcuts.splice(index, 1);
			}
		}
	}
});
</script>

<template>
	<component 
		:is="props.type === 'link' ? 'a' : 'button'" 
		:href="props.type === 'link' && props.href ? props.href : undefined" 
		:class="classList"
		:disabled="props.disabled"
		:aria-disabled="props.disabled"
		:type="props.submit ? 'submit' : 'button'"
		@click="$emit('click')"
	>
		<icon v-if="props.iconBefore" :icon="props.iconBefore" class="position-left" />
		<slot></slot>
		<icon v-if="props.iconAfter" :icon="props.iconAfter" class="position-right" />

		<span class="keyboard-shortcut ml-10" v-if="keyboardShortcut">
			<i v-if="keyboardShortcut.ctrlKey">CTRL</i>
			<i v-if="keyboardShortcut.shiftKey">SHIFT</i>
			<i v-if="keyboardShortcut.altKey">ALT</i>
			<i v-if="keyboardShortcut.metaKey">⌘</i>
			<i>{{ keyboardShortcut.key.toUpperCase() }}</i>
		</span>
	</component>
</template>