import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getUniversityBySlug, getAllSlugs } from "@/lib/universities";
import {
  REGION_LABELS,
  TYPE_LABELS,
  POLICY_STATUS_LABELS,
} from "@/types/university";
import type { PolicyStatus } from "@/types/university";
import PolicyBadge from "@/components/PolicyBadge";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const university = getUniversityBySlug(slug);
  if (!university) return { title: "大学が見つかりません" };
  return {
    title: `${university.name}のダイバーシティ施策`,
    description: `${university.name}のLGBTQ関連施策・ダイバーシティ推進の取り組み`,
  };
}

const LGBTQ_POLICY_LABELS: Record<string, string> = {
  preferredName: "通称名の使用",
  samePartner: "同性パートナー対応",
  genderNeutralRestroom: "ジェンダーニュートラルトイレ",
  genderFormConsideration: "性別欄の配慮",
  sogiTraining: "SOGI研修の実施",
  antiOutingPolicy: "アウティング防止方針",
};

const SUPPORT_SYSTEM_LABELS: Record<string, string> = {
  dedicatedConsultation: "専門相談窓口の設置",
  counselorSogiTraining: "カウンセラーのSOGI対応研修",
  harassmentCooperation: "ハラスメント相談との連携",
};

export default async function UniversityDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const university = getUniversityBySlug(slug);

  if (!university) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link
        href="/universities"
        className="mb-6 inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
      >
        &larr; 大学一覧に戻る
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          {university.name}
        </h1>
        <div className="mt-2 flex flex-wrap gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <span>{university.prefecture}</span>
          <span>/</span>
          <span>{TYPE_LABELS[university.type]}</span>
          <span>/</span>
          <span>{REGION_LABELS[university.region]}</span>
        </div>
        {university.website && (
          <a
            href={university.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm text-indigo-600 hover:underline dark:text-indigo-400"
          >
            公式サイト &rarr;
          </a>
        )}
      </div>

      {/* LGBTQ施策 */}
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
          LGBTQ施策
        </h2>
        <div className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-sm">
            <tbody>
              {Object.entries(university.lgbtqPolicies).map(
                ([key, value]) => (
                  <tr
                    key={key}
                    className="border-b border-zinc-100 last:border-0 dark:border-zinc-800"
                  >
                    <td className="px-4 py-3 font-medium text-zinc-700 dark:text-zinc-300">
                      {LGBTQ_POLICY_LABELS[key] ?? key}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <PolicyBadge status={value as PolicyStatus} />
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* 相談窓口・支援体制 */}
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
          相談窓口・支援体制
        </h2>
        <div className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-sm">
            <tbody>
              {Object.entries(university.supportSystem).map(
                ([key, value]) => (
                  <tr
                    key={key}
                    className="border-b border-zinc-100 last:border-0 dark:border-zinc-800"
                  >
                    <td className="px-4 py-3 font-medium text-zinc-700 dark:text-zinc-300">
                      {SUPPORT_SYSTEM_LABELS[key] ?? key}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <PolicyBadge status={value as PolicyStatus} />
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* サークル・学生団体 */}
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
          サークル・学生団体
        </h2>
        {university.studentGroups.length === 0 ? (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            情報なし
          </p>
        ) : (
          <div className="space-y-3">
            {university.studentGroups.map((group) => (
              <div
                key={group.name}
                className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                  {group.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {group.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 宣言・方針 */}
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
          宣言・方針
        </h2>
        <div className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <td className="px-4 py-3 font-medium text-zinc-700 dark:text-zinc-300">
                  ダイバーシティ宣言
                </td>
                <td className="px-4 py-3 text-right">
                  <PolicyBadge
                    status={
                      university.declaration.diversityDeclaration
                        ? "yes"
                        : "no"
                    }
                  />
                </td>
              </tr>
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <td className="px-4 py-3 font-medium text-zinc-700 dark:text-zinc-300">
                  基本方針の公開
                </td>
                <td className="px-4 py-3 text-right">
                  <PolicyBadge
                    status={
                      university.declaration.publicPolicy ? "yes" : "no"
                    }
                  />
                </td>
              </tr>
              <tr className="border-b border-zinc-100 last:border-0 dark:border-zinc-800">
                <td className="px-4 py-3 font-medium text-zinc-700 dark:text-zinc-300">
                  行動計画の策定
                </td>
                <td className="px-4 py-3 text-right">
                  <PolicyBadge
                    status={
                      university.declaration.actionPlan ? "yes" : "no"
                    }
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {university.declaration.relatedUrls.length > 0 && (
          <div className="mt-3">
            <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              関連リンク
            </h3>
            <ul className="mt-1 space-y-1">
              {university.declaration.relatedUrls.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    {link.label} &rarr;
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* 備考 */}
      {university.notes && (
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
            備考
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            {university.notes}
          </p>
        </section>
      )}

      {/* 出典 */}
      {university.sources.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
            出典
          </h2>
          <ul className="space-y-1">
            {university.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  {source.label} &rarr;
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className="text-xs text-zinc-400 dark:text-zinc-500">
        最終更新: {university.updatedAt}
      </p>
    </div>
  );
}
