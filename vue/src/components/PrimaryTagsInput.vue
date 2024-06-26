<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { TagsInput, TagsInputItem, TagsInputItemText, TagsInputItemDelete, TagsInputInput } from "@/components/ui/tags-input";

interface Props {
	modelValue?: string[]
}
defineProps<Props>();
const emit = defineEmits<{"update:modelValue": [value: string[]]}>();
</script>

<template>
	<TagsInput
		:model-value="modelValue"
		@update:model-value="(value) => emit('update:modelValue', value)"
	>
		<TagsInputItem
			v-for="item in modelValue"
			:key="item"
			:value="item"
		>
			<TagsInputItemText />

			<TagsInputItemDelete />
		</TagsInputItem>
  
		<TagsInputInput placeholder="Fruits..." />
	</TagsInput>
</template>
