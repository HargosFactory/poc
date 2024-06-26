import type { RouteRecordRaw } from "vue-router";

export const routerPageNameFactor = Object.freeze({
	FACTOR_HOME: "factor-table",
});

export default (): RouteRecordRaw[] => [
    {
        path: "/factor",
        component: () => import("../../layouts/BaseLayout.vue"),
        children: [
            {
                name: routerPageNameFactor.FACTOR_HOME,
                path: "/factor/",
                component: () => import("./pages/TestTable.vue")
            },
        ]
    }
];