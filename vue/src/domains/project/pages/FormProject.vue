<script setup lang="ts">
import { routerPageName } from '@/router/routerPageName';
import { useTimeSheetForm } from '../composables/timeSheetForm';
import '@ui5/webcomponents/dist/DateTimePicker.js';
import "@ui5/webcomponents-icons/dist/timesheet.js";
import "@ui5/webcomponents-icons/dist/create-entry-time.js";
import "@ui5/webcomponents/dist/Button.js";
import axios from 'axios';
import { z } from 'zod';

const router = useRouter();
const params = useRouteParams({ 
	timeSheetId: z.string(),
});

const { timeSheetForm, timeSheetFormCheck, timeSheetFormValues } = useTimeSheetForm(Number(params.value.timeSheetId));
const dateRequested = ref(null);
const endDateRequested = ref(null);
const dateReal = ref(null);
const endDateReal = ref(null);

function convertDate(dateString: string) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return formattedDate;
}

function convertDateToTimestamp(dateString: string) {
    const date = new Date(dateString);
    return date.getTime();
}

const onDateRequestedChange = (event: any) => 
    timeSheetFormValues.dateRequested.value = convertDate(event.target.value);

const onEndDateRequestedChange = (event: any) =>
    timeSheetFormValues.endDateRequested.value = convertDate(event.target.value);

const onDateRealChange = (event: any) =>
    timeSheetFormValues.dateReal.value = convertDate(event.target.value);

const onEndDateRealChange = (event: any) =>
    timeSheetFormValues.endDateReal.value = convertDate(event.target.value);

async function submit() {
    const formFields = await timeSheetFormCheck();
    console.log(formFields);

    if (!formFields) {
        return;
    }

    await axios.post('http://localhost:3000/project', {
        start: convertDateToTimestamp(timeSheetFormValues.dateReal.value),
        end: convertDateToTimestamp(timeSheetFormValues.endDateReal.value),
    });

    router.push({ name: routerPageName.TABLE_TIME_SHEET });
}

</script>
<template>
    <section class="pt-4 pl-4 pb-2 w-full border-b-2 border-gray-200 bg-white rounded-t-lg">
		<TheBreadcrumbs :items="[
			{ text: 'Time Sheet', href: '/timesheet' },
			{ text: 'Form' }
		]">
			<template #before-0>
				<ui5-icon name="timesheet" class="text-blue-600 w-5 h-5 ml-2"/>
			</template>
			<template #after-0>
				<ui5-icon name="navigation-down-arrow" class="text-blue-600 w-6 h-6 mr-2 border-2 border-transparent rounded hover:border-blue-600"/>
			</template>
			<template #before-1>
				<ui5-icon name="create-entry-time" class="text-blue-600 w-5 h-5 ml-2"/>
			</template>
		</TheBreadcrumbs>
	</section>
    <section class="gap-5">
		<div class="flex flex-col items-start p-6 bg-white shadow-md mb-10">
			<div class="flex flex-row w-full gap-4 items-center">
				<ui5-icon name="chain-link" class="text-primary-500 w-5 h-5"/>
				<ui5-title level="H3">Time Sheet</ui5-title>
			</div>
		</div>
		<ui5-title level="H5" class="mr-6 ml-6 mt-4 pl-2 pt-2 bg-white rounded-t-lg">Form Time Sheet</ui5-title>
        <div class="flex flex-col items-center mr-6 ml-6 pr-6 pl-6 pb-6 pt-6 bg-white rounded-b-lg">
            <timeSheetForm>
                <div class="flex flex-col justify-items-center">
                <div class="flex flex-row space-x-6 w-full justify-items-center">
                    <div class="flex flex-col">
                        <label for="dateRequested" class="mb-2 text-sm font-medium text-gray-700">Date Requested</label>
                        <ui5-datetime-picker 
                            id="dateRequested"
                            ref="dateRequested" 
                            @change="onDateRequestedChange"
                            :value="timeSheetFormValues.dateRequested.value ?? ''"
                            class="w-full"
                        />
                    </div>
                    
                    <div class="flex flex-col">
                        <label for="endDateRequested" class="mb-2 text-sm font-medium text-gray-700">End Date Requested</label>
                        <ui5-datetime-picker
                            id="endDateRequested"
                            ref="endDateRequested"
                            @change="onEndDateRequestedChange"
                            :value="timeSheetFormValues.endDateRequested.value ?? ''"
                            class="w-full"
                        />
                    </div>
                    
                    <div class="flex flex-col">
                        <label for="dateReal" class="mb-2 text-sm font-medium text-gray-700">Date Real</label>
                        <ui5-datetime-picker
                            id="dateReal"
                            ref="dateReal"
                            @change="onDateRealChange"
                            :value="timeSheetFormValues.dateReal.value ?? ''"
                            class="w-full"
                        />
                    </div>
                    
                    <div class="flex flex-col">
                        <label for="endDateReal" class="mb-2 text-sm font-medium text-gray-700">End Date Real</label>
                        <ui5-datetime-picker
                            id="endDateReal"
                            ref="endDateReal"
                            @change="onEndDateRealChange"
                            :value="timeSheetFormValues.endDateReal.value ?? ''"
                            class="w-full"
                        />
                    </div>
                </div>
                <ui5-button
                    design="Emphasized"
                    @click="submit"
                    type="submit"
                    class="col-span-12 right-0 mt-6"
                >
                    Valider
                </ui5-button>
            </div>
            </timeSheetForm>
        </div>
    </section>
</template>