import { routerPageNameFactor } from "@/domains/factor/router";
import { routerPageNameProject } from "@/domains/project/router";

export const routerPageName = Object.freeze({
	...routerPageNameFactor,
	...routerPageNameProject,
});