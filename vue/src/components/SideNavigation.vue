<script setup lang="ts">
import "@ui5/webcomponents-fiori/dist/SideNavigation.js"
import '@ui5/webcomponents-fiori/dist/SideNavigationItem.js';
import '@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js';
import '@ui5/webcomponents-fiori/dist/SideNavigationGroup.js';
import "@ui5/webcomponents-icons/dist/home.js";
import "@ui5/webcomponents-icons/dist/chain-link.js";
import "@ui5/webcomponents-icons/dist/group.js";
import "@ui5/webcomponents-icons/dist/request.js";
import "@ui5/webcomponents-icons/dist/locate-me.js";
import "@ui5/webcomponents-icons/dist/calendar.js";
import "@ui5/webcomponents-icons/dist/settings.js";
import { routerPageName } from '@/router/routerPageName';
import { useRoute, useRouter} from "vue-router";

const { 
    TABLE_TIME_SHEET,
} = routerPageName;
const router = useRouter();

type RouteNames = typeof routerPageName[keyof typeof routerPageName];

const navigateTo = (routeName: RouteNames) => {
	router.push({ name: routeName });
};
</script>

<template>
	<ui5-side-navigation>
		<ui5-side-navigation-item 
			text="Home" 
			icon="home"
			@click="navigateTo(TABLE_TIME_SHEET)"
		/>
		<ui5-side-navigation-item 
			slot="fixedItems"
			text="Settings"
			icon="settings"
		/>
	</ui5-side-navigation>
</template>
