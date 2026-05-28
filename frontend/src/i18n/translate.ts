import { industryLabels, productTypeLabels } from "@/data/labels";
import type { Industry, Locale, LocalizedString, ProductType } from "@/data/types";

export function translate(text: LocalizedString | undefined, locale: Locale, fallback = ""): string {
  return text?.[locale] ?? text?.en ?? fallback;
}

export function translateIndustry(industry: Industry, locale: Locale): string {
  return translate(industryLabels[industry], locale, industry);
}

export function translateProductType(productType: ProductType, locale: Locale): string {
  return translate(productTypeLabels[productType], locale, productType);
}
