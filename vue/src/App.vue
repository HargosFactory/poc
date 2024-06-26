<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
    <div
		ref="container"
		class="w-full h-[100vh] overflow-auto bg-slate-200"
	>
		<RouterView />
	</div>
</template>