import type { ZodObject, ZodTypeAny, infer as zodInfer } from "zod";
import type { Ref } from "vue";
import { routerPageName } from "@/router/routerPageName";
import { z } from "zod";

export function useRouteParams<
	T extends Record<string, ZodTypeAny>
>(objectSchemas: T): Ref<zodInfer<ZodObject<T>>>
{
	const route = useRoute();
	const router = useRouter();
	const currentRouteName = route.name;

	const params = computed(() => {
		const zodSchema = z.object(objectSchemas);
		
		if (currentRouteName !== route.name) {
			throw new Error("Route change.");
		}

		const result = zodSchema.safeParse(route.params);
		
		if (!result.success) {
			router.push({ name: routerPageName.TABLE_TIME_SHEET });
			console.log(result);
			
			throw new Error("Params is invalid.");
		}

		return result.data;
	});
	

	return params; 
}
