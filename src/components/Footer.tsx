export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row dark:text-zinc-400">
          <p>UniDiversity - 大学ダイバーシティ施策比較サイト</p>
          <p>
            データは各大学の公開情報に基づきます。正確性は出典を確認してください。
          </p>
        </div>
      </div>
    </footer>
  );
}
