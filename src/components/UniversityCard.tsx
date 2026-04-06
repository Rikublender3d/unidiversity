import Link from "next/link";
import type { University } from "@/types/university";
import {
  REGION_LABELS,
  TYPE_LABELS,
} from "@/types/university";
import PolicyBadge from "./PolicyBadge";
import { countPolicyStatus } from "@/lib/universities";

export default function UniversityCard({
  university,
}: {
  university: University;
}) {
  const counts = countPolicyStatus(university);

  return (
    <Link
      href={`/universities/${university.slug}`}
      className="block rounded-xl border border-zinc-200 bg-white p-5 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="mb-3 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {university.name}
          </h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {university.prefecture} / {TYPE_LABELS[university.type]} /{" "}
            {REGION_LABELS[university.region]}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
          <PolicyBadge status="yes" />
          <span>{counts.yes}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
          <PolicyBadge status="partial" />
          <span>{counts.partial}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
          <PolicyBadge status="no" />
          <span>{counts.no}</span>
        </div>
        {counts.unknown > 0 && (
          <div className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
            <PolicyBadge status="unknown" />
            <span>{counts.unknown}</span>
          </div>
        )}
      </div>

      <p className="mt-3 text-xs text-zinc-400 dark:text-zinc-500">
        最終更新: {university.updatedAt}
      </p>
    </Link>
  );
}
