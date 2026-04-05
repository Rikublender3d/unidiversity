import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-xl font-bold text-zinc-900 dark:text-zinc-50"
        >
          UniDiversity
        </Link>
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li>
            <Link
              href="/universities"
              className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              大学一覧
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              このサイトについて
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
