import { OperationalAcctgDocItemCubeApi } from "@/data/API_OPLACCTGDOCITEMCUBE_SRV_0001/OperationalAcctgDocItemCubeApi";
import type { OperationalAcctgDocItemCube } from "@/data/API_OPLACCTGDOCITEMCUBE_SRV_0001";

export function useGetAccountDocuments() {
    const accountingDocuments = ref<OperationalAcctgDocItemCube[]>([]);
    const operationalAcctgDocItemCubeApi = new OperationalAcctgDocItemCubeApi();
    const countItem = 50;

    async function getAccountDocuments(page: number) {
        return operationalAcctgDocItemCubeApi
            .requestBuilder()
            .getAll()
            .top(countItem)
            .skip(page * countItem)
            .execute({
                url: 'https://my403963-api.s4hana.cloud.sap',
                authentication: 'BasicAuthentication',
                username: 'TEST_FACTOR_USER',
                password: 'LlVorEKcqWYfBwZGMisKkWdxfqUJjiskkoTikD7[',
            }).then((res) => accountingDocuments.value = res)
    }

    return {
        accountingDocuments,
        getAccountDocuments
    }
}