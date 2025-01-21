<script setup lang="ts">
import { ref, computed, nextTick, watch, onMounted, onBeforeUnmount } from 'vue';
import BaseField from './BaseField.vue';
import type { IconKey } from '../../icons';
import { randString } from '../../helpers';

export type Option = {
	[key: string]: any;
};

type GroupedOptions = {
	[group: string]: Option[];
};

const props = withDefaults(defineProps<{
	name?: string;
	processing?: boolean;
	label?: string;
	description?: string;
	error?: string;
	required?: boolean;
	editable?: boolean;
	iconBefore?: IconKey;
	iconAfter?: IconKey;
	textAlign?: TextAlign;
	numeric?: boolean,
	disabled?: boolean;
	horizontal?: boolean;
	options: Option[] | GroupedOptions;
	optionsValue?: string;
	optionsLabel?: string;
	multiple?: boolean;
	withoutDefaultOption?: boolean;
	optionsFormatter?: (option: Option) => string;
}>(), {
	processing: false,
	required: false,
	editable: true,
	textAlign: 'left',
	numeric: false,
	disabled: false,
	horizontal: false,
	optionsValue: 'value',
	optionsLabel: 'label',
	multiple: false,
	withoutDefaultOption: false,
});

const model = defineModel<string | number | null | undefined>();

const open = ref(false);
const focused = ref(false);
const internalOptions = ref<Option[]>([]);
const selectedOptions = ref<Option[]>([]);
const id = randString(10);
const searchQuery = ref('');
const highlightedOptionIndex = ref(-1);
const container = ref<HTMLDivElement | null>(null);
const selection = ref<HTMLDivElement | null>(null);
const multipleSearchInput = ref<HTMLInputElement | null>(null);
const resultsSearchInput = ref<HTMLInputElement | null>(null);

const finalValue = computed(() => {
	if (! props.multiple) {
			// 17.12.2024. - Ovo sam morao staviti jer defaultna opcija ima value null, a ako je model.value === 0 onda se ne prikazuje defaultna opcija
			if (model.value === 0) {
				return null;
			}

			return model.value;
	}

	if (! model.value || typeof model.value !== 'object' || !Array.isArray(model.value)) {
			return [];
	}

	return model.value;
})

const presentationValue = computed(() => {
	if (finalValue.value === null) {
		return '';
	}

	let option = internalOptions.value.find(option => option?.[props.optionsValue] == finalValue.value);

	return option ? formatOption(option) : '';
});

const searchInputWidth = computed(() => (searchQuery.value?.length || 1) * 8 + 20);

const filteredOptions = computed(() => {
	if (!searchQuery.value) {
		return internalOptions.value;
	}

	const query = searchQuery.value.toLowerCase();

	if (Array.isArray(props.options)) {
		return props.options.filter(option => option[props.optionsLabel].toString().toLowerCase().includes(query));
	}

	const filteredOptions: GroupedOptions = {};

	for (const group in props.options) {
		filteredOptions[group] = props.options[group].filter(option => option[props.optionsLabel].toLowerCase().includes(query));
	}

	return filteredOptions;
});

function isOptionGroup(option: Option | GroupedOptions): option is GroupedOptions {
	return typeof option === 'object' && !Array.isArray(option);
}

function handleSelectionClick() {
	if (props.disabled) {
		return;
	}

	if (open.value) {
		open.value = false;
		return;
	}

	open.value = true;

	if (props.multiple) {
			multipleSearchInput.value?.focus();
	} else {
		nextTick(() => {
				resultsSearchInput.value?.focus();
		});
	}
}

function optionPresentationValue(option: Option): string {
	if (props.optionsFormatter) {
		return props.optionsFormatter(option);
	}

	return option?.[props.optionsLabel] || '';
}

function removeSelectedOption(option: Option) {
	const index = selectedOptions.value.indexOf(option);

	if (index !== -1) {
		selectedOptions.value.splice(index, 1);
	}
}

function isResultOptionSelected(option: Option): boolean {
	return selectedOptions.value.includes(option);
}

function onOptionClick(option: Option) {
	if (props.multiple) {
		if (!selectedOptions.value.includes(option)) {
			selectedOptions.value.push(option);
		}
	} else {
		model.value = option[props.optionsValue];
		open.value = false;
	}
}

function formatOption(option: Option): string {
	if (props.optionsFormatter) {
		return props.optionsFormatter(option);
	}

	return option[props.optionsLabel];
}

function cloneObjectDeep(obj: any): any {
	return JSON.parse(JSON.stringify(obj));
}

function scrollToHighlightedOption() {
	const highlightedOption = document.querySelector('.select-box-options .highlighted');

	if (highlightedOption) {
		highlightedOption.scrollIntoView({ block: 'nearest' });
	}
}

// Close select box when clicking outside container
function handleMouseEvents(e: MouseEvent) {
	if (! open.value) {
		return;
	}

	if (container.value && ! container.value.contains(e.target as Node)) {
		open.value = false;
	}
}

function handleKeyEvents(e: KeyboardEvent) {
	if (! open.value && (e.key === 'Enter' || e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Space')) {
			e.preventDefault();
			open.value = true;
			if (! props.multiple) {
				nextTick(() => {
					resultsSearchInput.value?.focus();
				});
			}
			return;
	}

	if (! props.multiple && ! open.value) {
		return;
	}

	if (e.key === 'ArrowDown') {
		e.preventDefault();

		if (highlightedOptionIndex.value === null) {
			highlightedOptionIndex.value = 0;
		} else {
			if (highlightedOptionIndex.value < (filteredOptions.value as Option[]).length - 1) {
				highlightedOptionIndex.value++;
			} else {
				highlightedOptionIndex.value = 0;
			}
		}

		scrollToHighlightedOption();
	}

	if (e.key === 'ArrowUp') {
		e.preventDefault();

		if (highlightedOptionIndex.value === null) {
			highlightedOptionIndex.value = (filteredOptions.value as Option[]).length - 1;
		} else {
			if (highlightedOptionIndex.value > 0) {
				highlightedOptionIndex.value--;
			} else {
				highlightedOptionIndex.value = (filteredOptions.value as Option[]).length - 1;
			}
		}

		scrollToHighlightedOption();
	}

	if (e.key === 'Enter') {
		e.preventDefault();

		// If there is a highlighted option, select it
		if (highlightedOptionIndex.value >= 0 && (filteredOptions.value as Option[]).length > 0) {
			onOptionClick((filteredOptions.value as Option[])[highlightedOptionIndex.value]);
		}
		// If there is no highlighted option, select the first one
		else if ((filteredOptions.value as Option[]).length > 0) {
			const firstOption = (filteredOptions.value as Option[])[0];
			
			if (firstOption) {
				onOptionClick(firstOption);
			}
		}
	}

	if (e.key === 'Backspace' && props.multiple && searchQuery.value?.length === 0) {
			e.preventDefault();
			if (Array.isArray(finalValue.value) && finalValue.value.length > 0) {
				const lastSelectedOptionId = finalValue.value[finalValue.value.length - 1];
				const lastSelectedOption = internalOptions.value.find(option => option[props.optionsValue] === lastSelectedOptionId);
				const lastSelectedOptionText = lastSelectedOption?.[props.optionsLabel];
				removeSelectedOption(lastSelectedOption as Option);
				searchQuery.value = lastSelectedOptionText;
			}
	}

	if (e.key === 'Escape') {
		e.preventDefault();
		open.value = false;
	}

	if (e.key === 'Tab') {
		open.value = false;
	}
}

function onInputFocus() {
	focused.value = true;
}

function onInputBlur() {
  focused.value = false;
}

const optionsWatcher = computed(() => props.options);

watch(optionsWatcher, () => {

	// Reset search query on options change
	searchQuery.value = '';

	if (! props.options.length) {
			internalOptions.value = [];
			return;
	}

	internalOptions.value = cloneObjectDeep(props.options);

	// Append default option to start
	if (! props.multiple && ! props.withoutDefaultOption) {
			internalOptions.value.unshift({
					[props.optionsValue]: null,
					[props.optionsLabel]: 'Odaberite...'
			});
	}

	// Set default value
	if (! props.multiple && ! model.value && props.withoutDefaultOption) {
			model.value = internalOptions.value[0][props.optionsValue];
	}

}, { immediate: true})

onMounted(() => {
	if (props.multiple) {
		multipleSearchInput.value?.addEventListener('keydown', handleKeyEvents);
		multipleSearchInput.value?.addEventListener('focusin', onInputFocus);
		multipleSearchInput.value?.addEventListener('focusout', onInputBlur);
	} else {
		selection.value?.addEventListener('keydown', handleKeyEvents);
		resultsSearchInput.value?.addEventListener('keydown', handleKeyEvents);
		resultsSearchInput.value?.addEventListener('focusin', onInputFocus);
		resultsSearchInput.value?.addEventListener('focusout', onInputBlur);
	}

	window.addEventListener('mouseup', handleMouseEvents);
});

onBeforeUnmount(() => {
	if (props.multiple) {
		multipleSearchInput.value?.removeEventListener('keydown', handleKeyEvents);
		multipleSearchInput.value?.removeEventListener('focusin', onInputFocus);
		multipleSearchInput.value?.removeEventListener('focusout', onInputBlur);
	} else {
		selection.value?.removeEventListener('keydown', handleKeyEvents);
		resultsSearchInput.value?.removeEventListener('keydown', handleKeyEvents);
		resultsSearchInput.value?.removeEventListener('focusin', onInputFocus);
		resultsSearchInput.value?.removeEventListener('focusout', onInputBlur);
	}

	window.removeEventListener('mouseup', handleMouseEvents);
});

const name = `select_field_${Math.random().toString(36).substring(2, 9)}`;
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
		:addon-left="props.iconBefore" 
		:addon-right="props.iconAfter" 
		:horizontal="props.horizontal"
		:value="props.editable ? model : presentationValue"
		:skeleton-style="{left: 0, right: 0}"
	>
		<div ref="container" :class="['select-box-container', {'open': open}]">
			<select :name="name" :disabled="disabled" :required="required" :value="model"></select>

			<div v-if="!multiple" ref="selection" :class="['select-box-selection', 'single', {'focused': focused}]" tabindex="0" @click="handleSelectionClick">
					<span class="select-box-presentation">
							<template v-if="iconBefore && model">
								<icon :icon="iconBefore" class="position-left" />
							</template>
							<span v-html="presentationValue"></span>
					</span>
			</div>

			<div v-if="multiple" :class="['select-box-selection', 'multiple', {'focused': focused}]" @click="handleSelectionClick">
				<ul>
						<li
								v-for="(selectedOption, selectedOptionIndex) in selectedOptions"
								:key="`select_${id}_selected_option_${selectedOptionIndex}`"
								class="selected-option"
						>
								<span v-html="optionPresentationValue(selectedOption)"></span>
								<a class="remove" @click.prevent="removeSelectedOption(selectedOption)"></a>
						</li>
						<li class="search-inline">
								<input
										ref="multipleSearchInput"
										:name="`${id}_multiple_search`"
										type="search"
										v-model="searchQuery"
										:style="{width: searchInputWidth + 'px'}"
										tabindex="0"
										autocorrect="off"
										autocapitalize="off"
										spellcheck="false" />
						</li>
				</ul>
			</div>

			<div class="select-box-results" v-show="open">
				<div class="select-box-search-container" v-show="!multiple">
						<input ref="resultsSearchInput" type="text" :name="`${id}_single_search`" class="select-box-search" v-model="searchQuery" />
				</div>
				<ul class="select-box-options" ref="resultsContainer">
						<li
								v-for="(option, optionIndex) in filteredOptions"
								:key="`select_${id}_option_${optionIndex}`"
								:class="[{'selected': isResultOptionSelected(option as Option), 'highlighted': optionIndex === highlightedOptionIndex}]"
								@click.prevent="onOptionClick(option as Option)">
								<template v-if="!isOptionGroup(option as Option) && iconBefore">
									<icon :icon="iconBefore" class="position-left" />
								</template>
								<span v-html="optionPresentationValue(option as Option)"></span>
						</li>

						<li v-if="filteredOptions.length === 0" class="message">No results found</li>
				</ul>
			</div>

		</div>
	</base-field>
</template>