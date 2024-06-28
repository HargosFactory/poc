import axios from "axios";
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

export function useGetTimeSheet() {
    const timeSheet = ref<TimeSheet[]>([]);

    async function getTimeSheet(page: number) {
        await axios.get<TimeSheet[]>(`https://pocapi.streamshare.ovh/project`)
        .then((res) => {
            timeSheet.value = res.data;
        });
    }

    return {
        timeSheet,
        getTimeSheet
    }
}