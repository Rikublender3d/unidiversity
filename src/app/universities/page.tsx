import type { Metadata } from "next";
import { filterUniversities } from "@/lib/universities";
import type { Region, UniversityType } from "@/types/university";
import { REGION_LABELS, TYPE_LABELS } from "@/types/university";
import UniversityCard from "@/components/UniversityCard";

export const metadata: Metadata = {
  title: "大学一覧",
  description: "全国の大学のダイバーシティ施策一覧",
};

export default async function UniversitiesPage(props: {
  searchParams: Promise<{
    q?: string;
    region?: string;
    type?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams.q ?? "";
  const region = (searchParams.region as Region) || undefined;
  const type = (searchParams.type as UniversityType) || undefined;

  const universities = filterUniversities({ query, region, type });

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        大学一覧
      </h1>

      <form className="mb-8 flex flex-col gap-4 sm:flex-row">
        <input
          type="text"
          name="q"
          defaultValue={query}
          placeholder="大学名・都道府県で検索"
          className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
        />
        <select
          name="region"
          defaultValue={searchParams.region ?? ""}
          className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
        >
          <option value="">全地域</option>
          {Object.entries(REGION_LABELS).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        <select
          name="type"
          defaultValue={searchParams.type ?? ""}
          className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
        >
          <option value="">全種別</option>
          {Object.entries(TYPE_LABELS).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          検索
        </button>
      </form>

      <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
        {universities.length}件の大学が見つかりました
      </p>

      {universities.length === 0 ? (
        <p className="py-12 text-center text-zinc-500 dark:text-zinc-400">
          条件に一致する大学が見つかりませんでした。
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {universities.map((university) => (
            <UniversityCard key={university.slug} university={university} />
          ))}
        </div>
      )}
    </div>
  );
}
