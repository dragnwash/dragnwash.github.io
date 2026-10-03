import type { SeoPageDefinition } from "@/config/types";
import { expansionPages } from "./expansion-pages";
import rawPages from "./generated/pages.json";

export const corePages = [...(rawPages as SeoPageDefinition[]), ...expansionPages];
