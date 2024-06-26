import type { RouteRecordRaw } from "vue-router";

export const routerPageNameProject = Object.freeze({
	FORM_TIME_SHEET: "form-time-sheet",
    TABLE_TIME_SHEET: "table-time-sheet",
});

export default (): RouteRecordRaw[] => [
    {
        path: "/timesheet/",
        component: () => import("../../layouts/BaseLayout.vue"),
        children: [
            {
                name: routerPageNameProject.FORM_TIME_SHEET,
                path: "/timesheet/:timeSheetId/form",
                component: () => import("./pages/FormProject.vue")
            },
            {
                name: routerPageNameProject.TABLE_TIME_SHEET,
                path: "/timesheet/",
                component: () => import("./pages/TableProject.vue")
            }
        ]
    }
];