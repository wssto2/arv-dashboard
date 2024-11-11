<script setup lang="ts">
import { computed } from 'vue'
import WidgetMapping from '../widgets'

type Props = {
	widgets: Array<string>
}

const props = defineProps<Props>()

const resolvedWidgets = computed(() => {
	return props.widgets.map((widgetName: string) => {
		const widget = WidgetMapping[widgetName]

		if (! widget) {
			console.error(`Widget "${widgetName}" not found`)
			return null
		}

		return { name: widgetName, ...widget }
	}).filter(Boolean)
})
</script>

<template>
	<div class="widget-canvas">
		<component 
			v-for="widget in resolvedWidgets" 
			:key="widget?.name" 
			:is="widget?.component" 
			:class="`widget col-${widget?.columns}`"
		/>
	</div>
</template>

<style scoped>
.widget-canvas {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-gap: 20px;
}

.widget-canvas .col-1 { grid-column: span 1; }
.widget-canvas .col-2 { grid-column: span 2; }
.widget-canvas .col-3 { grid-column: span 3; }
.widget-canvas .col-4 { grid-column: span 4; }
.widget-canvas .col-5 { grid-column: span 5; }
.widget-canvas .col-6 { grid-column: span 6; }
.widget-canvas .col-7 { grid-column: span 7; }
.widget-canvas .col-8 { grid-column: span 8; }
.widget-canvas .col-9 { grid-column: span 9; }
.widget-canvas .col-10 { grid-column: span 10; }
.widget-canvas .col-11 { grid-column: span 11; }
.widget-canvas .col-12 { grid-column: span 12; }

/** Responsive */
@media (max-width: 1300px) {
	.widget-canvas .col-1 { grid-column: span 6; }
	.widget-canvas .col-2 { grid-column: span 6; }
	.widget-canvas .col-3 { grid-column: span 6; }
	.widget-canvas .col-4 { grid-column: span 6; }
	.widget-canvas .col-5 { grid-column: span 6; }
}

@media (max-width: 991px) {
	.widget-canvas .col-6 { grid-column: span 12; }
	.widget-canvas .col-7 { grid-column: span 12; }
	.widget-canvas .col-8 { grid-column: span 12; }
	.widget-canvas .col-9 { grid-column: span 12; }
	.widget-canvas .col-10 { grid-column: span 12; }
	.widget-canvas .col-11 { grid-column: span 12; }
	.widget-canvas .col-12 { grid-column: span 12; }
}

@media (max-width: 767px) {
	.widget-canvas .col-1 { grid-column: span 12; }
	.widget-canvas .col-2 { grid-column: span 12; }
	.widget-canvas .col-3 { grid-column: span 12; }
	.widget-canvas .col-4 { grid-column: span 12; }
	.widget-canvas .col-5 { grid-column: span 12; }
	.widget-canvas .col-6 { grid-column: span 12; }
	.widget-canvas .col-7 { grid-column: span 12; }
	.widget-canvas .col-8 { grid-column: span 12; }
	.widget-canvas .col-9 { grid-column: span 12; }
	.widget-canvas .col-10 { grid-column: span 12; }
	.widget-canvas .col-11 { grid-column: span 12; }
	.widget-canvas .col-12 { grid-column: span 12; }
}

</style>