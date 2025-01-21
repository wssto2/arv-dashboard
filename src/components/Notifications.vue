<script setup lang="ts">
import { ref } from 'vue';
import Icon from './Icon.vue';
import { IconKey } from '../icons';

type Notification = {
	id: number;
	type: "info" | "success" | "warning" | "error" | "default";
	title?: string;
	message?: string;
	icon?: IconKey;
	actions?: {
		label: string;
		handler: () => void;
	}[];
};

const notifications = ref<Notification[]>([]);

function hasIcon(notification: Notification): boolean {
	return (notification.type === "default" && !!notification.icon) || ["info", "success", "warning", "error"].includes(notification.type);
}

function getIcon(notification: Notification): IconKey | undefined {
	switch (notification.type) {
		case "info":
			return "alertTriangle";
		case "success":
			return "checkCircle";
		case "warning":
			return "alertTriangle";
		case "error":
			return "alertTriangle";
		default:
			return notification.icon;
	}
}

function getIconAccent(notification: Notification): string {
	switch (notification.type) {
		case "info":
			return "text-blue";
		case "success":
			return "text-success";
		case "warning":
			return "text-orange";
		case "error":
			return "text-danger";
		default:
			return "text-grey-500";
	}
}
</script>

<template>
	<Teleport to="body">
		<div class="notifications">
			<transition-group name="notification" tag="div">
				<div class="notification" 
					v-for="(notification, notificationIndex) in notifications" 
					:key="notification.id"
					:style="`--index: ${notificationIndex};`"
				>
					<div class="notification-body">
						<icon v-if="hasIcon(notification)" :icon="getIcon(notification)!" :class="['mr-4 mt-1', getIconAccent(notification)]" />
						<div class="notification-content">
							<div v-if="notification.title" class="notification-title text-grey-900 text-semibold">{{ notification.title }}</div>
							<div v-if="notification.message" class="notification-message text-grey-500 mt-1">{{ notification.message }}</div>

							<div class="notification-actions mt-2" v-if="notification.actions">
								<button
									v-for="(action, actionIndex) in notification.actions"
									:key="action.label"
									@click="action.handler"
									:class="['btn', 'btn-link', 'no-padding', {'text-primary': actionIndex === 0}, 'mr-2']"
								>
									{{ action.label }}
								</button>
							</div>
						</div>
					</div>
				</div>
			</transition-group>	
		</div>
	</Teleport>
</template>

<style scoped>

</style>