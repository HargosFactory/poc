<script setup lang="ts">
import { ref } from "vue";
import BigTable from "@/components/BigTable/BigTable.vue";
import "@ui5/webcomponents/dist/CheckBox.js";
import "@ui5/webcomponents/dist/Title.js";
import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents-icons/dist/chain-link.js";
import "@ui5/webcomponents-icons/dist/product.js";
import "@ui5/webcomponents-icons/dist/batch-payments";
import "@ui5/webcomponents-icons/dist/navigation-down-arrow.js";
import TheBreadcrumbs from "@/components/TheBreadcrumbs.vue";
import { useGetJournal } from "../composables/useGetJournal";
import type { Yy1_Fi_Jrnentriesfactor as Journal } from "@/data/YY1_FI_JRNENTRIESFACTOR_CDS_0001";

const count = ref(0);

const currentPage = ref(1);
const { getJournals, journalList } = useGetJournal();

const cols: BigTableColDef<Journal>[] = [
	{
		title: "Actions",
		slotName: "actions",
	},
	{
		title: "Company Code",
		getter: i => i.companyCode
	},
	{
		title: "Category",
		getter: i => i.sourceLedger
	},
	{
		title: "Fiscal year",
		getter: i => i.fiscalYear
	},
	{
		title: "Accounting documment",
		getter: i => i.accountingDocument,
	},
	{
		title: "ledgerGlLineItem",
		getter: i => i.ledgerGlLineItem
	},
	{
		title: "ledger",
		getter: i => i.ledger
	}
];

async function next() {
	if (journalList.value.length < 10) {
		return;
	}
	await getJournals(currentPage.value+=1)
}

async function previous() {
	if (currentPage.value === 1) {
		return;
	}
	await getJournals(currentPage.value-=1)
}

await getJournals(currentPage.value)
console.log(journalList);
</script>

<template>
	<section class="pt-4 pl-4 pb-2 w-full border-b-2 border-gray-200">
		<TheBreadcrumbs :items="[
			{ text: 'Factor', href: '/factor' },
			{ text: 'Test Table' }
		]">
			<template #before-0>
				<ui5-icon name="batch-payments" class="text-blue-600 w-5 h-5 ml-2"/>
			</template>
			<template #after-0>
				<ui5-icon name="navigation-down-arrow" class="text-blue-600 w-6 h-6 mr-2 border-2 border-transparent rounded hover:border-blue-600"/>
			</template>
			<template #before-1>
				<ui5-icon name="product" class="text-blue-600 w-5 h-5 ml-2"/>
			</template>
		</TheBreadcrumbs>
	</section>

	<section class="gap-5">
		<div class="flex flex-col items-start p-6">
			<div class="flex flex-row w-full gap-4 items-center">
				<ui5-icon name="chain-link" class="text-primary-500 w-5 h-5"/>
				<ui5-title level="H3">Test Table</ui5-title>
			</div>
			<p class="text-gray-500">All: {{ count }}</p>
		</div>
		
		<div class="flex flex-col items-center w-full gap-6 p-6">
			<BigTable 
				:items="journalList" 
				:cols="cols" 
				class="border-r"
				:current-page="currentPage"
				@click-next="next"
				@click-previous="previous"
			>
				<template #actions="{item}">
					<input type="checkbox" @change="console.log(item)"/>
				</template>
			</BigTable>
		</div>
	</section>
</template>