import type { TimeSheet } from "../composables/useGetTimeSheet";
import { z } from "zod";

const TimeSheetList: TimeSheet[] = [
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

export function useTimeSheetForm(id: number) {

    const timeSheet = TimeSheetList.find((timeSheet) => timeSheet.id === id);

    console.log("test", new Date(timeSheet?.dateRequested || ""))

    const { Form, checkForm, resetForm, values } = useFormBuilder({
        project: {
            type: "text",
            label: "Project",
            placeholder: "Nom du projet",
            defaultValue: timeSheet?.project || "",
            zodSchema: z.string({ message: "Le nom du projet est requis" })
                .max(255, { message: "Le nom du projet ne doit pas dépasser 255 caractères" })
                .min(3, { message: "Le nom du projet doit contenir au moins 3 caractères" }),
        },
        description: {
            type: "textarea",
            label: "Description",
            placeholder: "Description du projet",
            defaultValue: timeSheet?.description || "",
            zodSchema: z.string({ message: "La description du projet est requise" })
                .max(255, { message: "La description du projet ne doit pas dépasser 255 caractères" })
                .min(3, { message: "La description du projet doit contenir au moins 3 caractères" }),
        },
        otp: {
            type: "text",
            label: "OTP",
            placeholder: "OTP",
            defaultValue: timeSheet?.otp || "",
            zodSchema: z.string({ message: "L'OTP est requis" })
                .max(10, { message: "L'OTP ne doit pas dépasser 10 caractères" })
                .min(3, { message: "L'OTP doit contenir au moins 3 caractères" }),
        },
        description2: {
            type: "textarea",
            label: "Description",
            placeholder: "Description de l'OTP",
            defaultValue: timeSheet?.description2 || "",
            zodSchema: z.string({ message: "La description de l'OTP est requise" })
                .max(255, { message: "La description de l'OTP ne doit pas dépasser 255 caractères" })
                .min(3, { message: "La description de l'OTP doit contenir au moins 3 caractères" }),
        },
        dateRequested: {
            type: "custom",
            label: "Date départ demandée",
            defaultValue: timeSheet?.dateRequested || "",
        },
        endDateRequested: {
            type: "custom",
            label: "Date fin demandée",
            defaultValue: timeSheet?.endDateRequested || "",
        },
        dateReal: {
            type: "custom",
            label: "Date départ réelle",
            defaultValue: timeSheet?.dateReal || "",
        },
        endDateReal: {
            type: "custom",
            label: "Date fin réelle",
            defaultValue: timeSheet?.endDateReal || "",
        },
    });

    return { 
        timeSheetForm: Form,
        timeSheetFormCheck: checkForm,
        timeSheetFormReset: resetForm,
        timeSheetFormValues: values,
    };
}