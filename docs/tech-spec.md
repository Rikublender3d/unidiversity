# 技術仕様

> **ステータス: ドラフト（たたき台）**
> りく担当のドキュメントです。

## 1. 技術スタック

| レイヤー | 技術 |
|---|---|
| フロントエンド | Next.js 16 (App Router) + TypeScript |
| スタイリング | Tailwind CSS v4 |
| データ（現在） | 静的JSON（プロトタイプ） |
| データ（将来） | Headless CMS（microCMS を想定） |
| ホスティング | Vercel |
| コード品質 | ESLint + Prettier |

---

## 2. ディレクトリ構成

```
src/
├── app/                     # ページ（App Router）
│   ├── layout.tsx           # ルートレイアウト
│   ├── page.tsx             # トップページ
│   ├── about/
│   │   └── page.tsx         # このサイトについて
│   └── universities/
│       ├── page.tsx         # 大学一覧
│       └── [slug]/
│           └── page.tsx     # 大学詳細
├── components/              # 共通コンポーネント
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── PolicyBadge.tsx
│   └── UniversityCard.tsx
├── data/                    # 静的データ（JSON）
│   └── universities.json
├── lib/                     # ユーティリティ
│   └── universities.ts
└── types/                   # 型定義
    └── university.ts
```

---

## 3. データモデル

### University

```typescript
interface University {
  slug: string;              // URLスラッグ
  name: string;              // 大学名
  region: Region;            // 地域
  type: UniversityType;      // 国立/公立/私立
  prefecture: string;        // 都道府県
  website: string;           // 公式サイトURL
  lgbtqPolicies: LgbtqPolicy;
  supportSystem: SupportSystem;
  studentGroups: StudentGroup[];
  declaration: Declaration;
  notes: string;             // 備考
  sources: Source[];          // 出典
  updatedAt: string;         // 最終更新日
}
```

詳細は `src/types/university.ts` を参照。

---

## 4. 画面構成とレンダリング

| パス | レンダリング | 備考 |
|---|---|---|
| `/` | Static (SSG) | |
| `/universities` | Dynamic (searchParams使用) | 検索・フィルタ |
| `/universities/[slug]` | SSG (generateStaticParams) | 全slugを事前生成 |
| `/about` | Static (SSG) | |

---

## 5. CMS移行計画（将来）

1. microCMSにスキーマ作成
2. `src/lib/universities.ts` のデータ取得部分をAPI呼び出しに差し替え
3. JSONファイルを削除
4. ISR設定を追加

データアクセス層が `src/lib/universities.ts` に集約されているので、移行時の変更は最小限で済む。

---

## 6. パフォーマンス目標

| 指標 | 目標 |
|---|---|
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 90+ |
| First Contentful Paint | < 1.5s |
