import type { Yy1_Fi_Jrnentriesfactor as Journal } from "@/data/YY1_FI_JRNENTRIESFACTOR_CDS_0001";
import axios from "axios";


export function useGetJournal() {
    const journalList = ref<Journal[]>([]);

    async function getJournals(page: number) {
        return await axios.get(`http://localhost:1506/api/journal?page=${page}`)
            .then((res) => journalList.value = res.data as unknown as Journal[])
    }

    return {
        journalList,
        getJournals
    }
}