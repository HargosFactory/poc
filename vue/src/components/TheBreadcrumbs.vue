<script setup lang="ts">
import { defineProps } from 'vue';

interface Breadcrumb {
  text: string;
  href?: string;
}

interface Props {
  items: Breadcrumb[];
}

const props = defineProps<Props>();
</script>

<template>
  <ol class="flex text-blue-600 text-xl md:font-bold">
    <li v-for="(item, index) in props.items" :key="index" class="flex items-center">

        <slot :name="'before-' + index"/>

        <template v-if="item.href">
            <a :href="item.href" class="px-2 hover:underline">{{ item.text }}</a>
        </template>
        <template v-else>
            <span class="px-2 text-blue-600">{{ item.text }}</span>
        </template>
      
        <slot :name="'after-' + index"/>
    
        <span v-if="index < props.items.length - 1" class="text-gray-200 select-none text-lg font-bold">/</span>
    </li>
  </ol>
</template>
