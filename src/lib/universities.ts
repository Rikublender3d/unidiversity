import type { University, Region, UniversityType, PolicyStatus } from "@/types/university";
import data from "@/data/universities.json";

const universities: University[] = data as University[];

export function getAllUniversities(): University[] {
  return universities;
}

export function getUniversityBySlug(slug: string): University | undefined {
  return universities.find((u) => u.slug === slug);
}

export function getAllSlugs(): string[] {
  return universities.map((u) => u.slug);
}

export function filterUniversities(options: {
  query?: string;
  region?: Region;
  type?: UniversityType;
}): University[] {
  let result = universities;

  if (options.query) {
    const q = options.query.toLowerCase();
    result = result.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.prefecture.toLowerCase().includes(q),
    );
  }

  if (options.region) {
    result = result.filter((u) => u.region === options.region);
  }

  if (options.type) {
    result = result.filter((u) => u.type === options.type);
  }

  return result;
}

export function countPolicyStatus(
  university: University,
): Record<PolicyStatus, number> {
  const counts: Record<PolicyStatus, number> = {
    yes: 0,
    partial: 0,
    no: 0,
    unknown: 0,
  };

  const policies = university.lgbtqPolicies;
  for (const value of Object.values(policies)) {
    counts[value as PolicyStatus]++;
  }

  const support = university.supportSystem;
  for (const value of Object.values(support)) {
    counts[value as PolicyStatus]++;
  }

  return counts;
}
