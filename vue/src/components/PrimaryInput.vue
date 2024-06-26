<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import TheInput from "@/components/ui/input/TheInput.vue";
const emit = defineEmits<{ "update:modelValue": [value: string] }>();

interface Props {
	modelValue?: string | number
}

defineProps<Props>();
</script>

<template>
	<TheInput 
		@update:model-value="(value) => emit('update:modelValue', value)"
		:model-value="modelValue"
	/>
</template>
