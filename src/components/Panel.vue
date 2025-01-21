<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<{
	title?: string | null;
	withoutPadding?: boolean;
	collapsable?: boolean;
	collapsed?: boolean;
}>(), {
	collapsable: true,
	collapsed: false,
});

const collapsed = ref(props.collapsed);

const toggle = () => {
	collapsed.value = ! collapsed.value;
}

const expand = () => {
	collapsed.value = false;
}

const collapse = () => {
	collapsed.value = true;
}

defineExpose({
	toggle,
	expand,
	collapse,
});

</script>

<template>
	<div class="panel panel-white">
		<div class="panel-heading" v-show="props.title && props.title.length > 0">
			<h6 :class="['panel-title', {'cursor-pointer': props.collapsable}]" @click="toggle()">{{ props.title }}</h6>
			<div class="heading-elements" v-if="props.collapsable">
				<ul class="icons-list">
					<li>
						<a data-action="collapse" @click.prevent="toggle" :class="{'rotate-180': !collapsed}"></a>
					</li>
				</ul>
			</div>
		</div>
		<div v-show="! collapsed" :class="['panel-body', { 'no-padding': props.withoutPadding }]">
			<slot></slot>
		</div>
	</div>
</template>