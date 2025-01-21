<script setup lang="ts">
import { ref, computed } from 'vue';
import BaseField from './BaseField.vue';

const props = withDefaults(defineProps<{
	type?: string;
	name?: string;
	processing?: boolean;
	label?: string;
	description?: string;
	error?: string;
	required?: boolean;
	editable?: boolean;
	addonLeft?: string;
	addonRight?: string;
	textAlign?: TextAlign;
	numeric?: boolean,
	email?: boolean,
  decimalPlaces?: number,
	placeholder?: string;
	minLength?: number;
	maxLength?: number;
	minNumber?: number;
	pattern?: string;
	disabled?: boolean;
	horizontal?: boolean;
}>(), {
	type: 'text',
	processing: false,
	required: false,
	editable: true,
	textAlign: 'left',
	numeric: false,
	email: false,
	decimalPlaces: 0,
	disabled: false,
	horizontal: false,
});

const model = defineModel<string | number | null>();

const inputElement = ref<HTMLInputElement | null>(null);

const isFocused = ref(false);

const inputMode = computed(() => {
  if (props.numeric && props.decimalPlaces > 0) {
    return "decimal";
  }

  if (props.numeric) {
    return "numeric";
  }

  if (props.email) {
    return "email";
  }

  return "text";
});

// Value: 1234.56
// Display value: 1.234,56
let displayValue = computed({
  get: () => {
    if (! model.value) {
      return null;
    }

    if (! props.numeric) {
      return model.value;
    }

    if (isFocused.value) {
      return model.value.toString().replace(".", ",");
    }

    return model.value.toLocaleString("hr", { minimumFractionDigits: props.decimalPlaces, maximumFractionDigits: props.decimalPlaces });
  },
  set: (value: string | number | null) => {
    if (! value) {
      model.value = null;
      return;
    }

    if (! props.numeric) {
      model.value = value;
      return;
    }

    let parsedValue = parseFloat(parseFloat(value.toString().replace(',', '.')).toFixed(props.decimalPlaces));

    if (isNaN(parsedValue)) {
      model.value = null;
      return;
    }

    model.value = parsedValue;
  }
});

// Function to handle keydown event
// This function will prevent the user from typing anything other than numbers and a comma or dot if the field is numeric
const onInputKeyDown = (event: KeyboardEvent) => {
  if (! props.numeric) {
    return;
  }

  // Allow: backspace, delete, tab, escape, enter, comma, dot and numbers
  let allowedKeys = ["Backspace", "Delete", "Tab", "Escape", "Enter", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "ArrowLeft", "ArrowRight", "Home", "End"];

  if (props.decimalPlaces > 0) {
    // Allow comma and dot only if there is no comma or dot in the input
    if (! displayValue.value?.toString().includes(",") && ! displayValue.value?.toString().includes(".")) {
      allowedKeys.push(".", ",");
    }
  }

  // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
  if ((event.ctrlKey || event.metaKey) && (event.key === "a" || event.key === "A" || event.key === "v" || event.key === "V" || event.key === "c" || event.key === "C" || event.key === "x" || event.key === "X")) {
    return;
  }

  if (allowedKeys.includes(event.key) || event.ctrlKey) {
    return;
  }

  event.preventDefault();
}

function focus() {
	inputElement.value?.focus();
}

const name = `text_field_${Math.random().toString(36).substring(2, 9)}`;

defineExpose({
	focus,
});
</script>

<template>
	<base-field 
		:name="props.name" 
		:processing="props.processing" 
		:label="props.label" 
		:description="props.description" 
		:error="props.error" 
		:required="props.required" 
		:editable="props.editable" 
		:addon-left="props.addonLeft" 
		:addon-right="props.addonRight" 
		:horizontal="props.horizontal"
		:value="model"
	>

		<div :class="[{'input-group': addonLeft || addonRight}]">
			<span class="input-group-addon" v-if="addonLeft" v-html="addonLeft"></span>

			<input
				ref="inputElement"
				:type="props.type || 'text'"
				:class="['form-control', {'text-right': props.numeric}, `text-${textAlign}`]"
				:name="name"
				v-model="displayValue"
				:required="props.required"
				:disabled="props.disabled"
				:minlength="props.minLength"
				:maxlength="props.maxLength"
				:data-minnumber="props.minNumber"
				:placeholder="props.placeholder"
				:pattern="props.pattern"
				:inputmode="inputMode"
        @keydown="onInputKeyDown"
				@focus="isFocused = true"
				@blur="isFocused = false"
			/>

			<span class="input-group-addon" v-if="addonRight" v-html="addonRight"></span>
		</div>

		<span v-if="props.error" class="display-block mt-10" style="color: #d84315;">
			<icon icon="alertTriangle" class="position-left" /> {{ props.error }}
		</span>
	</base-field>
</template>