<script setup lang="ts">
import ShellBar from "@/components/ShellBar.vue";
import { RouterView } from "vue-router";
import SideNavigation from "@/components/SideNavigation.vue";
import { ref } from "vue";

const openMenu = ref(false);

const handleMenuClick = () => {
  openMenu.value = !openMenu.value;
};
</script>

<template>
	<div class="flex flex-col h-full gap-2 bg-slate-200 p-2">
		<ShellBar primaryTitle="Demo Client" secondaryTitle="Eurailscout" @returnBack="handleMenuClick()"
			logo="https://static.wixstatic.com/media/a4065d_8d839703d4be4a7ba6b6260e1be9c371~mv2.png/v1/fill/w_400,h_202,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/hargos.png" 
			/>

		<main class="flex flex-1 gap-2 w-full">
			<SideNavigation v-if="openMenu" class="w-[300px] rounded-lg pl-2 shadow-xl" />
			<div class="rounded-lg bg-[#F5F6F7] w-full shadow-xl ">
				<Suspense>
					<RouterView/>
				</Suspense>
			</div>
		</main>
	</div>
</template>
