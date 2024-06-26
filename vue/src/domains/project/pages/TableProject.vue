<script setup lang="ts">
import { ref } from "vue";
import BigTable from "@/components/BigTable/BigTable.vue";
import "@ui5/webcomponents/dist/CheckBox.js";
import "@ui5/webcomponents/dist/Title.js";
import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents-icons/dist/chain-link.js";
import "@ui5/webcomponents-icons/dist/timesheet.js";
import "@ui5/webcomponents-icons/dist/navigation-down-arrow.js";
import "@ui5/webcomponents-icons/dist/feeder-arrow.js";
import TheBreadcrumbs from "@/components/TheBreadcrumbs.vue";
import { useGetTimeSheet, type TimeSheet } from "../composables/useGetTimeSheet";
import { routerPageName } from "@/router/routerPageName";

const count = ref(2);
const router = useRouter();

const currentPage = ref(1);
const { getTimeSheet, timeSheet } = useGetTimeSheet();

const cols: BigTableColDef<TimeSheet>[] = [
	{
		title: "Project",
		getter: i => i.project
	},
    {
        title: "Description",
        getter: i => i.description
    },
	{
		title: "eOTP",
		getter: i => i.otp
	},
	{
		title: "Description eOTP",
		getter: i => i.description2
	},
    {
        title: "Date de début demandée",
        getter: i => i.dateRequested
    },
    {
        title: "Date de fin demandée",
        getter: i => i.endDateRequested
    },
    {
        title: "Date de début effective",
        getter: i => i.dateReal
    },
    {
        title: "Date de fin effective",
        getter: i => i.endDateReal
    },
    {
        title: "",
        slotName: "actions",
    }
    
];

async function next() {
	if (timeSheet.value.length < 10) {
		return;
	}
	await getTimeSheet(currentPage.value+=1)
}

async function previous() {
	if (currentPage.value === 1) {
		return;
	}
	await getTimeSheet(currentPage.value-=1)
}

function redirectToForm(id: number) {
    router.push({ 
        name: routerPageName.FORM_TIME_SHEET,
        params: { timeSheetId: id.toString() },
     });
}

await getTimeSheet(currentPage.value)
console.log(timeSheet);
</script>

<template>
	<section class="pt-4 pl-4 pb-2 w-full border-b-2 border-gray-200 bg-white rounded-t-lg">
		<TheBreadcrumbs :items="[
			{ text: 'Time Sheet', href: '/timesheet' },
		]">
			<template #before-0>
				<ui5-icon name="timesheet" class="text-blue-600 w-5 h-5 ml-2"/>
			</template>
			<template #after-0>
				<ui5-icon name="navigation-down-arrow" class="text-blue-600 w-6 h-6 mr-2 border-2 border-transparent rounded hover:border-blue-600"/>
			</template>
		</TheBreadcrumbs>
	</section>

	<section class="gap-5">
		<div class="flex flex-col items-start p-6 bg-white shadow-md mb-10">
			<div class="flex flex-row w-full gap-4 items-center">
				<ui5-icon name="chain-link" class="text-primary-500 w-5 h-5"/>
				<ui5-title level="H3">Time Sheet</ui5-title>
			</div>
			<p class="text-gray-500">All: {{ count }}</p>
		</div>
		<ui5-title level="H5" class="mr-6 ml-6 mt-4 pl-2 pt-2 bg-white rounded-t-lg">List Time Sheet</ui5-title>
		<div class="flex flex-col items-center w-full pr-6 pl-6">
			<BigTable 
				:items="timeSheet" 
				:cols="cols" 
				class="border-r-2 rounded-b-lg bg-white"
				:current-page="currentPage"
				@click-next="next"
				@click-previous="previous"
			>
                <template #actions="{item}">
                    <button @click="redirectToForm(item.id)">
                        <ui5-icon name="feeder-arrow" class="text-primary-500 w-5 h-5 cursor-pointer"/>
                    </button>
                </template>
			</BigTable>
		</div>
	</section>
</template>