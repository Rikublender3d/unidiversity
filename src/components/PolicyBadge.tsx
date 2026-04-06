import type { PolicyStatus } from "@/types/university";
import { POLICY_STATUS_LABELS } from "@/types/university";

const statusStyles: Record<PolicyStatus, string> = {
  yes: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  partial:
    "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  no: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  unknown:
    "bg-zinc-100 text-zinc-600 dark:bg-zinc-800/50 dark:text-zinc-400",
};

export default function PolicyBadge({ status }: { status: PolicyStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[status]}`}
    >
      {POLICY_STATUS_LABELS[status]}
    </span>
  );
}
