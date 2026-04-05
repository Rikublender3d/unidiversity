import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "このサイトについて",
  description: "UniDiversityの目的と運用方針について",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        このサイトについて
      </h1>

      <div className="space-y-8 text-zinc-700 dark:text-zinc-300">
        <section>
          <h2 className="mb-3 text-xl font-bold text-zinc-900 dark:text-zinc-50">
            UniDiversityとは
          </h2>
          <p className="leading-relaxed">
            UniDiversityは、全国の大学におけるダイバーシティ推進（特にLGBTQ関連施策）の取り組みを一元的に閲覧・比較できるWebサイトです。
          </p>
          <p className="mt-3 leading-relaxed">
            各大学の施策状況はバラバラに公開されており、横断的に比較する手段がありませんでした。このサイトは各大学の公開情報を整理・集約し、施策推進の参考にしていただくことを目的としています。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-zinc-900 dark:text-zinc-50">
            対象ユーザー
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>大学生</strong>
              （特にLGBTQ当事者・Ally）
              — 進学先・編入先の比較や、自大学の改善提案に
            </li>
            <li>
              <strong>大学教職員・ダイバーシティ推進担当</strong>
              — 他大学のベストプラクティスの参照に
            </li>
            <li>
              <strong>研究者・ジャーナリスト</strong>
              — 施策の全体像把握・分析に
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-zinc-900 dark:text-zinc-50">
            比較項目
          </h2>
          <p className="leading-relaxed">以下の観点から各大学の施策を整理しています：</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>LGBTQ施策（通称名使用、同性パートナー対応、トイレ、研修 等）</li>
            <li>相談窓口・支援体制</li>
            <li>LGBTQ関連の学生サークル・団体</li>
            <li>ダイバーシティ宣言・基本方針・行動計画</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-zinc-900 dark:text-zinc-50">
            データについて
          </h2>
          <p className="leading-relaxed">
            掲載情報は各大学の公式サイトや公開資料に基づいています。各大学の詳細ページには出典URLを記載していますので、正確性の確認にご利用ください。
          </p>
          <p className="mt-3 leading-relaxed">
            データの更新は年1回程度を想定しています。情報の誤りや更新のご要望がありましたら、GitHubのIssueにてお知らせください。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-zinc-900 dark:text-zinc-50">
            注意事項
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              本サイトは特定の大学を推奨・批判することを目的としていません。
            </li>
            <li>
              掲載情報は調査時点のものであり、最新の状況と異なる場合があります。
            </li>
            <li>
              施策の「有無」だけでなく、実際の運用状況も重要です。詳細は各大学に直接お問い合わせください。
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
