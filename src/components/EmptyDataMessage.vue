<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '../locales/schema';
const { t } = useI18n<{ message: MessageSchema }>();
</script>

<template>
	<div style="padding: 40px 20px; text-align: center;">
		<h6 class="text-semibold">{{ t('empty_data_message.title') }}</h6>
		<p>{{ t('empty_data_message.description') }}</p>
	</div>
</template>