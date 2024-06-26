<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import ThePopup from "@/components/ThePopup.vue";
import TheButton from "@/components/ui/button/TheButton.vue";

interface Props {
	title: string
	content?: string
	class?: HTMLElement["className"]
	disabled?: boolean
}

const props = defineProps<Props>();

const emit = defineEmits<{
	validate: []
}>();
</script>

<template>
	<ThePopup class="flex flex-col gap-4">
		<template #trigger="{ open }">
			<div
				:class="props.class"
				@click="disabled || open()"
			>
				<slot />
			</div>
		</template>

		<template #popupContent="{ close }">
			<h2 class="text-2xl font-bold">
				{{ title }}
			</h2>

			<p
				v-if="content"
				class="text-base"
			>
				{{ content }}
			</p>

			<div class="flex gap-3 justify-end">
				<TheButton
					size="lg"
					variant="secondary"
					@click="close()"
				>
					Annuler
				</TheButton>

				<TheButton
					size="lg"
					@click="() => { emit('validate'); close(); }"
				>
					Valider
				</TheButton>
			</div>
		</template>
	</ThePopup>
</template>
