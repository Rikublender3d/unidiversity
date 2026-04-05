import Link from "next/link";
import { getAllUniversities } from "@/lib/universities";

export default function Home() {
  const universities = getAllUniversities();

  return (
    <div>
      <section className="bg-gradient-to-b from-indigo-50 to-white px-4 py-24 dark:from-indigo-950/20 dark:to-zinc-950">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
            UniDiversity
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            全国の大学におけるダイバーシティ推進の取り組みを
            <br className="hidden sm:inline" />
            一元的に閲覧・比較できるサイト
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/universities"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
            >
              大学一覧を見る
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              このサイトについて
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="text-center">
            <p className="text-4xl font-bold text-indigo-600">
              {universities.length}
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              掲載大学数
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-indigo-600">9</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              比較項目数
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-indigo-600">7</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              対象地域
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          比較できる項目
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "LGBTQ施策",
              items: [
                "通称名の使用",
                "同性パートナー対応",
                "ジェンダーニュートラルトイレ",
                "性別欄の配慮",
                "SOGI研修",
                "アウティング防止",
              ],
            },
            {
              title: "相談窓口・支援",
              items: [
                "専門相談窓口",
                "カウンセラーSOGI研修",
                "ハラスメント連携",
              ],
            },
            {
              title: "サークル・団体",
              items: ["LGBTQ関連公認団体", "活動内容"],
            },
            {
              title: "宣言・方針",
              items: ["ダイバーシティ宣言", "基本方針公開", "行動計画策定"],
            },
          ].map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
            >
              <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-50">
                {category.title}
              </h3>
              <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
