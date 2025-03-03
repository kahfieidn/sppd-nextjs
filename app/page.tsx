"use client";

import * as React from "react";
import FloatingActionButtons from "@/components/floating-action-buttons";
import QuickFilteringGrid from "@/components/quick-filtering-grid";

export default function Home() {
  return (
    <div>
      <QuickFilteringGrid />
      <FloatingActionButtons />
    </div>
  );
}
