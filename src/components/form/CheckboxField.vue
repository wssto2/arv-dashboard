<script setup lang="ts">
import { ref, computed, watch, onUpdated, onMounted } from 'vue';
import BaseField from './BaseField.vue';

const accent = 'rgb(100, 189, 99)';

type CheckboxSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

const props = withDefaults(defineProps<{
	name?: string;
	processing?: boolean;
	label?: string;
	description?: string;
	error?: string;
	required?: boolean;
	editable?: boolean;
	disabled?: boolean;
	horizontal?: boolean;
  useSwitch?: boolean;
  size?: CheckboxSize;
}>(), {
	processing: false,
	required: false,
	editable: true,
	disabled: false,
	horizontal: false,
  useSwitch: false,
  size: 'small',
});

// Define model
const model = defineModel<boolean | number>({
  default: false,
});

const rand = () => {
  return 'xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
};

const id = ref(`checkbox-${rand()}`);

watch(() => model.value, (value) => {
  // If model is not a boolean, set it to false
  if (typeof value !== 'boolean') {
    model.value = value ? true : false;
  }
}, { immediate: true });

const onCheckboxInput = (event: Event) => {
  model.value = (event.target as HTMLInputElement).checked ? true : false;
};

const switcherParent = ref<HTMLElement | null>(null);

const switcherParentStyle = computed(() => {
  let style = {
    boxShadow: 'rgb(223, 223, 223) 0px 0px 0px 0px inset',
    borderColor: 'rgb(223, 223, 223)',
    backgroundColor: 'rgb(255, 255, 255)',
    transition: 'border 0.4s, box-shadow 0.4s',
  }

  if (model.value) {
    style.boxShadow = `${accent} 0px 0px 0px 10px inset`;
    style.borderColor = accent;
    style.backgroundColor = accent;
  }

  return style;
});

let offsetWidth = 0;
if (switcherParent.value) {
  offsetWidth = switcherParent.value.offsetWidth - 20;
}

const switcherChildStyle = computed(() => {
  let style = {
    left: '0px',
    transition: 'background-color 0.4s, left 0.2s',
    backgroundColor: 'rgb(255, 255, 255)',
  }

  if (model.value) {
    style.left = switcherParent.value ? `${offsetWidth}px` : '18px';
  }

  return style;
});

const root = ref<HTMLElement | null>(null);

const horizontal = ref(props.horizontal);

onUpdated(() => {
  if (switcherParent.value) {
    offsetWidth = switcherParent.value.offsetWidth - 20;
  }
});

onMounted(() => {
  if (switcherParent.value && switcherParent.value.offsetWidth > 0) {
    offsetWidth = switcherParent.value.offsetWidth - 20;
  }

	const parentForm = root.value?.closest('form');
	if (parentForm && parentForm.classList.contains('form-horizontal')) {
		horizontal.value = true;
	}
});
</script>

<template>
  <base-field 
		:name="props.name" 
		:processing="props.processing" 
		:label="props.horizontal ? props.label : ''" 
		:description="props.horizontal ? props.description : ''" 
		:error="props.error" 
		:required="props.required" 
		:editable="props.editable" 
		:horizontal="props.horizontal"
		:value="model"
	>
    <div ref="root">
      <div v-if="! props.useSwitch" class="checkbox-container">
          <input
              type="checkbox"
              :class="['form-checkbox', props.size]"
              :id="id"
              :value="1"
              :required="props.required"
              :disabled="props.disabled"
              :checked="model === true"
              @input="onCheckboxInput"/>

          <label
              v-if="label"
              :for="id"
              class="text-grey-900 text-semibold no-margin cursor-pointer">{{ label }} <span v-if="required" class="text-danger">*</span>

              <template v-if="description">
                  <br>
                  <small class="text-grey-600 text-regular mt-5 display-block tracking-loose">{{ description }}</small>
              </template>
          </label>
      </div>

      <div v-if="props.useSwitch" class="checkbox checkbox-left checkbox-switchery switchery-sm no-margin">
        <label>
          <input
            class="form-check-input"
            type="checkbox"
            @input="onCheckboxInput"
            :checked="model === true"
            :style="{ display: 'none' }"
          />
          <span ref="switcherParent" class="switchery switchery-default" :style="switcherParentStyle">
            <small :style="switcherChildStyle"></small>
          </span>
          {{ ! props.horizontal ? props.label : '' }}
          <small v-if="! props.horizontal && props.description" class="text-grey text-regular mt-5 display-block">{{ props.description }}</small>
        </label>
      </div>
    </div>
  </base-field>
</template>
