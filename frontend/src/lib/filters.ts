import type { ExplorerFilters, Project } from "@/data/types";

export function filterProfileItems(items: Project[], filters: ExplorerFilters): Project[] {
  return items.filter((item) => {
    const matchesTracks =
      filters.tracks && filters.tracks.length > 0
        ? filters.tracks.some((track) => item.track.includes(track))
        : true;

    const matchesIndustries =
      filters.industries && filters.industries.length > 0
        ? filters.industries.includes(item.industry)
        : true;

    const matchesProductTypes =
      filters.productTypes && filters.productTypes.length > 0
        ? filters.productTypes.includes(item.productType)
        : true;

    const matchesCompanies =
      filters.companies && filters.companies.length > 0
        ? item.company
          ? filters.companies.includes(item.company)
          : false
        : true;

    const matchesSkills =
      filters.skills.length > 0
        ? filters.skills.some((skill) => item.skills.includes(skill))
        : true;

    const matchesFeatured = filters.featuredOnly ? item.featured === true : true;

    return (
      matchesTracks &&
      matchesIndustries &&
      matchesProductTypes &&
      matchesCompanies &&
      matchesSkills &&
      matchesFeatured
    );
  });
}
