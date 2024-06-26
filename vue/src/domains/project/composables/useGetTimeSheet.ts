export interface TimeSheet {
    id: number;
    project: string;
    description: string;
    otp: string;
    description2: string;
    dateRequested: string;
    endDateRequested: string;
    dateReal: string;
    endDateReal: string;
}


export const TimeSheetList: TimeSheet[] = [
    {
        id: 1,
        project: "R.000002",
        description: "Intervention Ligne Paris Amiens",
        otp: "R.0000021",
        description2: "Trajet",
        dateRequested: "2024-06-27 04:00:00",
        endDateRequested: "2024-06-27 10:00:00",
        dateReal: "",
        endDateReal: "",
    },
    {
        id: 2,
        project: "R.000002",
        description: "Intervention Ligne Paris Amiens",
        otp: "R.0000022",
        description2: "Présence",
        dateRequested: "2024-06-27 10:00:00",
        endDateRequested: "2024-06-27 16:00:00",
        dateReal: "",
        endDateReal: "",
    },
]

export function useGetTimeSheet() {
    const timeSheet = ref<TimeSheet[]>([]);
    const nbPerPage = 5;

    async function getTimeSheet(page: number) {
        const start = (page - 1) * nbPerPage;
        const end = page * nbPerPage;
        timeSheet.value = TimeSheetList.slice(start, end);
    }

    return {
        timeSheet,
        getTimeSheet
    }
}