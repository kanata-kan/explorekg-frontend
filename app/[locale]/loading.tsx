// app/[local]/loading.tsx

import { NomadiaGlassSpinner } from "@/components/ui_v2/status/NomadiaGlassSpinner";

export default function Loading() {
  // prevent layout focus behavior
  return (
    <div suppressHydrationWarning>
      <NomadiaGlassSpinner />
    </div>
  );
}
