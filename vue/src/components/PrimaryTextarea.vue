<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { TheTextarea } from "@/components/ui/textarea";

interface Props {
	modelValue?: string
}
defineProps<Props>();
const emit = defineEmits<{"update:modelValue": [value: string]}>();
</script>

<template>
	<TheTextarea
		:model-value="modelValue"
		@update:model-value="(value) => emit('update:modelValue', value.toString())"
	/>
</template>
